
/* JavaScript content from app/view/inspection/inspection_xx.js in folder common */
/*
 * File: app/view/inspection_xx.js
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

Ext.define('HelcPDA.view.inspection.inspection_xx', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer'
    ],
    
    config: {
        height: '100%',
        id:'inspectionxx', 
        items: [
            {
                xtype: 'tabpanel',
                height: '100%',
                items: [
                    {
                        xtype: 'formpanel',
                        title: '年检详细信息',
                        id:'inspectionxx1',
                        height: '100%',
                        items: [
                            {
                                xtype: 'fieldset',
                                title: '年检信息',
                                items: [
//                                        {
//                                            xtype: 'textfield',
//                                            id:'AssetNumber',
//                                            labelWidth:'30',
//                                            label: '工号'
//                                        },
                                        {
                                            xtype: 'panel',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    //height: 40,
                                                    width: '90%',
                                                    label: '工号',
                                                    id:'AssetNumber',
                                                    labelWidth: '30%',
                                                    name: '',
                                                    //placeHolder: '请输入搜索关键字'
                                                },
                                                {
                                                    xtype: 'button',
                                                    //height: 41,
                                                    style: 'border:0;',
                                                    width: '10%',
                                                    iconCls: 'search',
                                                    id:'search_gh',
                                                    text: ''
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            id:'AssetId',
                                            labelWidth:'27%',
                                            label: '工号ID'
                                        },
                                        {
                                            xtype: 'textfield',
                                            id:'AssetDomainName',
                                            labelWidth:'27%',
                                            label: '地盘'
                                        },
                                        {
                                            xtype: 'textfield',
                                            id:'AnnualInspectionRQ',
                                            labelWidth:'27%',
                                            label: '年检日期',
                                            listeners:{
                                            	focus:function(){
                                            		if(Ext.getCmp('ymtype').getValue()!="ck")
                                            		initDate1('AnnualInspectionRQ','选择日期');
                                            	}
                                            }
                                         
                                       },
                                       
                                    {
                                        xtype: 'textfield',
                                        id:'AnnualInspectionYear',
                                        labelWidth:'27%',
                                        hidden:true,
                                        label: '年检年'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id:'AnnualInspectionMonth',
                                        labelWidth:'27%',
                                        hidden:true,
                                        label: '年检月'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id:'AnnualInspectionDay',
                                        labelWidth:'27%',
                                        hidden:true,
                                        label: '年检日'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id:'WriteBackFlag',
                                        labelWidth:'27%',
                                        label: '回写标志'
                                    },
                                    {
                                        xtype: 'selectfield',
                                        id:'AnnualSurveySituation',
                                        labelWidth:'27%',
                                        label: '<font color="red">*</font>年检情况',
                                        options: [
                                                        {text: '请选择',  value: ''},
                                                        {text: '初步通过', value: '初步通过'},
                                                        {text: '复检',  value: '复检'}
                                                  ]	,
                                        listeners:{
                                        change:function(obj,newValue, oldValue, eOpts ){              
                                    		if(Ext.getCmp('ymtype').getValue()!="ck")
                                    			if(newValue=="复检"){
                                    				//Ext.Msg.alert('提示','请填写整改项目！');
                                    				WL.Toast.show("请填写整改项目！");
                                    			}
                                    	}
                                    }
                                    },
                                    
                                    
                                    {
                                        xtype: 'textfield',
                                        id:'CreatetdFullName',
                                        labelWidth:'27%',
                                        label: '创建人'
                                    },
                                    {
                                        xtype: 'hiddenfield',
                                        id:'EmployeeCategory',
                                        labelWidth:'27%',
                                        label: '用户类型'
                                    },
                                    {
                                        xtype: 'hiddenfield',
                                        id:'Organization',
                                        
                                        label: '组织'
                                    },
                                    {
                                        xtype: 'hiddenfield',
                                        id:'OrganizationId',
                                     
                                        label: '组织ID'
                                    },
                                    {
                                        xtype: 'hiddenfield',
                                        id:'LoginId',
                                     
                                        label: '登陆ID'
                                    },
                                    
                                    {
                                        xtype: 'hiddenfield',
                                        id:'Id',
                                        
                                        label: '年检ID'
                                    },
                                    {
                                        xtype: 'hiddenfield',
                                        id:'ymtype',
                                        label: '页面类型'
                                    },
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                id:'inspectionxx2',
                                title: '代理人信息',
                                items: [
                                    {
                                        xtype: 'hiddenfield',
                                        id:'AgentReadOnlyFlag',
                                        label: '代理人只读'
                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id:'AgentProcesser',
//                                        label: '代理人'
//                                    },
                                    {
                                        xtype: 'panel',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                //height: 40,
                                                width: '90%',
                                                label: '代理人',
                                                id:'AgentProcesser',
                                                labelWidth: '30%',
                                                name: '',
                                                //placeHolder: '请输入搜索关键字'
                                            },
                                            {
                                                xtype: 'button',
                                                //height: 41,
                                                style: 'border:0;',
                                                width: '10%',
                                                iconCls: 'search',
                                                id:'search_dcl',
                                                text: ''
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'hiddenfield',
                                        id:'AgentProcessId',
                                        label: '代理人ID'
                                    }, {
                                        xtype: 'hiddenfield',
                                        id:'ddclfalg',
                                        label: '是否代理人'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '整改清单',
                        items: [
                            {
                                xtype: 'list',
                                id:'inspectionzgxxlist',
//                                data: [
//                                    {
//                                        text: '0001',
//                                        code: '年检1'
//                                    },
//                                    {
//                                        text: '0002',
//                                        code: '年检2'
//                                    }
//                                ],
                                height: '100%',
                                store: 'inspectionzgxxlistStore',
                                itemTpl: [
                                          '<table border=0 width=100% style="color:#666">',
              							'  <tr>',
              							'    <td width=10% rowspan="2" id="ipd_ENO_Checkbox1">',
              							'		<div name="ipd_ENO_Checkbox1" id="ipd_ENO_Checkbox1" class="p_judge_box" >3</div>',
              							'    </td>',
              							'                <td width=45%><b>部件名称:</b>{RectificationParts}</td>',
                                          '                <td width=45%>',
                                          '                    <b>整改内容:</b>{RectificationConent} ',
                                          '                </td>',
                                          
                                          '                </tr> ',
                                          '    <tr height=24>', 
                                          '                <td width=45%>',
                                          '                    <b>责任分类:</b>{ResponsibiltyCategory} ',
                                          '                </td>',
                                          '                <td width=45%><b>完成时间:</b>{RecfiticationFinishDate}</td>',
                                          '                </tr> ',
                                          '    </table>'
                                      ],
                                onItemDisclosure: true
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '年检信息',
                items: [
                    {
                        xtype: 'button',
                        id:'inspectionxx_back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id:'inspectionxx_menu',
                        handler: function(button, e) {
                            var menu =Ext.create('Ext.Menu',{
                                items:[
  {
    text:'更新年检信息',
    id:'inspection_update',
   
},       

                                {
                                    text:'新建整改项目',
                                    id:'inspectionxm_new',
                                },{
                                    text:'删除整改项目',
                                    id:'inspectionxm_delete',
                                },
                                {
                                    text:'提交',
                                    id:'inspectionxx_summit',
                                }

                                ]


                            });
                            var ymtype=Ext.getCmp('ymtype').getValue();
                            	if(ymtype=="new"){
                            	Ext.getCmp('inspection_update').setHidden(true);
                            	}else if(ymtype=="ck"){
                                Ext.getCmp('inspectionxx_summit').setHidden(true);	
                            	}else if(ymtype=="update"){
                               
                            	}else if(ymtype=="newok"){
                            	Ext.getCmp('inspectionxx_summit').setHidden(true);	
                            	}else if(ymtype=="updateok"){
                            	Ext.getCmp('inspectionxx_summit').setHidden(true);	
                            	}
                            	
                            
                            
                            
                            Ext.Viewport.setMenu(menu,{
                                side:'right',
                                reveal:false
                            });

                            Ext.Viewport.showMenu('right');

                        },
                        iconCls: 'more',
                    }
                ]
            }
        ]
    }

});