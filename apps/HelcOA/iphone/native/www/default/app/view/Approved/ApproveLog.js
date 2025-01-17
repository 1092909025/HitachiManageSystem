
/* JavaScript content from app/view/Approved/ApproveLog.js in folder common */
/*
 * File: app/view/MyPanel8.js
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

Ext.define('HelcOA.view.Approved.ApproveLog', {
    extend: 'Ext.Panel',
     id:'ApproveLog_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        style: 'background-color:#edebf1',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '审批日志',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        listeners:{
                        	tap:function(){
                        		var obj=Ext.getCmp('ProcessName_id');
                        		if(!obj){
                        			obj=Ext.create('HelcOA.view.Approved.ProcessName');
                        		}
                        		Ext.Viewport.setActiveItem(obj);
                        	}
                        }
                    }
                ]
            },
            {
                xtype: 'list',
                id:'list2',
                flex: 1,
                data: [
                    {
                        title: '环节名01',
                        name: '待办事项流程名称',
                        color: '#9d4a02',
                        start_time: '2014-05-23',
                        end_time: '2014-05-24'
                    },
                    {
                        title: '环节名02',
                        name: '待办事项流程名称',
                        color: '#9d4a02',
                        start_time: '2014-05-23',
                        end_time: '2014-05-24'
                    },
                    {
                        title: '环节名03',
                        name: '待办事项流程名称',
                        color: '#9d4a02',
                        start_time: '2014-05-23',
                        end_time: '2014-05-24'
                    },
                    {
                        title: '环节名04',
                        name: '待办事项流程名称',
                        color: '#9d4a02',
                        start_time: '2014-05-23',
                        end_time: '2014-05-24'
                    }
                ],
                itemTpl: [
                    '<table border=0 class="i_Button_List">',
                    '  <tr>',
                    '      <td class="i_Button_List_Title" style="color:{color}">{title}</td>',
                    '      <td class="i_Button_List_right">{name}</td>',
                    '  </tr>',
                    '  <tr>',
                    '      <td class="i_Button_List_left">{end_time}</td>',
                    '      <td class="i_Button_List_right">{start_time}</td>',
                    '  </tr>',
                    '</table>'
                ]
            }
        ]
    }

});