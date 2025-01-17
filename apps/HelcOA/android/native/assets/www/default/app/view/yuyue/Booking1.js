
/* JavaScript content from app/view/yuyue/Booking1.js in folder common */
/*
 * File: app/view/Booking1.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('HelcOA.view.yuyue.Booking1', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.TextArea'
    ],

    config: {
    	id:'Booking1',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '预约申请',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
//                        html: ' <i class="fa fa-chevron-left"></i>',
                        itemId: 'Booking1_return_btn'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                flex: 1,
                id:'yytab',
                items: [
                    {
                        xtype: 'container',
                        title: '预约资料',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'formpanel',
                                flex: 1,
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        title: '',
                                        items: [
{
    xtype: 'textfield',
    label: '预约类型',
    id:'yylx',
    readOnly: true
  },
{
    xtype: 'textfield',
    label: '编号',
    id:'FileNo',
    readOnly: true
  },
                                            {
                                                xtype: 'textfield',
                                                id:'title',
                                                label: '主题',
//                                                value: [
//                                                    'xxx主题'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '地点',
                                                id:'address',
//                                                value: [
//                                                    '番禺'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '单位',
                                                id:'company',
//                                                value: [
//                                                    '广州xx公司'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '陪同人',
                                                id:'cacceptman',
//                                                value: [
//                                                    '2'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '人数',
                                                id:'rs',
//                                                value: [
//                                                    '2'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '参观时间',
                                                id:'date',
//                                                value: [
//                                                    '2016-03-01'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '接送时间',
                                                id:'ccdate',
//                                                value: [
//                                                    '2016-03-01'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textareafield',
                                                id:'yijian',
                                                label: '备注',
                                                minHeight:'88px',
//                                                value: [
//                                                    '-'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'hiddenfield',
                                                id:'type',
//                                           
                                            },
                                         
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        id:'jdbutton',
                                        margin: '10 10 0 10',
                                        text: '确认接待'
                                    },
                                    {
                                        xtype: 'fieldset',
                                        
                                        title: '退单原因',
                                        items: [
                                            {
                                                xtype: 'textareafield',
                                                id:'tdyy',
                                                minHeight:'88px',
                                                placeHolder: '请输入退单原因'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        id:'tdbutton',
                                        margin: '10 10 20 10',
                                        text: '退单'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '参观名单',
                        layout: 'vbox',
                      
                        items: [
                            {
                                xtype: 'formpanel',
                                flex: 1,
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        title: '',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                id:'peo1',
                                                label: '姓名',
//                                                value: [
////                                                    '张三'
////                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                id:'sex1',
                                                label: '电话',
//                                                value: [
//                                                    '15013219999'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                id:'job1',
                                                label: '职务',
//                                                value: [
//                                                    '总经理'
//                                                ],
                                                readOnly: true
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldset',
                                        title: '',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                id:'peo2',
                                                label: '姓名',
//                                                value: [
//                                                    '李四'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                id:'sex2',
                                                label: '电话',
//                                                value: [
//                                                    '15013219999'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                id:'job2',
                                                label: '职务',
//                                                value: [
//                                                    '总监'
//                                                ],
                                                readOnly: true
                                            }
                                        ]
                                    },{
                                        xtype: 'fieldset',
                                        title: '',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                id:'peo3',
                                                label: '姓名',
//                                                value: [
//                                                    '李四'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                id:'sex3',
                                                label: '电话',
//                                                value: [
//                                                    '15013219999'
//                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                id:'job3',
                                                label: '职务',
//                                                value: [
//                                                    '总监'
//                                                ],
                                                readOnly: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});