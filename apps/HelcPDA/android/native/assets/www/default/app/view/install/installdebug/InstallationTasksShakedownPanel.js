
/* JavaScript content from app/view/install/installdebug/InstallationTasksShakedownPanel.js in folder common */
/*
 * File: app/view/InstallatoinTasksFactoryPanel.js
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

Ext.define('HelcPDA.view.install.installdebug.InstallationTasksShakedownPanel', {
    extend: 'Ext.Panel',
    id:'installationTasksShakedownPanel',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.tab.Panel'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '调试任务',
                items: [
                    {
                        xtype: 'button',
                        id:'debugList1',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
//                    {
//                        xtype: 'button',
//                        iconCls: 'refresh',
//                        id:'toUpdate_task',
//                        text: '更新'
//                    },
                    {
                        xtype: 'button',
                        id: 'toUpdate_page',
                        iconCls: 'arrow_down',
                    },
                    {
                        xtype: 'button',
                        id: 'toLiXian_page',
                        iconCls: 'search',
                    },
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'label',
                        id:'label_ForTai',
                        html: '',
                        margin: '0 0 0 0'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
                        {
                            xtype: 'list',
                            data: [
                            ],
                            height: '100%',
                            itemId: 'mylist7',
                            id:'task_list1',
                            store:'InstallatoinTasksShakedownStore',
                            itemTpl: [
                                '<table border=0 width=100% style="color:#666">',
                                '    <tr>',
                                '            <td style="font-size:18px;color:#000;">{ENGCONTRACT_NUMBER}</td>',
                                '            <td style="padding-right:15px;text-align: right;">台数:{NUM}</td>',
                                '    </tr>',
                                '    <tr colspan="2">',
                                '        <td>{CUSTOMER_NAME}</td>',
                                '    </tr>',
                                '</table>'
                            ],
                            onItemDisclosure: true
                        },{
                        	xtype:'hiddenfield',
                        	id:'ENLEVETOR_NUM',
                        	value:''
                        }
           ]
    }

});