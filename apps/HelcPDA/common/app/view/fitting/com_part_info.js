/*
 * File: app/view/com_part_info.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
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

Ext.define('HelcPDA.view.fitting.com_part_info', {
    extend: 'Ext.form.Panel',
    id: 'com_part_info_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.TextArea'
    ],

    config: {
        
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '配件详细信息',
                items: [
                    {
                        xtype: 'button',
                        id: 'btn_com_part_info',
                        ui: 'back',
                        text: '返回'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: '详细信息',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'ERP_CODE',
                        label: '物料编码',
                        labelWidth: '31%'
                    },
                    {
                        xtype: 'autoTextArea',
                        id: 'MATERIAL_DESCRIPTION',
                        label: '物料描述',
                        labelWidth: '31%'
                    },
                    {
                        xtype: 'autoTextArea',
                        id: 'GUIDANCE_DOCUMENTS',
                        label: '指引文件',
                        labelWidth: '31%'
                    },
                    {
                        xtype: 'textfield',
                        id: 'NO',
                        label: '编号'
                    }
                ]
            }
        ]
    }

});