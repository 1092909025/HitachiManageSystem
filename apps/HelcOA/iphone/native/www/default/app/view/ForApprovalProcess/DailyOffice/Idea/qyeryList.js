
/* JavaScript content from app/view/ForApprovalProcess/DailyOffice/Idea/qyeryList.js in folder common */
/**
 * 起草-人员查询列表
 */
Ext.define('HelcOA.view.ForApprovalProcess.DailyOffice.Idea.qyeryList', {
	    extend: 'Ext.Panel',
	    id: 'qyeryList_id',
	    requires: [
	        'Ext.Toolbar',
	        'Ext.Button',
	        'Ext.Spacer',
	        'Ext.field.Text',
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
	                title: '查询列表',
	                items: [
	                    {
	                        xtype: 'button',
	                        id: 'returnPersonnelSelection_ID',
	                        text: '取消',
	                        ui: 'back'
	                    },
	                    {
	                        xtype: 'spacer'
	                    },
	                    {
	                        xtype: 'button',
	                        id: 'CompleteChoice2_ID',
	                        text: '确认'
	                    }
	                ]
	            },
	            {
	                xtype: 'list',
	                flex: 1,
	                id: 'qyeryList_List_ID',
                    store:'qyeryListStore',
                    itemTpl: [
                              '<table border=0 width=100%>',
                              '    <tr>',
                              '        <td>',
                              '            <span style="font-size:20px;">{value}</span>',
                              '        </td>',
                              '        <td style="width:50px">',
                              '           <div name="p_judge_color4" class="p_judge_box" id="p_judge_color4">3</div>',
                              '        </td>',
                              '    </tr>',
                              '</table>'
                          ]
	            }
	        ]
	    }

	});