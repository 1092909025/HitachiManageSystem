/*
 * File: app/view/MyPanel45.js
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

Ext.define('HelcPDA.view.install.installtoproduce.InstallProduce_List_V', {
    extend: 'Ext.Panel',
    id:'InstallProduce_List_VID',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '排产查询',
                items: [
                    {
                        xtype: 'button',
                        ui:'back',
                        text: '返回',
                        id:'InstallProduce_List_VID_FH_BUTTON',
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'search',
                        id:'searchId_old',
                    }
                ]
            },{xtype:'fieldset',
            	items:[{
            		 xtype: 'hiddenfield',
                     label: '合同:',
                     id:'SInstallationContractNo_id2_old',
                     labelWidth: '40%',
                     placeHolder: '请输入安装合同号',
                     value:''
            	}]
               
            }
            ,
            {
                xtype: 'list',
                id:'List_VID',
                data: [
                   
                ],
                height: '100%',
                itemId: 'mylist7',
                itemTpl: [
                    '<table border=0 width=100% style="color:#666">',
                    '  <tr>',
                    '    <td width=60% style="color:#000;font-size:18px;">{CONTRACT_NO}</td>',
                    '    <td width=40% style="padding-right:15px;text-align: right;">台数：{NUM}</td>',
                    '  </tr>',
                    '  <tr>',
                    '      <td colspan="2">{CUSTOMER_NAME}</td>',
                    '  </tr>',
                    '</table>'
                ],
                onItemDisclosure: true,
                store:'installtaskStore2'
            }
        ]
    }

});