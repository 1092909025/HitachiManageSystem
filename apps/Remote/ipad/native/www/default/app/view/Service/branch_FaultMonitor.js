
/* JavaScript content from app/view/Service/branch_FaultMonitor.js in folder common */
/*
 * File: app/view/Service/branch_FaultMonitor.js
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

Ext.define('HelcRemote.view.Service.branch_FaultMonitor', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Button',
        'Ext.dataview.DataView',
        'Ext.XTemplate'
    ],

    config: {
        id: 'service_Branch_FaultMonitor',
        layout: 'vbox',
        cls: [
            'remote-content',
            'remote-service'
        ],
        items: [
            {
                xtype: 'panel',
                flex: 1,
                cls: 'remote-service-FaultMonitor',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        cls: 'remote-title',
                        items: [
                            {
                                xtype: 'label',
                                cls: 'remote-titleText',
                                docked: 'left',
                                html: '故障受信监控'
                            },
                            {
                                xtype: 'button',
                                id: 'service_FaultMonitor_BtnTrap',
                                itemId: 'service_FaultMonitor_BtnTrap',
                                text: '困人'
                            },
                            {
                                xtype: 'button',
                                id: 'service_FaultMonitor_BtnMonitor',
                                itemId: 'service_FaultMonitor_BtnMonitor',
                                text: '遥监'
                            },
                            {
                                xtype: 'button',
                                id: 'service_FaultMonitor_BtnAll',
                                itemId: 'service_FaultMonitor_BtnAll',
                                text: '所有'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'dataview',
                                flex: 1,
                                cls: 'remote-FaultMonito-listBox',
                                id: 'service_Branch_FaultMonitorionMap_Data',
                                itemTpl: [
                                    '<div class="remote-FaultMonito-list">',
                                    '	<div class="remote-FaultMonito-listNumber">{acceptNo}</div>',
                                    '	<div class="remote-FaultMonito-listName">{domainName}</div>',
                                    '    ',
                                    '<div class="remote-FaultMonito-listTrapped" style="font-size:0.8em">',
                                    '<tpl if="isAnyFaults === 1">    ',
                                    '    <span class="fa-stack fa-lg">',
                                    '      <i class="fa fa-square-o fa-stack-2x"></i>',
                                    '      <i class="fa fa-male fa-stack-1x"></i>',
                                    '    </span>',
                                    '<tpl else>',
                                    '</tpl>',
                                    '</div>',
                                    '    ',
                                    '    <div class="remote-FaultMonito-listLadder elevator-type{elevatorType}{isMonitor}">',
                                    '        {employeeNum}',
                                    '    </div>',
                                    '</div>'
                                ],
                                store: 'Service_Branch_FaultMonitor_Data'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});