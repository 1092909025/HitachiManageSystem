/*
 * File: app/view/ProjectSearchPrepare.js
 *
 * This file was generated by Sencha Architect
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

Ext.define('HelcPDA.view.ghj.GHJSearch', {
    extend: 'Ext.form.Panel',
    id:'GHJSearch_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.FieldSet',
        'Ext.field.Select'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '更换件查询',
                items: [
                    {
                    	id:'GHJSearch_id_FH',
                        xtype: 'button',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                    	id:'GHJSearch_id_CX',
                        xtype: 'button',
                        text: '查询'
                    },
                ]
            },
            {
                xtype: 'fieldset',
                title: '查询条件',
                instructions:'均可模糊查询',
                items: [
                    {
                        xtype: 'textfield',
                        label: '工号',
                        id:'GHJSearch_AssetNumber',
                        labelWidth: 140,
                        placeHolder: '请输入更换件工号',
                        //value:'07G040079',

                    },
                    {
                        xtype: 'textfield',
                        label: '物料信息',
                        id:'GHJSearch_Component',
                        labelWidth: 140,
                        placeHolder: '可输入物料名称、名称、物料说明任意一种',
                        //hidden:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '出库开始日期',
                        id:'GHJSearch_OutBoundDate',
                        labelWidth: 140,
                        placeHolder: '可输入出库日期',
                        listeners:{
                        	focus:function(){
                        		initDate1('GHJSearch_OutBoundDate','出库开始日期');
                        	}
                        },
                        readOnly: true,
                    },
                    {
                        xtype: 'textfield',
                        label: '出库结束日期',
                        id:'GHJSearch_OutBoundDate2',
                        labelWidth: 140,
                        placeHolder: '可输入出库结束日期',
                        listeners:{
                        	focus:function(){
                        		initDate1('GHJSearch_OutBoundDate2','出库结束日期');
                        	}
                        },
                        readOnly: true,
                    },
                    {
                        xtype: 'selectfield',
                        label: '状态',
                        id:'GHJSearch_Status',
                        labelWidth: 140,
                        options: [
                            {text: '请选择',  value: ''},
                            {text: '已派工', value: '已派工'},
                            {text: '提交待审批',  value: '提交待审批'}
                        ],
                    },
                ]
            }
        ]
    }

});