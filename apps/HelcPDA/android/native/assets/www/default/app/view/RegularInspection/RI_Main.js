
/* JavaScript content from app/view/RegularInspection/RI_Main.js in folder common */
/*
 * File: app/view/RegularInspection/RI_Main.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcPDA.view.RegularInspection.RI_Main', {
    extend: 'Ext.tab.Panel',
    id: 'RI_Main',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.Hidden',
        'Ext.field.Text',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '检查项目',
                items: [
                    {
                        xtype: 'button',
                        id: 'btn_RIM_back',
                        ui: 'back',
                        text: ''
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id: 'btn_RIM_save',
                        text: '保存'
                    },
                    {
                        xtype: 'button',
                        id: 'btn_RIM_submit',
                        text: '提交'
                    }
                ]
            },
            {
                xtype: 'formpanel',
                title: '电梯信息',
//                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        defaults: {
                            readOnly: true,
                            labelWidth: '30%'
                        },
                        items: [
							{
								xtype: 'hiddenfield',
								id: 'H_RIM_PDASubmittedFlag'
							},
							{
                            	xtype: 'hiddenfield',
                            	id: 'H_RIM_ChkElevatorId'
                            },
                            {
                            	xtype: 'hiddenfield',
                            	id: 'H_RIM_AgreementItemId'
                            },
                            {
                            	xtype: 'hiddenfield',
                            	id: 'H_RIM_HoldDivisionId'
                            },
                            {
                            	xtype: 'hiddenfield',
                            	id: 'H_RIM_RefreshFlag'
                            },
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_AssetNumber',
                                label: '工号'
                            },
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_Category',
                                label: '类型'
                            },
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_ProductName',
                                label: '梯种'
                            },
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_AssetEdificeName',
                                label: '大楼'
                            },
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_AssetDomainName',
                                label: '地盘'
                            },
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_AccountMPType',
                                label: '客户'
                            },
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_MajorAgreementIdentify',
                                label: '大项目'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '上次定检信息',
                        defaults: {
                            readOnly: true,
                            labelWidth: 150,
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_Last_ActualCheckDate',
                                label: '实际检查时间'
                            },
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_Last_Status',
                                label: '状态'
                            },
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_Last_QCEngineers',
                                label: '检查工程师'
                            },
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_Last_ElevatorItemCount',
                                label: 'A级不良项目数'
                            },
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                title: '定检数据',
                id: 'tab_RIM_Input',
                items: [
                    {
                        xtype: 'fieldset',
                        id: 'FS_RIM_Input',
                        listeners:{
							initialize:function(){
								var FS_RIM_Input_title = new Date();                               
								Ext.getCmp('FS_RIM_Input').setTitle("打开本页时间："+FS_RIM_Input_title.toString());
							}
                        },
                        title: '当年财年范围：当年4月1日～次年3月31日',
                        defaults: {
                            labelWidth: 160
                        },
                        items: [
							{
								xtype: 'hiddenfield',
								id: 'H_tab_RIM_Input'
							},
                            {
                            	xtype: 'datepickerfield',
                                label: '统计周期（财年）',
                                placeHolder: '四位年份',
                                id: 'T_RIM_YearOfJob',
                                dateFormat: 'Y',
                                picker: {
                                	value: {year: new Date().getFullYear(),},
                                    slotOrder: ['year'],
                                    yearFrom: new Date().getFullYear()-1,
                                    yearTo: new Date().getFullYear()+1,
                                    doneButton: '确定',
                                    cancelButton: '取消'
                                }
                            },
                            {
                            	xtype: 'datepickerfield',
                                id: 'T_RIM_ActualCheckDate',
                                label: '实际检查时间',
                                placeHolder: '月/日/年',
                                dateFormat: 'm/d/Y',
                                picker: {
                                	value: {
                                        month: new Date().getMonth()+1,
                                        day: new Date().getDate(),
                                        year: new Date().getFullYear(),
                                    },
                                    slotOrder: ['month','day','year'],
                                    yearFrom: new Date().getFullYear()-1,
                                    yearTo: new Date().getFullYear()+1,
                                    doneButton: '确定',
                                    cancelButton: '取消'
                                }
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                items: [
                                    {
		                                xtype: 'textfield',
		                                id: 'T_RIM_QCEngineerName',
		                                readOnly: true,
		                                labelWidth: 160,
		                                width: '70%',
		                                label: '检查工程师'
		                            },
		                            {
		                            	xtype: 'hiddenfield',
		                            	id: 'T_RIM_QCEngineerId',
		                            },
                                    {
                                        xtype: 'container',
                                        flex: 1,
                                        items: [
                                            {
                                                xtype: 'button',
                                                id: 'btn_RIM_QCEngineer_search',
                                                centered: true,
                                                text: '查找'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'textfield',
                                id: 'T_RIM_MaintenanceLeader',
                                label: '保养组长'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'tab_CheckList',
                title: '不良项目记录',
                layout: 'vbox',
                items: [
                    {
                    	xtype: 'hiddenfield',
                    	id: 'H_tab_CheckList'
                    },
                    {
                        xtype: 'list',
                        id: 'L_RI_Main',
                        flex: 1,
                        itemTpl: [
                            '<div>{Location}</div>'
                        ],
                        store: 'ST_RI_Main',
                        onItemDisclosure: true
                    }
                ]
            }
        ]
    }

});