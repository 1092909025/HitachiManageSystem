
/* JavaScript content from app/view/Device/subNavCinema.js in folder common */
/*
 * File: app/view/Device/subNavCinema.js
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

Ext.define('HelcRemote.view.Device.subNavCinema', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'Device_subNavCinema',
        itemId: 'Device_subNavCinema',
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                cls: 'remote-breadCrumbMini',
                docked: 'top',
                items: [
                    {
                        xtype: 'label',
                        cls: 'remote-breadCrumb-con',
                        html: '电影院'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                cls: 'remote-leftsideBar',
                docked: 'left',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'list',
                        flex: 1,
                        data: [
                            {
                                text: '系统控制'
                            },
                            {
                                text: '音量控制'
                            },
                            {
                                text: '显示控制'
                            },
                            {
                                text: '灯光控制'
                            },
                            
                        ],
                        id: 'device_ListNavCinema',
                        itemTpl: [
                            '<div>{text}</div>'
                        ]
                    }
                ]
            }
        ]
    }

});