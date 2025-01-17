
/* JavaScript content from app/view/map/Map.js in folder common */
/*
 * File: app/view/CustomCreate.js
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

Ext.define('HelcAgent.view.map.Map', {
    extend: 'Ext.Panel',
    id:'map_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '地图',
                cls:'textf',
                height:45,
                items: [
                    {
                        xtype: 'button',
                        id:'opptyNewMap_FH',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id:'opptyNewMap_QD',
                        text: '确定'
                    },
                ]
            },
            {
            	xtype : 'panel',
            	id : 'mapbar1',
            	width:'100%',
            	height:'100%',
            	flex : 9,
            	//html : '<div id="baimap" style="width:299px;height:299px;margin:0px;">123111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111676</div>',
            }
        ]
    },

    /*//初始化
    initialize:function(){
		
    },*/
});