/*
 * File: app/view/ContractDetail.js
 *
 * This file was generated by Sencha Architect
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

Ext.define('HelcPAD.view.appworkspace.Contract.ContractDetailList_erp', {
    extend: 'Ext.Container',
    id:'ContractDetailList_erp',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Search',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '合同资料',
                items: [
                    {
                    	id:'contractDetaillist_FH',
                        xtype: 'button',
                        ui: 'back',
                        text: '返回 '
                    },
                    //中转站
                    {
                    	id:'ZhongZhuangZhan',
                    	xtype:'hiddenfield',
                    },
                    //技价审
                    {
                    	id:'jjs',
                    	xtype:'hiddenfield',
                    },
                    //商务审
                    {
                    	id:'sws',
                    	xtype:'hiddenfield',
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                height: '100%',
                listeners:{
        			  activeitemchange:function( tabPanel, value, oldValue, eOpts ){
        				  if(value){
            					oldValue.setHidden(true);
              				value.setHidden(false);
          				 };
        			  }
                  },
                items: [
                    {
                        xtype: 'formpanel',
                        title: '合 同 头',
                        items: [
                            {
                                xtype: 'fieldset',
//                                title: '',
                                items: [
                                    {
                                    	id:'CONTRACT_NO',
                                        xtype: 'textfield',
                                        cls:'textf',
                                        labelWidth: '31%',
                                        label: '合同号',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'CONTRACT_TYPE_NAME',
                                        xtype: 'textfield',
                                        cls:'textf',
                                        labelWidth: '31%',
                                        label: '合同类型',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'SIGNER_EMP_NAME',
                                        xtype: 'textfield',
                                        cls:'textf',
                                        labelWidth: '31%',
                                        label: '合同签订人',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'RESPER_EMP_NAME',
                                    	xtype: 'textfield',
                                        cls:'textf',
                                        labelWidth: '31%',
                                        label: '合同负责人',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'CUSTOMER_NUMBER',
                                        xtype: 'textfield',
                                        cls:'textf',
                                        labelWidth: '31%',
                                        label: '客户',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'LARGE_CUSTOMER',
                                        xtype: 'textfield',
                                        cls:'textf',
                                        labelWidth: '31%',
                                        label: '大客户编码',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'SIGNER_COMPANY_NAME',
                                        xtype: 'textfield',
                                        cls:'textf',
                                        labelWidth: '31%',
                                        label: '签订分公司',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'SIGNER_DATE',
                                    	xtype: 'textfield',
                                    	cls:'textf',
                                    	labelWidth: '31%',
                                    	label: '签订日期',
                                    	readOnly:true,
                                    },
                                    {
                                    	id:'CUSTOMER_NAME',
                                    	xtype: 'textfield',
                                    	cls:'textf',
                                    	labelWidth: '31%',
                                    	label: '客户名称',
                                    	readOnly:true,
                                    },
                                    {
                                    	id:'TRACKER_COMPANY_NAME',
                                    	xtype: 'textfield',
                                    	cls:'textf',
                                    	labelWidth: '31%',
                                    	label: '跟单分公司',
                                    	readOnly:true,
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '工号列表',
                        items: [
							{
							    xtype: 'toolbar',
							    docked: 'top',
							    items: [
							        {
							            xtype: 'searchfield',
							            flex: 1,
							            label: '',
							            id:'searchno',
							            placeHolder: '输入工号、梯号...'
							        }
							    ]
							},
                            {
                                xtype: 'list',
                                id:'contractList_nolist',
                                store:'ContractStore_erp_Headers',
                                cls:'textf',
                                height: '100%',
                                itemTpl: [
                                          /*'<div>'+
                                          '<div name="groupkung_conlist" class="p_judge_box2" id="conkung_conlist">3</div>'+
                                          '{one}　AH1512345(合同编号)    设备合同（合同类型）</div>',
                                          '<div>客户名称    使用单位</div>'*/
                                          
                                          '<table border=0 width=100% style="color:#666" class="textf">'+
                                          '  <tr>'+
//                                          '     <td width=10% rowspan="2">'+
//                                          '        <div name="groupkung_conlist" class="p_judge_box2" id="conkung_conlist">3</div>'+
//                                          '     </td>'+
                                          '     <td width=90% style="font-size:14px">工号:{ELEVATOR_NO} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 梯号:{EQUIPMENT_NO} <br/> 梯型:{CM_ELEVATOR_TYPE_NAME}</td>'+
                                          '  </tr>'+
                                 
                                          '</table>',
                                      ],
                                onItemDisclosure: true
                            }
                        ]
                    }
                ]
            }
        ]
    }

});