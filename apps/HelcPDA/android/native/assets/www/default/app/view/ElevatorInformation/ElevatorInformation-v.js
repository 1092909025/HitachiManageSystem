
/* JavaScript content from app/view/ElevatorInformation/ElevatorInformation-v.js in folder common */
/*
 * File: app/view/MyPanel38.js
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

Ext.define('HelcPDA.view.ElevatorInformation.ElevatorInformation-v', {
    extend: 'Ext.Panel',
    id:'ElevatorInformation-v_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '电梯详细信息',
                items: [
                    {
                        xtype: 'button',
                        ui:'back',
                        text: '返回',
                        id:'ElevatorInformation-v_id_FH_BUTTON',
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
            {
                xtype: 'formpanel',
                height: '100%',
                items: [
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '工号:',
                                id:'ASSET_NUM',
                                labelWidth: '40%',
                                value: [
                                   
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '梯种:',
                                id:'PRODUCT',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '梯种型号:',
                             //   id:'ELEVATOR_TYPE',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '梯种类别:',
                                id:'ELEVATOR_TYPE',
                                labelWidth: '40%',
                                value: [
                                  
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '电梯品牌:',
                                id:'BRAND',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '运行频率:',
                                id:'RUN_FREQ',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '运行环境:',
                                id:'RUN_ENV',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            }
                            ,{
                                xtype: 'textfield',
                                label: '特殊要求:',
                                id:'SPC_REQ',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '特殊标识:',
                                id:'SPECIAL_SIGN',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '地盘名称:',
                                id:'DOMAIN_ID',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '大楼名称:',
                                id:'EDIFICE_NAME',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '历史累计读数(次):',
                                id:'HIS_COUNT',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label:'当前运行读数(次):',
                                id:'CURR_COUNT',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '梯号:',
                                id:'ELEVATOR_MARK',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '速度:',
                                id:'ASSET_SPEED',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '总部 客户名称:',
                                id:'ABSTRACT',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '载重:',
                                id:'ASSET_LOAD',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '提升高度:',
                                id:'ASSET_HEIGHT',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '层:',
                                id:'ELEVATOR_FLOOR',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '站:',
                                id:'ELEVATOR_STOP',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '主要电话号码:',
                                id:'WORK_PH_NUM',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '所属司:',
                                id:'COMPANY_ID',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '所属站:',
                                id:'STATION_ID',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '片名称:',
                                id:'AREA_ID',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '组名称:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '三包开始时间:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '三包结束时间:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '合同编号:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '安装合同号:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '移交维保时间:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '移交客户时间:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '技检发证日期:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '上报完工期:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '设备代码:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '使用编号:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '售后服务号:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '进口工号:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '计划年检年:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '计划年检月:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '计划年检日:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '档案号:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '特殊功能:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '使用客户:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '城市:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '工号地址:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '客户特殊需求:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '省/(直辖)市:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '注释:',
                               // id:'AREA',
                                labelWidth: '60%',
                                value: [
                                    
                                ],
                                readOnly: true
                            }
                        ]
                    }
                ]
            }
        ]
    }

});