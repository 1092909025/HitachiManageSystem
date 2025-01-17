
/* JavaScript content from app/view/HasEnded/TianJin/TJSoftwareMaintenance.js in folder common */
Ext.define('HelcOA.view.HasEnded.TianJin.TJSoftwareMaintenance', {
	extend : 'Ext.Panel',
	id : 'yjs_TJSoftwareMaintenance_id',
	requires : [ 'Ext.Toolbar', 'Ext.Button', 'Ext.Spacer', 'Ext.form.Panel',
			'Ext.form.FieldSet', 'Ext.field.TextArea' ],
	config : {
		layout : 'vbox',
		items : [ {
			xtype : 'toolbar',
			docked : 'top',
			title : '天津软件维护流程',
			items : [{
				xtype : 'button',
				ui : 'back',
				text : '返回',
				id : 'yjs_returnHasEnded'
			}]
		}, {
			xtype : 'formpanel',
			flex : 1,
			id : 'fp',
			items : [ {
				xtype : 'fieldset',
				title : '',
				items : [ {
					xtype : 'textfield',
					label : '编号',
					labelWidth : '40%',
					name : 'fileno',
					id : 'fileno',
					readOnly : true
				}, {
					xtype : 'textfield',
					label : '申请部门',
					labelWidth : '40%',
					name : 'dept',
					id : 'dept',
					readOnly : true
				}, {
					xtype : 'textfield',
					label : '申请日期',
					labelWidth : '40%',
					name : 'createdate',
					id : 'createdate',
					readOnly : true
				}, {
					xtype : 'textfield',
					label : '完成时间',
					labelWidth : '40%',
					name : 'completedate',
					id : 'completedate',
					placeHolder : '请输入要求完成时间',
					dateFormat : 'Y-m-d',
					listeners : {
						focus : function() {
							initDate2('completedate', '完成时间');
						}
					}
				}, {
					xtype : 'selectfield',
					label : '信息系统',
					labelWidth : '40%',
					name : 'sysname',
					id : 'sysname',
					placeHolder : '信息系统名称',
					required : true,
					options : [ {
						text : '',
						value : ''
					}, {
						text : 'SUNLIKE erp系统',
						value : 'SUNLIKE erp系统'
					}, {
						text : 'OA系统',
						value : 'OA系统'
					}, {
						text : '日立专案',
						value : '日立专案'
					} ]
				}, {
					xtype : 'textfield',
					label : '菜单名称',
					labelWidth : '40%',
					name : 'menunm',
					id : 'menunm',
					required : true
				} ]
			}, {
				xtype : 'fieldset',
				title : '',
				items : [ {
					xtype : 'textfield',
					label : '填写人',
					labelWidth : '40%',
					name : 'agentman',
					id : 'agentman',
					readOnly : true
				}, {
					xtype : 'textfield',
					label : '联络电话',
					labelWidth : '40%',
					name : 'tel',
					id : 'tel',
					required : true
				}, {
					xtype : 'selectfield',
					label : '短信通知',
					id : 'sendmobile',
					labelWidth : '40%',
					placeHolder : '请选择短信通知',
					options : [ {
						text : '否',
						value : '否'
					}, {
						text : '是',
						value : '是'
					} ],
					listeners : {
						change : function(select, newValue, oldValue) {
							if (newValue == '是') {
								Ext.getCmp('sendnumber').setDisabled(false);
								Ext.getCmp('sendnumber').focus();
							} else {
								Ext.getCmp('sendnumber').setValue('');
								Ext.getCmp('sendnumber').setDisabled(true);
							}
						}
					}
				}, {
					xtype : 'textnumfield',
					label : '通知号码',
					id : 'sendnumber',
					name : 'sendnumber',
					placeHolder : '请输入短信通知号码',
					labelWidth : '40%',
					disabled : true
				}, {
					xtype : 'textfield',
					label : '标题',
					labelWidth : '40%',
					name : 'subject',
					id : 'subject',
					required : true
				} ]
			}, {
				xtype : 'fieldset',
				title : '现有状况(请详细描述)*',
				items : [ {
					xtype : 'textareafield',
					id : 'discribe_textarea',
					label : '状况',
					labelWidth : '40%',
					name : 'discribe_textarea',
					required : true
				} ]
			}, {
				xtype : 'fieldset',
				title : '需求功能(请详细描述)*',
				items : [ {
					xtype : 'textareafield',
					id : 'require_textarea',
					label : '功能',
					labelWidth : '40%',
					name : 'require_textarea',
					required : true
				} ]
			}, {
				xtype : 'fieldset',
				title : '预计达到的效果',
				items : [ {
					xtype : 'textfield',
					id : 'uprate',
					label : '提高效率',
					placeHolder : '提高哪些工作效率',
					labelWidth : '40%',
					name : 'uprate',
					required : true
				}, {
					xtype : 'textfield',
					id : 'delwork',
					label : '减少工作',
					placeHolder : '减少哪些用户工作',
					labelWidth : '40%',
					name : 'delwork',
					required : true
				}, {
					xtype : 'textfield',
					id : 'savetime',
					label : '节省时间',
					placeHolder : '节省多少工作时间',
					labelWidth : '40%',
					name : 'savetime',
					required : true
				} ]
			}, {
				xtype : 'fieldset',
				title : '技术评估',
				items : [ {
					xtype : 'textfield',
					id : 'effect',
					label : '影响多系统',
					labelWidth : '40%',
					name : 'effect'
				}, {
					xtype : 'textfield',
					id : 'plandate',
					label : '完成日期',
					labelWidth : '40%',
					name : 'plandate',
					placeHolder : '请输入预计完成日期',
					dateFormat : 'Y-m-d',
					listeners : {
						focus : function() {
							initDate2('plandate', '完成时间');
						}
					}
				} ]
			},
			/*
			 * { xtype : 'fieldset', title : '问题分类', items : [ { xtype :
			 * 'checkboxfield', label : '分析', labelWidth : '40%', name :
			 * 'checkbox', value : '分析 ' },{ xtype : 'checkboxfield', label :
			 * '应用程序', labelWidth : '40%', name : 'checkbox', value : '应用程序 ' } ] },
			 */
			{
				xtype : 'fieldset',
				hidden : true,
				items : [ {
					xtype : 'textfield',
					id : 'conds',
					name : 'conds',
					value : 'nocon'
				}, {
					xtype : 'textfield',
					id : 'userid',
					name : 'userid'
				}, {
					xtype : 'textfield',
					id : 'type',
					name : 'type'
				}, {
					xtype : 'textfield',
					id : 'username',
					name : 'username'
				}, {
					xtype : 'textfield',
					id : 'node',
					name : 'node'
				}, {
					xtype : 'textfield',
					id : 'ctime',
					name : 'ctime'
				}, {
					xtype : 'textfield',
					id : 'piid',
					name : 'piid'
				}, {
					xtype : 'textfield',
					id : 'processname',
					name : 'processname'
				}, {
					xtype : 'textfield',
					id : 'curauthor',
					name : 'curauthor'
				}, {
					xtype : 'textfield',
					id : 'dealmen',
					name : 'dealmen'
				}, {
					xtype : 'textfield',
					id : 'form',
					name : 'form'
				}, {
					xtype : 'textfield',
					id : 'arcpath',
					name : 'arcpath'
				}, {
					xtype : 'textfield',
					id : 'arcdate',
					name : 'arcdate'
				}, {
					xtype : 'textfield',
					id : 'endprocessdate',
					name : 'endprocessdate'
				}, {
					xtype : 'textfield',
					id : 'needzc',
					name : 'needzc'
				}, {
					xtype : 'textfield',
					id : 'idea',
					name : 'idea'
				}, {
					xtype : 'textfield',
					id : 'ygbh',
					name : 'ygbh'
				}, {
					xtype : 'textfield',
					id : 'ext1',
					name : 'ext1'
				}, {
					xtype : 'textfield',
					id : 'taskid',
					name : 'taskid'
				}, {
					xtype : 'textfield',
					id : 'jlflag',
					name : 'jlflag'
				}, {
					xtype : 'textfield',
					id : 'bmflag',
					name : 'bmflag'
				}, {
					xtype : 'textfield',
					id : 'bm',
					name : 'bm'
				}, {
					xtype : 'textfield',
					id : 'tamc',
					name : 'tamc'
				}, {
					xtype : 'textfield',
					id : 'audit_list',
					name : 'audit_list'
				}, {
					xtype : 'textfield',
					id : 'mast',
					name : 'mast'
				}, {
					xtype : 'textfield',
					id : 'pi_flag',
					name : 'pi_flag'
				}, {
					xtype : 'textfield',
					id : 'cfg_id',
					name : 'cfg_id'
				}, {
					xtype : 'textfield',
					id : 'createflag',
					name : 'createflag'
				} ]
			} ]
		} ]
	}

});