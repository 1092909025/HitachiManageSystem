
/* JavaScript content from app/view/kytest/kytestkh.js in folder common */
/*
 * File: app/view/MyContainer1.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
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

Ext
		.define(
				'HelcPDA.view.kytest.kytestkh',
				{
					extend : 'Ext.Container',

					requires : [ 'Ext.Toolbar', 'Ext.Button', 'Ext.Spacer',
							'Ext.tab.Panel', 'Ext.form.Panel',
							'Ext.form.FieldSet', 'Ext.field.Text', 'Ext.Label',
							'Ext.field.Checkbox' ],
					id : 'kytestkh',
					config : {
						items : [
								{
									xtype : 'panel'
								},
								{
									xtype : 'toolbar',
									docked : 'top',
									items : [ {
										xtype : 'button',
										id : 'kytestkhback',
										text : '返回 '
									}, {
										xtype : 'spacer'
									}, {
										xtype : 'button',
										id : 'kytestkhtj',
										text : '提交'
									} ]
								},
								{
									xtype : 'tabpanel',
									height : '100%',
									items : [
											{
												xtype : 'container',
												title : '人员概况',
												items : [ {
													xtype : 'formpanel',
													height : '100%',
													items : [
															{
																xtype : 'fieldset',
																title : '人员信息',
																items : [
																		{
																			xtype : 'textfield',
																			id : 'zynr',
																			labelWidth : '150',
																			labelWrap : true,
																			label : '作业内容:'
																		},
																		{
																			xtype : 'checkboxfield',
																			id : 'health',
																			name : 'health',
																			label : '精神、身体状况是否良好',
																			labelWidth : '80%',
																			labelWrap : true,
																		// name:
																		// 'field'
																		},
																		{
																			xtype : 'textfield',
																			id : 'txr',
																			labelWidth : '120',
																			labelWrap : true,
																			label : '填写人:'
																		},
																		{
																			xtype : 'textfield',
																			id : 'cyz',
																			labelWidth : '120',
																			labelWrap : true,
																			label : '参与者:'
																		},
																		{
																			xtype : 'button',
																			id : 'tjry',
																			text : '添加人员'
																		},
																		{
																			xtype : 'container',
																			style : 'background-color:#fff;',
																			items : [ {
																				xtype : 'list',
																				id : 'cyzlist',

																				store : 'cyzlistStore',
																				// height
																				// :
																				// 400,
																				itemTpl : [
																						'<table width="100%" border="0" cellspacing="0" cellpadding="0">',
																						'  <tr>',
																						'    <td width=91%> {name}</td>',
																						'    <td width=9% style="text-align: right;"><img id="2" name="2" style="width:22px;" src="images/delete01.png"/></td>',
																						'  </tr>',
																						'</table>' ]
																			} ]
																		},

																]
															},
															{
																xtype : 'fieldset',
																title : '安全防护用具检查',
																id : 'aqfh',
																// hidden :
																// true,
																items : [
																		{
																			xtype : 'checkboxfield',
																			id : 'aqfh1',
																			name : 'aqfh1',
																			label : '工器具良好',
																			labelWidth : '80%',
																			labelWrap : true,
																		// name:
																		// 'field'
																		},
																		{
																			xtype : 'checkboxfield',
																			id : 'aqfh2',
																			name : 'aqfh2',
																			label : '工作服',
																			labelWidth : '80%',
																			labelWrap : true,
																		// name:
																		// 'field'
																		},
																		{
																			xtype : 'checkboxfield',
																			id : 'aqfh3',
																			name : 'aqfh3',
																			label : '安全鞋',
																			labelWidth : '80%',
																			labelWrap : true,
																		// name:
																		// 'field'
																		},
																		{
																			xtype : 'checkboxfield',
																			id : 'aqfh4',
																			name : 'aqfh4',
																			label : '安全帽、工作帽',
																			labelWidth : '80%',
																			labelWrap : true,
																		// name:
																		// 'field'
																		},
																		{
																			xtype : 'checkboxfield',
																			id : 'aqfh5',
																			name : 'aqfh5',
																			label : '安全带及防护用品',
																			labelWidth : '80%',
																			labelWrap : true,
																		// name:
																		// 'field'
																		}, ]
															},
															{
																xtype : 'fieldset',
																title : '考核情况',
																id : 'khqk',
																hidden : true,
																items : [
																		{
																			xtype : 'textfield',
																			id : 'jbzsdf',
																			labelWidth : '40%',
																			labelWrap : true,
																			label : '基础分(100分):'

																		},
																		{
																			xtype : 'textfield',
																			id : 'kykhdf',
																			labelWidth : '40%',
																			labelWrap : true,
																			label : 'KY分(100分):'
																		},
																		{
																			xtype : 'textfield',
																			id : 'ys',
																			hidden : true,
																			label : '用时'
																		},
																		{
																			xtype : 'hiddenfield',
																			id : 'ctime1',

																		}, ]
															} ]
												} ]
											},
											{
												xtype : 'container',
												title : '基本知识',

												items : [ {

													xtype : 'formpanel',
													height : '100%',
													id : 'jbzs',
													items : [
															{
																xtype : 'label',
																id : 'jbtm',
																html : ''
															},
															{
																xtype : 'checkboxfield',
																id : 'ansa',
																name : 'ansa',
																label : '',
																labelWidth : '80%',
																labelWrap : true,
															// name: 'field'
															},
															{
																xtype : 'checkboxfield',
																id : 'ansb',
																name : 'ansb',
																label : '',
																labelWidth : '80%',
																labelWrap : true,
															// name: 'field'
															},
															{
																xtype : 'checkboxfield',
																id : 'ansc',
																name : 'ansc',
																label : '',
																labelWidth : '80%',
																labelWrap : true,
															// name: 'field'
															},
															{
																xtype : 'checkboxfield',
																id : 'ansd',
																name : 'ansd',
																label : '',
																labelWidth : '80%',
																labelWrap : true,
															// name: 'field'
															},
															{
																xtype : 'textfield',
																id : 'yans',
																name : 'yans',
																readOnly : true,
																hidden : true,
																label : '你的答案:',
															},
															{
																xtype : 'textfield',
																id : 'rans',
																name : 'rans',
																hidden : true,
																label : '正确答案:',
															},

													]

												} ]
											},
											{
//												xtype : 'container',
//												title : 'KY考核',
//												height : '100%',
//												scrollable: {
//												    direction: 'horizontal',
//												    directionLock: true
//												},
//												items : [
//												         {
													xtype : 'formpanel',
													height : '100%',
													//scrollable:false ,
													title : 'KY考核',
													items : [
															// {
															// xtype :
															// 'textareafield',
															// id : 'dtq',
															// label : '答题区',
															// labelWrap : true,
															// labelWidth :
															// '8%',
															// height : '100px'
															// },
															{
																xtype : 'fieldset',
																title : '危险原因',
																id : 'wxyyf',
																items : [
																		{
																			xtype : 'textareafield',
																			id : 'wxyy1',
																			label : '1.',
																			labelWrap : true,
																			labelWidth : '8%',
																			height:80,
																		// height
																		// :
																		// '100px'
																		},
																		{
																			xtype : 'textareafield',
																			id : 'wxyy2',
																			label : '2.',
																			labelWrap : true,
																			labelWidth : '8%',
																			height:80,
																		// height
																		// :
																		// '100px'
																		},
																		{
																			xtype : 'textareafield',
																			id : 'wxyy3',
																			label : '3.',
																			labelWrap : true,
																			labelWidth : '8%',
																			height:80,
																		// height
																		// :
																		// '100px'
																		},
																		{
																			xtype : 'button',
																			id : 'wxyy',
																			docked : 'bottom',
																			text : '添加危险原因'
																		},
																		{
																			xtype : 'container',
																			id : 'wxyyc',
																			hidden : true,
																			style : 'background-color:#fff;',
																			items : [ {
																				xtype : 'list',
																				id : 'wxyylist',
																				store : 'wxyylistStore',
																				// height
																				// :
																				// 200,
																				itemTpl : [
																						'<table width="100%" border="0" cellspacing="0" cellpadding="0">',
																						'  <tr>',
																						'    <td width=91%> {text}</td>',
																						'    <td width=9% style="text-align: right;"><img id="2" name="2" style="width:22px;" src="images/delete01.png"/></td>',
																						'  </tr>',
																						'</table>' ]
																			} ]
																		}, ]
															},
															{
																xtype : 'fieldset',
																title : '危险要点',
																id : 'wxydf',
																items : [
																		{
																			xtype : 'textareafield',
																			id : 'wxyd1',
																			label : '1.',
																			labelWrap : true,
																			labelWidth : '8%',
																			height:80,
																		// height
																		// :
																		// '100px'
																		},
																		{
																			xtype : 'textareafield',
																			id : 'wxyd2',
																			label : '2.',
																			labelWrap : true,
																			labelWidth : '8%',
																			height:80,
																		// height
																		// :
																		// '100px'
																		},
																		// {
																		// xtype
																		// :
																		// 'textareafield',
																		// id :
																		// 'wxyd3',
																		// label
																		// :
																		// '3.',
																		// labelWrap
																		// :
																		// true,
																		// labelWidth
																		// :
																		// '8%',
																		// //height
																		// :
																		// '100px'
																		// },

																		{
																			xtype : 'button',
																			id : 'wxyd',
																			docked : 'bottom',
																			text : '添加危险要点'
																		},
																		{
																			xtype : 'container',
																			id : 'wxydc',
																			hidden : true,
																			style : 'background-color:#fff;',
																			items : [ {
																				xtype : 'list',
																				id : 'wxydlist',

																				store : 'wxydlistStore',
																				// height
																				// :
																				// 200,
																				itemTpl : [
																						'<table width="100%" border="0" cellspacing="0" cellpadding="0">',
																						'  <tr>',
																						'    <td width=91%> {text}</td>',
																						'    <td width=9% style="text-align: right;"><img id="2" name="2" style="width:22px;" src="images/delete01.png"/></td>',
																						'  </tr>',
																						'</table>' ]
																			} ]
																		}, ]
															},
															{
																xtype : 'fieldset',
																title : '具体对策',
																id : 'jtdcf',
																items : [
																		{
																			xtype : 'textareafield',
																			id : 'jtdc1',
																			label : '1.',
																			labelWrap : true,
																			labelWidth : '8%',
																			height:80,
																		// height
																		// :
																		// '100px'
																		},
																		{
																			xtype : 'textareafield',
																			id : 'jtdc2',
																			label : '2.',
																			labelWrap : true,
																			labelWidth : '8%',
																			height:80,
																		// height
																		// :
																		// '100px'
																		},
																		{
																			xtype : 'textareafield',
																			id : 'jtdc3',
																			label : '3.',
																			labelWrap : true,
																			labelWidth : '8%',
																			height:80,
																		// height
																		// :
																		// '100px'
																		},
																		{
																			xtype : 'button',
																			id : 'jtdc',
																			docked : 'bottom',
																			text : '添加具体对策',
																		
																		},
																		{
																			xtype : 'container',
																			id : 'jtdcc',
																			hidden : true,
																			style : 'background-color:#fff;',
																			items : [ {
																				xtype : 'list',
																				id : 'jtdclist',
																				store : 'jtdclistStore',
																				// height
																				// :
																				// 200,
																				itemTpl : [
																						'<table width="100%" border="0" cellspacing="0" cellpadding="0">',
																						'  <tr>',
																						'    <td width=91%> {text}</td>',
																						'    <td width=9% style="text-align: right;"><img id="2" name="2" style="width:22px;" src="images/delete01.png"/></td>',
																						'  </tr>',
																						'</table>' ]
																			} ]
																		}, ]
															},
															{
																xtype : 'fieldset',
																title : '行动目标',
																id : 'xdmbf',
																items : [
																		{
																			xtype : 'textareafield',
																			id : 'xdmb1',
																			label : '1.',
																			labelWrap : true,
																			labelWidth : '8%',
																			height:80,
																		// height
																		// :
																		// '100px'
																		},
																		// {
																		// xtype
																		// :
																		// 'textareafield',
																		// id :
																		// 'xdmb2',
																		// label
																		// :
																		// '2.',
																		// labelWrap
																		// :
																		// true,
																		// labelWidth
																		// :
																		// '8%',
																		// //height
																		// :
																		// '100px'
																		// },
																		// {
																		// xtype
																		// :
																		// 'textareafield',
																		// id :
																		// 'xdmb3',
																		// label
																		// :
																		// '3.',
																		// labelWrap
																		// :
																		// true,
																		// labelWidth
																		// :
																		// '8%',
																		// //height
																		// :
																		// '100px'
																		// },
																		{
																			xtype : 'button',
																			docked : 'bottom',
																			text : '添加行动目标',
																			id : 'xdmb'
																		},
																		{
																			xtype : 'container',
																			id : 'xdmbc',
																			hidden : true,
																			style : 'background-color:#fff;',
																			items : [ {
																				xtype : 'list',
																				id : 'xdmblist',

																				store : 'xdmblistStore',
																				// height
																				// :
																				// 200,
																				itemTpl : [
																						'<table width="100%" border="0" cellspacing="0" cellpadding="0">',
																						'  <tr>',
																						'    <td width=91%> {text}</td>',
																						'    <td width=9% style="text-align: right;"><img id="2" name="2" style="width:22px;" src="images/delete01.png"/></td>',
																						'  </tr>',
																						'</table>' ]
																			} ]
																		},

																]
															}

													]
//												} ]
											}, {
												xtype : 'toolbar',
												docked : 'bottom',
												items : [ {
													xtype : 'spacer'
												}, {
													xtype : 'label',
													id : 'ctime',
													html : ''
												},

												]
											} ]
								} ]
					}

				});