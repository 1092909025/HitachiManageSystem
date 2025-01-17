/*
 * File: app/view/CertificatesInfo_List.js
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

Ext.define('HelcPDA.view.certificatesinfo.CertificatesInfo_List', {
	id:'CertificatesInfo_List',
    extend: 'Ext.Container',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '安装人员',
                items: [
                    {
                        xtype: 'button',
                        id: 'btn_Back_P_List',
                        ui: 'back',
                        text: '返回'
                    }
                ]
            },
            {
                xtype: 'list',
                id:'CertPersonList',
                height: '100%',
                itemTpl: [
					'<table border=0 width=100% style="color:#666">',
					'  <tr height=20>',
					'        <td width=80%>',
					'            <span style="color:#000;font-size:18px;">{VENDOR_NAME}</span>',
					'        </td>',
					'  </tr>',
					'  <tr>',
					'		<td width=80%>',
					'		<span style="color:#000;font-size:15px;">{PERSON_NAME}({JOB_TYPE_CODE})</span>',
					'		<span style="color:#666;font-size:15px;">   {CERT_NO}</span>',
					'       </td>',
					'  </tr>',
					'</table>'
                ],
                onItemDisclosure: true,
                store:'CertPersonListStore',
            }
        ]
    }

});