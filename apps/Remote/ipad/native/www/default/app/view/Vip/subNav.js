
/* JavaScript content from app/view/Vip/subNav.js in folder common */
/*
 * File: app/view/Vip/subNav.js
 *
 * This file was generated by Sencha Architect
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

Ext.define('HelcRemote.view.Vip.subNav', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        cls: 'remote-service',
        id: 'Vip_subNav',
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                cls: 'remote-breadCrumb',
                docked: 'top',
                items: [
                    {
                        xtype: 'label',
                        cls: 'remote-breadCrumb-con',
                        html: '大客户与大项目'
                    },
                    {
                        xtype: 'panel',
                        cls: 'remote-breadCrumb-buttonBox',
                        docked: 'right',
                        items: [
                            {
                                xtype: 'button',
                                cls: 'remote-buttonColor-orange',
                                id: 'Vip_subNav_BtnReturn',
                                text: '返回'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'remote-leftsideBar',
                docked: 'left',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'list',
                        flex: 1,
                        data: [
                            {
                                text: '大客户'
                            },
                            {
                                text: '大项目'
                            }
                        ],
                        id: 'Vip_subNav_data',
                        itemTpl: [
                            '<div>{text}</div>'
                        ]
                    }
                ]
            }
        ]
    }

});