/*
 * 已审批
 */

Ext.define('HelcOA.view.Approved.Approved', {
    extend: 'Ext.Panel',
    id:'Approved_id',
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
                title: '我已审批未结束的流程',
                items: [
                        {
                        	xtype: 'button',
                            iconCls: 'home',
                            id: 'returnHome_ID'
                        }
                    ]
            },
            {
                xtype: 'list',
                flex: 1,
                id: 'ysp_ApprovedList',
                itemTpl: [
                    '<table border=0 class="i_Button_List">',
                    '  <tr>',
                    '      <td rowspan="2" class="i_Button_List_Icon_1 {class}" style="color:{color}">{icon}</td>',
                    '      <td colspan="2" class="i_Button_List_Title">{major}{subject}</td>',
                    '  </tr>',
                    '  <tr>',
                    '      <td class="i_Button_List_left">{proc_name_dist}</td>',
                    '      <td class="i_Button_List_right">{arr_time}</td>',
                    '  </tr>',
                    '</table>'
                ],
                onItemDisclosure: true,
                store:'ApprovedStore'
            }
        ]
    }

});