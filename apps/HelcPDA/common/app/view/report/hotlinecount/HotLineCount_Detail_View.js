/*
 * File: app/view/bbPanel2.js
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

Ext.define('HELCSS.view.bbPanel2', {
    extend: 'Ext.Panel',

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
                title: '安徽分公司',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: '返回'
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
                        title: '录入',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '受信宗数',
                                labelWidth: '40%',
                                value: [
                                    '5.11'
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '到达时间宗数',
                                labelWidth: '40%',
                                value: [
                                    '1.8'
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '到达时间宗数比例',
                                labelWidth: '40%',
                                value: [
                                    '2.21'
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '完工时间宗数',
                                labelWidth: '40%',
                                value: [
                                    '1.03'
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '完工时间宗数比例',
                                labelWidth: '40%',
                                value: [
                                    '2.41'
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '困人宗数',
                                labelWidth: '40%',
                                value: [
                                    '2.41'
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '救人时间宗数',
                                labelWidth: '40%',
                                value: [
                                    '2.41'
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '救人时间宗数比例',
                                labelWidth: '40%',
                                value: [
                                    '2.41'
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