/*
 * File: app/view/TransportResult.js
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

Ext.define('HelcGDEXP.view.TransportResult', {
	id:'TransportResult',
    extend: 'Ext.Container',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Panel'
    ],

    config: {
        id: 'TransportResult',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '运单查询结果',
                items: [
                    {
                        xtype: 'button',
                        id: 'btn_Back_TR',
                        ui: 'back',
                        text: '返回'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: '100%',
                html: '正在查询...',
                id: 'PanelResult'
            }
        ]
    }

});