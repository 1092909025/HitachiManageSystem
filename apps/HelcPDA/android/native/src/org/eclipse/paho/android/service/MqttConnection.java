/*
============================================================================ 
Licensed Materials - Property of IBM

5747-SM3
 
(C) Copyright IBM Corp. 1999, 2012 All Rights Reserved.
 
US Government Users Restricted Rights - Use, duplication or
disclosure restricted by GSA ADP Schedule Contract with
IBM Corp.
============================================================================
 */
package org.eclipse.paho.android.service;

import java.io.File;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.eclipse.paho.android.service.MessageStore.StoredMessage;
import org.eclipse.paho.client.mqttv3.IMqttActionListener;
import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.IMqttToken;
import org.eclipse.paho.client.mqttv3.MqttAsyncClient;
import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttClientPersistence;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.MqttPersistenceException;
import org.eclipse.paho.client.mqttv3.MqttSecurityException;
import org.eclipse.paho.client.mqttv3.persist.MqttDefaultFilePersistence;
import org.json.JSONObject;

import com.HelcPDA.util.encryption.Base64;

import android.app.Service;
import android.content.Context;
import android.os.Bundle;
import android.os.PowerManager;
import android.os.PowerManager.WakeLock;
import android.util.Log;

/**
 * <p>
 * MqttConnection holds a MqttAsyncClient {host,port,clientId} instance to perform 
 * MQTT operations to MQTT broker.
 * </p>
 * <p>
 * Most of the major API here is intended to implement the most general forms of
 * the methods in IMqttAsyncClient, with slight adjustments for the Android
 * environment<br>
 * These adjustments usually consist of adding two parameters to each method :-
 * <ul>
 * <li>invocationContext - a string passed from the application to identify the
 * context of the operation (mainly included for support of the javascript API
 * implementation)</li>
 * <li>activityToken - a string passed from the Activity to relate back to a
 * callback method or other context-specific data</li>
 * </ul>
 * </p>
 * <p>
 * Operations are very much asynchronous, so success and failure are notified by
 * packing the relevant data into Intent objects which are broadcast back to the
 * Activity via the MqttService.callbackToActivity() method.
 * </p>
 */
class MqttConnection implements MqttCallback {

  // Strings for Intents etc..
  private static final String TAG = "MqttConnection";
  // Error status messages
  private static final String NOT_CONNECTED = "not connected";

  // fields for the connection definition
  private String serverURI;
  private String clientId;
  private MqttClientPersistence persistence = null;
  private MqttConnectOptions connectOptions;

  // Client handle, used for callbacks...
  private String clientHandle;

  // our client object - instantiated on connect
  private MqttAsyncClient myClient = null;

  // our (parent) service object
  private MqttService service = null;
  
  private volatile boolean disconnected = false;
  private boolean cleanSession = true;
  
  //Indicate this connection is connecting or not.
  //This variable uses to avoid reconnect multiple times.
  private volatile boolean isConnecting = false;

  // Saved sent messages and their corresponding Topics, activityTokens and
  // invocationContexts, so we can handle "deliveryComplete" callbacks
  // from the mqttClient
  private Map<IMqttDeliveryToken, String /* Topic */> savedTopics = new HashMap<IMqttDeliveryToken, String>();
  private Map<IMqttDeliveryToken, MqttMessage> savedSentMessages = new HashMap<IMqttDeliveryToken, MqttMessage>();
  private Map<IMqttDeliveryToken, String> savedActivityTokens = new HashMap<IMqttDeliveryToken, String>();
  private Map<IMqttDeliveryToken, String> savedInvocationContexts = new HashMap<IMqttDeliveryToken, String>();

  private WakeLock wakelock = null;
  private String wakeLockTag = null;
  
  public enum AppType {
	  Pmsg,//信息
	  G001,//故障
	  AZ01,//安装任务
	  AZ02,//排产任务
	  AZ03,//发货任务
	  AZ04,//调试任务
	  DEF
	}

  /**
   * Constructor - create an MqttConnection to communicate with MQTT server
   * 
   * @param service
   *            our "parent" service - we make callbacks to it
   * @param serverURI
   *            the URI of the MQTT server to which we will connect
   * @param clientId
   *            the name by which we will identify ourselves to the MQTT
   *            server
   * @param persistence the persistence class to use to store in-flight message. If null then the
   * 			default persistence mechanism is used
   * @param clientHandle
   *            the "handle" by which the activity will identify us
   */
  MqttConnection(MqttService service, String serverURI, String clientId,
      MqttClientPersistence persistence, String clientHandle) {
    this.serverURI = serverURI.toString();
    this.service = service;
    this.clientId = clientId;
    this.persistence = persistence;
    this.clientHandle = clientHandle;

    StringBuffer buff = new StringBuffer(this.getClass().getCanonicalName());
    buff.append(" ");
    buff.append(clientId);
    buff.append(" ");
    buff.append("on host ");
    buff.append(serverURI);
    wakeLockTag = buff.toString();
  }

  // The major API implementation follows
  /**
   * Connect to the server specified when we were instantiated
   * 
   * @param options
   *            timeout, etc
   * @param invocationContext
   *            arbitrary data to be passed back to the application
   * @param activityToken
   *            arbitrary identifier to be passed back to the Activity
   */
  public void connect(MqttConnectOptions options, String invocationContext,
      String activityToken) {

    connectOptions = options;
    if(options != null){
    	cleanSession = options.isCleanSession();
    }

    service.traceDebug(TAG, "---isCleanSession:"+connectOptions.isCleanSession());
    if (connectOptions.isCleanSession()) { // if it's a clean session,
      // discard old data
      service.messageStore.clearArrivedMessages(clientHandle);
    }

    service.traceDebug(TAG, "Connecting {" + serverURI + "} as {"
                            + clientId + "}");
    final Bundle resultBundle = new Bundle();
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTIVITY_TOKEN,
        activityToken);
    resultBundle.putString(
        MqttServiceConstants.CALLBACK_INVOCATION_CONTEXT,
        invocationContext);
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
        MqttServiceConstants.CONNECT_ACTION);
    try {
      if (persistence == null) {
        // ask Android where we can put files
        File myDir = service.getExternalFilesDir(TAG);

        if (myDir == null) {
          //No external storage, use internal storage instead.
          myDir = service.getDir(TAG, Context.MODE_PRIVATE);
          
          if(myDir == null){
        	  //Shouldn't happen.
	          resultBundle.putString(
	              MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
	              "Error! No external and internal storage available");
	          resultBundle.putSerializable(
	              MqttServiceConstants.CALLBACK_EXCEPTION, new MqttPersistenceException());
	          service.callbackToActivity(clientHandle, Status.ERROR,
	              resultBundle);
	          return;
          }
        }

        // use that to setup MQTT client persistence storage
        persistence = new MqttDefaultFilePersistence(
            myDir.getAbsolutePath());
      }

      myClient = new MqttAsyncClient(serverURI, clientId, persistence, 
    		  new AlarmPingSender(service));
      myClient.setCallback(this);
      IMqttActionListener listener = new MqttConnectionListener(
          resultBundle) {

        @Override
        public void onSuccess(IMqttToken asyncActionToken) {
          //since the device's cpu can go to sleep, acquire a wakelock and drop it later.
          acquireWakeLock();
          service.callbackToActivity(clientHandle, Status.OK,
              resultBundle);
          deliverBacklog();          
          disconnected = false;
          releaseWakeLock();
        }
      };
      myClient.connect(connectOptions, invocationContext, listener);
    }
    catch (Exception e) {
      handleException(resultBundle, e);
    }
  }

  private void handleException(final Bundle resultBundle, Exception e) {
    resultBundle.putString(MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
        e.getLocalizedMessage());

    resultBundle.putSerializable(MqttServiceConstants.CALLBACK_EXCEPTION, e);

    service.callbackToActivity(clientHandle, Status.ERROR, resultBundle);
  }

  /**
   * Attempt to deliver any outstanding messages we've received but which the
   * application hasn't acknowledged. If "cleanSession" was specified, we'll
   * have already purged any such messages from our messageStore.
   */
  private void deliverBacklog() {
    Iterator<StoredMessage> backlog = service.messageStore
        .getAllArrivedMessages(clientHandle);
    while (backlog.hasNext()) {
      StoredMessage msgArrived = backlog.next();
      Bundle resultBundle = messageToBundle(msgArrived.getMessageId(),
          msgArrived.getTopic(), msgArrived.getMessage());
      resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
          MqttServiceConstants.MESSAGE_ARRIVED_ACTION);
      service.callbackToActivity(clientHandle, Status.OK, resultBundle);
    }
  }

  /**
   * Create a bundle containing all relevant data pertaining to a message
   * 
   * @param messageId
   *            the message's identifier in the messageStore, so that a
   *            callback can be made to remove it once delivered
   * @param topic
   *            the topic on which the message was delivered
   * @param message
   *            the message itself
   * @return the bundle
   */
  private Bundle messageToBundle(String messageId, String topic,
      MqttMessage message) {
    Bundle result = new Bundle();
    result.putString(MqttServiceConstants.CALLBACK_MESSAGE_ID, messageId);
    result.putString(MqttServiceConstants.CALLBACK_DESTINATION_NAME, topic);
    result.putParcelable(MqttServiceConstants.CALLBACK_MESSAGE_PARCEL,
        new ParcelableMqttMessage(message));
    return result;
  }
  
  /**
   * Close connection from the server
   * 
   */
  void close(){
	service.traceDebug(TAG, "close()");
	try {
		if(myClient != null){
			myClient.close();
		}
	} catch (MqttException e) {
		//Pass a new bundle, let handleException stores error messages.
		handleException(new Bundle(), e);
	}
  }

  /**
   * Disconnect from the server
   * 
   * @param quiesceTimeout
   *            in milliseconds
   * @param invocationContext
   *            arbitrary data to be passed back to the application
   * @param activityToken
   *            arbitrary string to be passed back to the activity
   */
  void disconnect(long quiesceTimeout, String invocationContext,
      String activityToken) {
    service.traceDebug(TAG, "disconnect()");
    disconnected = true;
    final Bundle resultBundle = new Bundle();
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTIVITY_TOKEN,
        activityToken);
    resultBundle.putString(
        MqttServiceConstants.CALLBACK_INVOCATION_CONTEXT,
        invocationContext);
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
        MqttServiceConstants.DISCONNECT_ACTION);
    if ((myClient != null) && (myClient.isConnected())) {
      IMqttActionListener listener = new MqttConnectionListener(
          resultBundle);
      try {
        myClient.disconnect(quiesceTimeout, invocationContext, listener);
      }
      catch (Exception e) {
        handleException(resultBundle, e);
      }
    }
    else {
      resultBundle.putString(MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
          NOT_CONNECTED);
      service.traceError(MqttServiceConstants.DISCONNECT_ACTION,
          NOT_CONNECTED);
      service.callbackToActivity(clientHandle, Status.ERROR, resultBundle);
    }

    if (connectOptions.isCleanSession()) {
      // assume we'll clear the stored messages at this point
      service.messageStore.clearArrivedMessages(clientHandle);
    }

    releaseWakeLock();
  }

  /**
   * Disconnect from the server
   * 
   * @param invocationContext
   *            arbitrary data to be passed back to the application
   * @param activityToken
   *            arbitrary string to be passed back to the activity
   */
  void disconnect(String invocationContext, String activityToken) {
    service.traceDebug(TAG, "disconnect()");
    disconnected = true;
    final Bundle resultBundle = new Bundle();
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTIVITY_TOKEN,
        activityToken);
    resultBundle.putString(
        MqttServiceConstants.CALLBACK_INVOCATION_CONTEXT,
        invocationContext);
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
        MqttServiceConstants.DISCONNECT_ACTION);
    if ((myClient != null) && (myClient.isConnected())) {
      IMqttActionListener listener = new MqttConnectionListener(
          resultBundle);
      try {
        myClient.disconnect(invocationContext, listener);
      }
      catch (Exception e) {
        handleException(resultBundle, e);
      }
    }
    else {
      resultBundle.putString(MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
          NOT_CONNECTED);
      service.traceError(MqttServiceConstants.DISCONNECT_ACTION,
          NOT_CONNECTED);
      service.callbackToActivity(clientHandle, Status.ERROR, resultBundle);
    }

    if (connectOptions.isCleanSession()) {
      // assume we'll clear the stored messages at this point
      service.messageStore.clearArrivedMessages(clientHandle);
    }
    releaseWakeLock();
  }

  /**
   * @return true if we are connected to an MQTT server
   */
  public boolean isConnected() {
    return myClient.isConnected();
  }

  /**
   * Publish a message on a topic
   * 
   * @param topic
   *            the topic on which to publish - represented as a string, not
   *            an MqttTopic object
   * @param payload
   *            the content of the message to publish
   * @param qos
   *            the quality of service requested
   * @param retained
   *            whether the MQTT server should retain this message
   * @param invocationContext
   *            arbitrary data to be passed back to the application
   * @param activityToken
   *            arbitrary string to be passed back to the activity
   * @return token for tracking the operation
   */
  public IMqttDeliveryToken publish(String topic, byte[] payload, int qos,
      boolean retained, String invocationContext, String activityToken) {
    final Bundle resultBundle = new Bundle();
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
        MqttServiceConstants.SEND_ACTION);
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTIVITY_TOKEN,
        activityToken);
    resultBundle.putString(
        MqttServiceConstants.CALLBACK_INVOCATION_CONTEXT,
        invocationContext);

    IMqttDeliveryToken sendToken = null;

    if ((myClient != null) && (myClient.isConnected())) {
      IMqttActionListener listener = new MqttConnectionListener(
          resultBundle);
      try {
        MqttMessage message = new MqttMessage(payload);
        message.setQos(qos);
        message.setRetained(retained);
        sendToken = myClient.publish(topic, payload, qos, retained,
            invocationContext, listener);
        storeSendDetails(topic, message, sendToken, invocationContext,
            activityToken);
      }
      catch (Exception e) {
        handleException(resultBundle, e);
      }
    }
    else {
      resultBundle.putString(MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
          NOT_CONNECTED);
      service.traceError(MqttServiceConstants.SEND_ACTION, NOT_CONNECTED);
      service.callbackToActivity(clientHandle, Status.ERROR, resultBundle);
    }

    return sendToken;
  }

  /**
   * Publish a message on a topic
   * 
   * @param topic
   *            the topic on which to publish - represented as a string, not
   *            an MqttTopic object
   * @param message
   *            the message to publish
   * @param invocationContext
   *            arbitrary data to be passed back to the application
   * @param activityToken
   *            arbitrary string to be passed back to the activity
   * @return token for tracking the operation
   */
  public IMqttDeliveryToken publish(String topic, MqttMessage message,
      String invocationContext, String activityToken) {
    final Bundle resultBundle = new Bundle();
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
        MqttServiceConstants.SEND_ACTION);
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTIVITY_TOKEN,
        activityToken);
    resultBundle.putString(
        MqttServiceConstants.CALLBACK_INVOCATION_CONTEXT,
        invocationContext);

    IMqttDeliveryToken sendToken = null;

    if ((myClient != null) && (myClient.isConnected())) {
      IMqttActionListener listener = new MqttConnectionListener(
          resultBundle);
      try {
        sendToken = myClient.publish(topic, message, invocationContext,
            listener);
        storeSendDetails(topic, message, sendToken, invocationContext,
            activityToken);
      }
      catch (Exception e) {
        handleException(resultBundle, e);
      }
    }
    else {
      resultBundle.putString(MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
          NOT_CONNECTED);
      service.traceError(MqttServiceConstants.SEND_ACTION, NOT_CONNECTED);
      service.callbackToActivity(clientHandle, Status.ERROR, resultBundle);
    }
    return sendToken;
  }

  /**
   * Subscribe to a topic
   * 
   * @param topic
   *            a possibly wildcarded topic name
   * @param qos
   *            requested quality of service for the topic
   * @param invocationContext
   *            arbitrary data to be passed back to the application
   * @param activityToken
   *            arbitrary identifier to be passed back to the Activity
   */
  public void subscribe(final String topic, final int qos,
      String invocationContext, String activityToken) {
    service.traceDebug(TAG, "subscribe({" + topic + "}," + qos + ",{"
                            + invocationContext + "}, {" + activityToken + "}");
    final Bundle resultBundle = new Bundle();
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
        MqttServiceConstants.SUBSCRIBE_ACTION);
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTIVITY_TOKEN,
        activityToken);
    resultBundle.putString(
        MqttServiceConstants.CALLBACK_INVOCATION_CONTEXT,
        invocationContext);

    if ((myClient != null) && (myClient.isConnected())) {
      IMqttActionListener listener = new MqttConnectionListener(
          resultBundle);
      try {
        myClient.subscribe(topic, qos, invocationContext, listener);
      }
      catch (Exception e) {
        handleException(resultBundle, e);
      }
    }
    else {
      resultBundle.putString(MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
          NOT_CONNECTED);
      service.traceError("subscribe", NOT_CONNECTED);
      service.callbackToActivity(clientHandle, Status.ERROR, resultBundle);
    }
  }

  /**
   * Subscribe to one or more topics
   * 
   * @param topic
   *            a list of possibly wildcarded topic names
   * @param qos
   *            requested quality of service for each topic
   * @param invocationContext
   *            arbitrary data to be passed back to the application
   * @param activityToken
   *            arbitrary identifier to be passed back to the Activity
   */
  public void subscribe(final String[] topic, final int[] qos,
      String invocationContext, String activityToken) {
    service.traceDebug(TAG, "subscribe({" + topic + "}," + qos + ",{"
                            + invocationContext + "}, {" + activityToken + "}");
    final Bundle resultBundle = new Bundle();
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
        MqttServiceConstants.SUBSCRIBE_ACTION);
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTIVITY_TOKEN,
        activityToken);
    resultBundle.putString(
        MqttServiceConstants.CALLBACK_INVOCATION_CONTEXT,
        invocationContext);

    if ((myClient != null) && (myClient.isConnected())) {
      IMqttActionListener listener = new MqttConnectionListener(
          resultBundle);
      try {
        myClient.subscribe(topic, qos, invocationContext, listener);
      }
      catch (Exception e) {
        handleException(resultBundle, e);
      }
    }
    else {
      resultBundle.putString(MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
          NOT_CONNECTED);
      service.traceError("subscribe", NOT_CONNECTED);
      service.callbackToActivity(clientHandle, Status.ERROR, resultBundle);
    }
  }

  /**
   * Unsubscribe from a topic
   * 
   * @param topic
   *            a possibly wildcarded topic name
   * @param invocationContext
   *            arbitrary data to be passed back to the application
   * @param activityToken
   *            arbitrary identifier to be passed back to the Activity
   */
  void unsubscribe(final String topic, String invocationContext,
      String activityToken) {
    service.traceDebug(TAG, "unsubscribe({" + topic + "},{"
                            + invocationContext + "}, {" + activityToken + "})");
    final Bundle resultBundle = new Bundle();
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
        MqttServiceConstants.UNSUBSCRIBE_ACTION);
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTIVITY_TOKEN,
        activityToken);
    resultBundle.putString(
        MqttServiceConstants.CALLBACK_INVOCATION_CONTEXT,
        invocationContext);
    if ((myClient != null) && (myClient.isConnected())) {
      IMqttActionListener listener = new MqttConnectionListener(
          resultBundle);
      try {
        myClient.unsubscribe(topic, invocationContext, listener);
      }
      catch (Exception e) {
        handleException(resultBundle, e);
      }
    }
    else {
      resultBundle.putString(MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
          NOT_CONNECTED);

      service.traceError("subscribe", NOT_CONNECTED);
      service.callbackToActivity(clientHandle, Status.ERROR, resultBundle);
    }
  }

  /**
   * Unsubscribe from one or more topics
   * 
   * @param topic
   *            a list of possibly wildcarded topic names
   * @param invocationContext
   *            arbitrary data to be passed back to the application
   * @param activityToken
   *            arbitrary identifier to be passed back to the Activity
   */
  void unsubscribe(final String[] topic, String invocationContext,
      String activityToken) {
    service.traceDebug(TAG, "unsubscribe({" + topic + "},{"
                            + invocationContext + "}, {" + activityToken + "})");
    final Bundle resultBundle = new Bundle();
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
        MqttServiceConstants.UNSUBSCRIBE_ACTION);
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTIVITY_TOKEN,
        activityToken);
    resultBundle.putString(
        MqttServiceConstants.CALLBACK_INVOCATION_CONTEXT,
        invocationContext);
    if ((myClient != null) && (myClient.isConnected())) {
      IMqttActionListener listener = new MqttConnectionListener(
          resultBundle);
      try {
        myClient.unsubscribe(topic, invocationContext, listener);
      }
      catch (Exception e) {
        handleException(resultBundle, e);
      }
    }
    else {
      resultBundle.putString(MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
          NOT_CONNECTED);

      service.traceError("subscribe", NOT_CONNECTED);
      service.callbackToActivity(clientHandle, Status.ERROR, resultBundle);
    }
  }

  /**
   * Get tokens for all outstanding deliveries for a client
   * 
   * @return an array (possibly empty) of tokens
   */
  public IMqttDeliveryToken[] getPendingDeliveryTokens() {
    return myClient.getPendingDeliveryTokens();
  }

  // Implement MqttCallback
  /**
   * Callback for connectionLost
   * 
   * @param why
   *            the exeception causing the break in communications
   */
  @Override
  public void connectionLost(Throwable why) {
    service.traceDebug(TAG, "connectionLost(" + why.getMessage() + ")");

    try {
      myClient.disconnect(null, new IMqttActionListener() {

        @Override
        public void onSuccess(IMqttToken asyncActionToken) {
          // No action
        }

        @Override
        public void onFailure(IMqttToken asyncActionToken,
            Throwable exception) {
          // No action
        }
      });
    }
    catch (Exception e) {
      // ignore it - we've done our best
    }

    Bundle resultBundle = new Bundle();
    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
        MqttServiceConstants.ON_CONNECTION_LOST_ACTION);
    if (why != null) {
      resultBundle.putString(MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
          why.getMessage());
      if (why instanceof MqttException) {
        resultBundle.putSerializable(MqttServiceConstants.CALLBACK_EXCEPTION,
            why);
      }
      resultBundle.putString(
          MqttServiceConstants.CALLBACK_EXCEPTION_STACK,
          Log.getStackTraceString(why));
    }
    service.callbackToActivity(clientHandle, Status.OK, resultBundle);

    //client has lost connection no need for wake lock
    releaseWakeLock();
  }

  /**
   * Callback to indicate a message has been delivered (the exact meaning of
   * "has been delivered" is dependent on the QOS value)
   * 
   * @param messageToken
   *            the messge token provided when the message was originally sent
   */
  @Override
  public void deliveryComplete(IMqttDeliveryToken messageToken) {

    service.traceDebug(TAG, "deliveryComplete(" + messageToken + ")");

    MqttMessage message = savedSentMessages.remove(messageToken);
    if (message != null) { // If I don't know about the message, it's
      // irrelevant
      String topic = savedTopics.remove(messageToken);
      String activityToken = savedActivityTokens.remove(messageToken);
      String invocationContext = savedInvocationContexts
          .remove(messageToken);

      Bundle resultBundle = messageToBundle(null, topic, message);
      if (activityToken != null) {
        resultBundle.putString(
            MqttServiceConstants.CALLBACK_ACTION,
            MqttServiceConstants.SEND_ACTION);
        resultBundle.putString(
            MqttServiceConstants.CALLBACK_ACTIVITY_TOKEN,
            activityToken);
        resultBundle.putString(
            MqttServiceConstants.CALLBACK_INVOCATION_CONTEXT,
            invocationContext);
    
        service.callbackToActivity(clientHandle, Status.OK,
            resultBundle);
      }
      resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
          MqttServiceConstants.MESSAGE_DELIVERED_ACTION);
      service.callbackToActivity(clientHandle, Status.OK,
          resultBundle);
    }

    // this notification will have kept the connection alive but send the previously sechudled ping anyw
  }

  /**
   * Callback when a message is received
   * 
   * @param topic
   *            the topic on which the message was received
   * @param message
   *            the message itself
   */
  @Override
  public void messageArrived(String topic, MqttMessage message)
      throws Exception {
    service.traceDebug(TAG,
        "---messageArrived(" + topic + "," + message.toString() + "");
    String msg = "";
    String tle = "";
    JSONObject jo_msg = null;
    
    try{
    	if(message.toString().contains("{")) {
        	jo_msg = new JSONObject(message.toString());
        	msg = jo_msg.optString("message");
        	msg = new String(Base64.decode(msg),"GB2312");
        	tle = jo_msg.optString("title");
        	tle = new String(Base64.decode(tle),"GB2312");
        	jo_msg.put("message", msg.replace("nl", "<br/>"));
        	jo_msg.put("title", tle.replace("nl", "<br/>"));
        }
    }catch (Exception e){
    	System.out.println("---e:"+e.getMessage());
    }
    
    if(jo_msg != null) {
    	message.setPayload(jo_msg.toString().getBytes());
    }

    MqttConnection.AppType apptype = null;
    try{
    	 apptype = MqttConnection.AppType.valueOf(topic.
    				substring( topic.lastIndexOf("/")+1, topic.length()));
    }catch (Exception e){
    	apptype = MqttConnection.AppType.valueOf("DEF");
    }

    switch (apptype) {
	case Pmsg:
		service.showNotificationWithSound(message.toString());
		break;
	case G001:
		service.showNotificationWithSound("收到新的待处理故障信息");
		break;
	case AZ01:
		service.showNotificationWithSound("收到新的安装任务信息");
		break;
	case AZ02:
		service.showNotificationWithSound("收到新的排产任务信息");
		break;
	case AZ03:
		service.showNotificationWithSound("收到新的发货任务信息");
		break;
	case AZ04:
		service.showNotificationWithSound("收到新的调试任务信息");
		break;
	case DEF:
		service.showNotificationWithSound(message.toString());
//		String messageId = service.messageStore.storeArrived(clientHandle,
//		        topic, message);
//		    Bundle resultBundle = messageToBundle(messageId, topic, message);
//		    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
//		        MqttServiceConstants.MESSAGE_ARRIVED_ACTION);
//		    resultBundle.putString(MqttServiceConstants.CALLBACK_MESSAGE_ID,
//		        messageId);
//		    service.callbackToActivity(clientHandle, Status.OK, resultBundle);
		break;
	default:
		break;
	}
	
	   String messageId = service.messageStore.storeArrived(clientHandle,
		        topic, message);
		    Bundle resultBundle = messageToBundle(messageId, topic, message);
		    resultBundle.putString(MqttServiceConstants.CALLBACK_ACTION,
		        MqttServiceConstants.MESSAGE_ARRIVED_ACTION);
		    resultBundle.putString(MqttServiceConstants.CALLBACK_MESSAGE_ID,
		        messageId);
		    service.callbackToActivity(clientHandle, Status.OK, resultBundle);
  }

  /**
   * Store details of sent messages so we can handle "deliveryComplete"
   * callbacks from the mqttClient
   * 
   * @param topic
   * @param msg
   * @param messageToken
   * @param invocationContext
   * @param activityToken
   */
  private void storeSendDetails(final String topic, final MqttMessage msg,
      final IMqttDeliveryToken messageToken,
      final String invocationContext, final String activityToken) {
    savedTopics.put(messageToken, topic);
    savedSentMessages.put(messageToken, msg);
    savedActivityTokens.put(messageToken, activityToken);
    savedInvocationContexts.put(messageToken, invocationContext);
  }

  /**
   * Acquires a partial wake lock for this client
   */
  private void acquireWakeLock() {
    if (wakelock == null) {
      PowerManager pm = (PowerManager) service
          .getSystemService(Service.POWER_SERVICE);
      wakelock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK,
          wakeLockTag);
    }
    wakelock.acquire();

  }

  /**
   * Releases the currently held wake lock for this client
   */
  private void releaseWakeLock() {
	  if(wakelock != null && wakelock.isHeld()){
		  wakelock.release();
	  }
  }

  /**
   * General-purpose IMqttActionListener for the Client context
   * <p>
   * Simply handles the basic success/failure cases for operations which don't
   * return results
   * 
   */
  private class MqttConnectionListener implements IMqttActionListener {

    private final Bundle resultBundle;

    private MqttConnectionListener(Bundle resultBundle) {
      this.resultBundle = resultBundle;
    }

    @Override
    public void onSuccess(IMqttToken asyncActionToken) {
      service.callbackToActivity(clientHandle, Status.OK, resultBundle);
    }

    @Override
    public void onFailure(IMqttToken asyncActionToken, Throwable exception) {
      resultBundle.putString(MqttServiceConstants.CALLBACK_ERROR_MESSAGE,
          exception.getLocalizedMessage());

      resultBundle.putSerializable(MqttServiceConstants.CALLBACK_EXCEPTION, exception);

      service.callbackToActivity(clientHandle, Status.ERROR, resultBundle);
    }
  }
  
  /**
    * Receive notification that we are offline<br>
	* if cleanSession is true, we need to regard this as a disconnection
	*/
  void offline() {
//		LogUtil.i(TAG, "MqttServiceClient disconnected:"+disconnected+" cleanSession:"+cleanSession);
	if (!disconnected && !cleanSession) {
		Exception e = new Exception("Android offline");
		connectionLost(e);
	}
  }
  
  /**
	* Reconnect<br>
	* Only appropriate if cleanSession is false and we were connected
	* Declare as synchronized to avoid multiple calls to this method to send connect 
	* multiple times 
	*/
  synchronized void reconnect() {
	if(isConnecting){
		//The client is connecting. Return.
		return ;
	}
	  
	if (!disconnected && !cleanSession) {
		try {
			myClient.connect(connectOptions, null, new IMqttActionListener(){

				@Override
				public void onFailure(IMqttToken token, Throwable throwable) {
					setConnectingState(false);
				}

				@Override
				public void onSuccess(IMqttToken token) {
					setConnectingState(false);
					disconnected = true;
				}
				
			});
			setConnectingState(true);
		} catch (MqttException e) {
			Log.e(TAG, "Cannot connect to remote server." + e.getMessage());
			setConnectingState(false);
		}
		deliverBacklog();
	}
  }
  
  /**
   * 
   * @param isConnecting
   */
  synchronized void setConnectingState(boolean isConnecting){
	  this.isConnecting = isConnecting; 
  }
}
