
/* JavaScript content from app/view/maintain/New_MeasureItem.js in folder common */
/*
 * File: app/view/New_MeasureItem.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('HelcPDA.view.maintain.New_MeasureItem', {
    extend: 'Ext.tab.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.Hidden',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
    	id:'New_MeasureItem',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '作业项目',
                items:[
   					{
   					    xtype: 'button',
   					    ui: 'back',
   					    text: '返回',
   					    id:'btn_New_MeasureItem',
   					},
   					{
   					    xtype: 'spacer',
   					},
   					{
   					    xtype: 'button',
   					    text: '提交',
   					    id:'Submit_btn_New_MeasureItem',
   					},
                   ]
            },
            {
                xtype: 'container',
                title: '作业内容',
                layout: 'vbox',
                items: [
                    {
                    	xtype: 'list',
                    	id:'L_New_MeasureItem',
                    	store:'New_MeasureItemStore',
                        flex: 1,
                        onItemDisclosure:true,
                        itemTpl: [
//                          '<div>{MeasureItemNo} / {MeasureItemContent}</div><div>{MeasureItemStandard}</div>'
							'<div>{MeasureItemNo} / {MeasureItemContent}</div>',
							'<tpl if="MeasureItemPostWork!=\'\' || MeasureItemPreWork!=\'\'">',
							'<div>作业前/判断：{MeasureItemPreWork} / 作业后：{MeasureItemPostWork}</div>',
							'</tpl>',
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                title: '遗留问题',
                layout: 'vbox',
                items: [
					{
						xtype: 'hiddenfield',
						id: 'H_MeasureItemId',
					},
					{
						xtype: 'hiddenfield',
						id: 'H_MeasureItem_Index',
					},
                    {
                        xtype: 'toolbar',
                        id: 'TB_Legacy',
                        docked: 'bottom',
                        items: [
                            {
                            	xtype: 'spacer'
                            },
                            {
                            	xtype: 'button',
                            	id: 'Add_btn_Legacy',
                            	text: '录入遗留问题',
                            }
                        ]
                    },
                    {
                    	xtype: 'list',
                    	id: 'L_LegacyList',
                    	store: 'LegacyListStore',
//                    	onItemDisclosure: true,
                    	flex: 1,
                    	itemTpl: [
                    	     '<div>{MeasureLegacyProjectNo}</div>'+
                    	     '<div>{MeasureLegacySpotSituation}</div>'+
                    	     '<div>{MeasureLegacyOverproofReason}</div>'
                    	]
                    },
                ]
            }
        ]
    }
});