/*
 * File: app/view/BusinessAttachment.js
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

Ext.define('HelcAgent.view.OpportunityManagement.Project_New.BusinessAttachment', {
    extend: 'Ext.Container',
    id:'businessattachment_new_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.SegmentedButton'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '商机附件',
                cls:'textf',
                items: [
                    {
                    	id:'BusinessAttachment_new_id_FH',
                        xtype: 'button',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                    	id:'businessattachment_new_id_SC',
                        xtype: 'button',
                        text: '上传'
                    },{
                    	id:'businessattchmentOpportunity',
                    	xtype:'hiddenfield'
                    }
                ]
            },
            {
                xtype: 'segmentedbutton',
                margin: 10,
                cls:'textf',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [
                    {
                    	id:'BusinessAttachment_new_id_PSZP',
                        xtype: 'button',
                        width: '50%',
                        text: '拍摄照片'
                    },
                    {
                    	id:'BusinessAttachment_new_id_XQZP',
                        xtype: 'button',
                        width: '50%',
                        text: '选取照片'
                    }
                ]
            },{
        		xtype:'list',
                id: 'businessattachment_listV',
                width:'100%',
                height:'100%',
                scrollable: false,
                store :'OpptyPictureStore',
                itemTpl : 
                	'<div style="width:100%; margin:0; padding:0;">'+
                	'<tpl if="Id==undefined">'+
        			'    <img src={OpptyFileSrcPath} style="float:left; margin:0; padding:0;width:40px;height:30px;"></img>'+
        			'</tpl>'+
        			'<tpl if="Id!=undefined">'+
        			'    <img src={OpptyFileBuffer} style="float:left; margin:0; padding:0;width:40px;height:30px;"></img>'+
        			'</tpl>'+
        			'    <div style="float:right;">'+
        			'    <img  id="businessattachment_listV_DELETE" style="width:18px;" src="images/delete01.png"/>'+
        			'    </div>'+
        			'<div style="float:right;margin-right:10;margin-bottom:20;"><tpl if="Id==undefined"><select name="attachmentType" id="attachmentType"></select></tpl><tpl if="Id!=undefined"><span class="textf">{AttachmentType}</span></tpl></div>'+
        			'</div>',
            }
        ]
    }

});