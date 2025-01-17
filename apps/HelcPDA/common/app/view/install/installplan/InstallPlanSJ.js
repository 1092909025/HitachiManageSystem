/*
 * File: app/view/MyPanel30.js
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

//安装计划实绩 2014-7-7 xcx
Ext.define('HelcPDA.view.install.installplan.InstallPlanSJ', {
    extend: 'Ext.Panel',
    id:'InstallPlanSJ_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
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
                title: '安装计划与实绩',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        id:'InstallPlanSJ_id_FH_Button',
                        text: '返回'
                    }
                ]
            },
            {
                xtype: 'formpanel',
                height: '100%',
                items: [
                    {
                        xtype: 'fieldset',
                        title: '进场',
                        items: [
                            {
                                xtype: 'textfield',
                                inputCls: 'az-input-text',
                                id:'InstallPlanSJ_JC_JH',
                                label: '计划',
                                labelWidth: '24%',
                                value: [
                                    '2014-07-05至2014-07-06'
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                inputCls: '',
                                id:'InstallPlanSJ_JC_SJ',
                                label: '实绩',
                                labelWidth: '24%',
                                value: [
                                    '2014-07-05至2014-07-06'
                                ],
                                readOnly: true
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '调试完成',
                        items: [
                            {
                                xtype: 'textfield',
                                inputCls: 'az-input-text',
                                id:'InstallPlanSJ_TSWC_JH',
                                label: '计划',
                                labelWidth: '24%',
                                value: [
                                  
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '实绩',
                                id:'InstallPlanSJ_TSWC_SJ',
                                labelWidth: '24%',
                                value: [
                                
                                ],
                                readOnly: true
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '厂检完成',
                        items: [
                            {
                                xtype: 'textfield',
                                inputCls: 'az-input-text',
                                label: '计划',
                                id:'InstallPlanSJ_CJWC_JH',
                                labelWidth: '24%',
                                value: [
                                   
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '实绩',
                                id:'InstallPlanSJ_CJWC_SJ',
                                labelWidth: '24%',
                                value: [
                                    
                                ],
                                readOnly: true
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '政府检发证',
                        items: [
                            {
                                xtype: 'textfield',
                                inputCls: 'az-input-text',
                                label: '计划',
                                id:'InstallPlanSJ_ZFJFZ_JH',
                                labelWidth: '24%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '实绩',
                                id:'InstallPlanSJ_ZFJFZ_SJ',
                                labelWidth: '24%',
                                value: [
                                   
                                ],
                                readOnly: true
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '总工期',
                        items: [
                            {
                                xtype: 'textfield',
                                inputCls: 'az-input-text',
                                label: '计划',
                                id:'InstallPlanSJ_ZGQ_JH',
                                labelWidth: '24%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '实绩',
                                id:'InstallPlanSJ_ZGQ_SJ',
                                labelWidth: '24%',
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