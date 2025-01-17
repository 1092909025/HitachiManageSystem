
/* JavaScript content from app/view/startProcess/StartprocessName.js in folder common */
/*
 * File: app/view/p3.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcOA.view.startProcess.StartprocessName', {
    extend: 'Ext.Panel',
    id:'StartprocessName_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        style: 'background-color:#edebf1',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '启动流程',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        listeners:{
                        	tap:function(){
                        		var obj1=Ext.getCmp('StartProcess_id');
                        		if(!obj1){
                        			obj1=Ext.create('HelcOA.view.StartProcess.StartProcess');
                        		}
                        		Ext.Viewport.setActiveItem(obj1);
                        	}
                        }
                    },
                    {
                        xtype: 'button',
                        iconCls: 'home'
                    }
                ]
            },
            {
                xtype: 'list',
                id:'StartprocessNameList',
                flex: 1,
                itemTpl: [
                    '<table border=0 class="i_Button_List">',
                    '  <tr>',
                    '      <td rowspan="2" class="i_Button_List_Icon_1 {class}" style="color:{color}">{icon}</td>',
                    '      <td colspan="2" class="i_Button_List_Title">{title}</td>',
                    '  </tr>',
                    '</table>'
                ],
                onItemDisclosure: true,
                store:'StartProcessS'
            }
        ]
    }

});