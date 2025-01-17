
/* JavaScript content from app/view/OpportunityManagement/CustomerInformation_New/CustomInfo.js in folder common */
Ext.define('HelcPAD.view.OpportunityManagement.CustomerInformation_New.CustomInfo', {
    extend: 'Ext.Container',
    id:'custominfo_new_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.SegmentedButton',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '客户资料',
                cls:'textf',
                items: [
                    {
                    	//对上面四种功能的判断。
                    	id:'AnNiuPD',
						xtype: 'textfield',
						hidden:true,
                    },
					{
						//同步EBS时使用
						id:'S_RowId',
						xtype: 'textfield',
						hidden:true,
					}
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                height: 48,
                layout: 'hbox',
                style: 'background:#EDEBF1;',
                html:'<div style="width=100%">'+
                		'<div class="anTwoDiv">'+
                			'<div class="kThree ysZhOne anThree" id="custominfo_new_id_SYY">'+SYB+'</div>'+
                			'<div class="kOne ysZhTwo anThree" id="custominfo_new_id_TJSQ" style="display:none">提交申请</div>'+
                			/*'<div class="kOne ysZhTwo anThree" id="custominfo_new_id_TJSQTwo" style="display:none">提交申请2</div>'+*/
                			'<div class="kThree ysZhThree anThree" id="custominfo_new_id_BCZS" style="display:none">保存至Siebel</div>'+
                			'<div class="kThree ysZhFour anvOne" id="custominfo_new_id_SQSYDiv" style="display:none">申请使用</div>'+
                			'<div class="kThree ysZhFive anThree" id="custominfo_new_id_TB" style="display:none">同步EBS</div>'+
                			'<div class="kThree ysZhTwo anThree" id="custominfo_new_id_SC" style="display:none">上传</div>'+
                		'</div>'+
                	 '</div>',
            },
            {
                xtype: 'tabpanel',
                id:'tabpanel_custominfo_one',
                height: '100%',
                cls:'textf',
                items: [
                        {
                        	xtype:'container',
                        	title:'客户资料',
                        	items:[{
                        		id:'custominfo_new_tabpanel_two',
                        		xtype:'tabpanel',
                        		height: '100%',
                        		cls:'textf',
                        		items:[{
                        				xtype:'container',
                        				id:'tp_Siebel',
                        				title:'Siebel',
                        				items:[{
                                	    	   xtype: 'formpanel',
                                	    	   height: '100%',
                                	    	   items:[
                                	    	   {
                                                   xtype: 'fieldset',
                                                   title: '客户头层信息',
                                                   cls:'textf',
                                                   items: [
														{
															id:'S_HeadStatus',
														    xtype: 'textfield',
														    label: '头层状态',
														    width:'100%',
														    labelWidth: '40%',
														    hidden:true,
														    readOnly:true,
														},
														{
															id:'S_ApplyType',
														    xtype: 'selectfield',
														    label: '本次申请类型',
														    labelWidth: '40%',
														    width:'100%',
														    usePicker: 'auto'
														    //inputCls:'cusInfo_test',
														},
														{
															id:'S_OrganizationId',
															labelWidth: '40%',
															xtype: 'textfield',
															label: '组织ID',
															hidden:true,
															width:'100%',
														},
														{
															id:'S_CSN',
														    xtype: 'textfield',
														    label: '客户编码',
														    width:'100%',
														    labelWidth: '40%',
														    //placeHolder: '系统自动生成'
														},
														{
															id:'S_AccountNumber',
														    xtype: 'textfield',
														    label: '客户编码',//客户行层的客户编码
														    width:'100%',
														    hidden:true,
														    labelWidth: '40%',
														    //placeHolder: '系统自动生成'
														},
														{
															id:'S_Name',
														    xtype: 'textfield',
														    label: '客户名称',
														    width:'100%',
														    labelWidth: '40%',
														    //placeHolder: '这里显示客户名称'
														},
														{
															id:'S_AccountStatus',
														    xtype: 'textfield',
														    label: '状态',
														    width:'100%',
														    labelWidth: '40%',
														    //placeHolder: '潜在'
														},
														{
															id:'S_AccountSort',
														    xtype: 'selectfield',
														    label: '客户分类',
														    width:'100%',
														    labelWidth: '40%',
														    //placeHolder: '这里显示客户分类'
														},
														{
															id:'S_AccountClass',
														    xtype: 'selectfield',
														    label: '客户类别',
														    width:'100%',
														    labelWidth: '40%',
														    //placeHolder: '这里显示客户类别'
														},
														{
															id:'S_CertifiAddress',
														    xtype: 'textfield',
														    label: '证照详细地址',
														    width:'100%',
														    labelWidth: '40%',
														},
														{
															id:'S_Extraordinary',
														    xtype: 'selectfield',
														    label: '是否特批',
														    options: [
						                                    {
						                                    	text: '是',
						                                    	value: 'Y'
						                                    },
						                                    {
						                                    	text: '否',
						                                    	value: 'N'
						                                    },
						                                    ],
						                                    usePicker: 'auto',
						                                    width:'100%',
						                                    labelWidth: '40%',
														},
														/*{
															id:'S_OrgCodeDate',
															labelWidth: '65%',
														    xtype: 'textfield',
														    label: '组织机构代码/身份证效期',
														 	width:'100%',
								                            disabled:false,
								                            readOnly:true,
								    						listeners:[
								    						{
								    							fn:function(component,eOpts){
								    								var me=this;
								    								me.element.on('tap',function(){
								    									Ext.create('Ext.ux.DatePickerPanel',{
								    										format:'Y-m-d',
								    										minDate:Ext.Date.add(new Date(),Ext.Date.YEAR,-10),
								    										maxDate:Ext.Date.add(new Date(),Ext.Date.YEAR,10),
								    										textfield:me
								    									});
								    								});
								    							},
								    							event:'initialize'
								    						}
								    						]
														},*/
														{
															id:'S_OrgCodeDate',
															labelWidth: '65%',
														    xtype: 'textfield',
														    label: '组织机构代码/身份证效期',
														 	width:'100%',
														 	readOnly:true,
								                            disabled:false,
														 	//placeHolder: '请输组织机构代码/身份证效期',
														 	listeners:{
							                                	/*focus:function(){
							                                		//var ff=Ext.getCmp('S_OrgCodeDate').getReadOnly();
							                                		//if(!ff){
							                                			initDate1('S_OrgCodeDate','组织机构代码/身份证效期');
							                                		//};
							                                	}*/
																focus:function(me, e, eOpts){
									                        		initDateKH(me);
									                        	}
							                                },
														},
														/*{
															id:'S_OrgCodeDate',
															labelWidth: '65%',
														    xtype: 'textfield',
														    label: '组织机构代码/身份证效期',
														 	width:'100%',
														 	readOnly:true,
								                            disabled:false,
								                            listeners: [
						                                        {
						                                            fn: function(component, eOpts) {
						                                                var me = this;
						                                                me.element.on('tap', function(e, t) { me.fireEvent('tap', me, e, t); }, me);
						                                            },
						                                            event: 'initialize'
						                                        }
								                            ]
														},*/
														/*{
															id:'S_OrgCodeDate',
															labelWidth: '65%',
														    xtype: 'datepickerfield',
														    label: '组织机构代码/身份证效期',
														 	width:'100%',
														 	//readOnly:true,
								                            disabled:false,
								                            value: new Date()
														
														 	xtype: 'datefield',  
													        id:'S_OrgCodeDate',  
													        anchor: '100%',  
													        fieldLabel: 'From',  
													        format:'Y-m-d H:i:s',  
													        value:Ext.Date.add(new Date(), Ext.Date.DAY, -1),  
													        maxValue: new Date()
														},*/
														{
															id:'S_OrgCodeNumber',
															labelWidth: '65%',
														    xtype: 'textfield',
														    label: '组织机构代码/身份证号',
														    width:'100%',
														    //placeHolder: '这里显示机构代码/身份证号'
														},
														{
															id:'S_TaxRegist',
															labelWidth: '50%',
														    xtype: 'textfield',
														    label: '国家税务登记证号',
														    width:'100%',
														    //placeHolder: '这里显示国家税务登记证号'
														},
														
														//特殊的，隐藏起来不可见
														{
															id:'S_Associate',
															labelWidth: '50%',
														    xtype: 'textfield',
														    label: '关联客户',
														    hidden:true,
														    width:'100%',
														},{
															id:'S_Region',
															labelWidth: '50%',
														    xtype: 'textfield',
														    label: '所属区域',
														    hidden:true,
														    width:'100%',
														},{
															id:'S_SmallScaleTaxpayer',
															labelWidth: '50%',
														    xtype: 'textfield',
														    label: '是否小规模纳税人',
														    hidden:true,
														    width:'100%',
														},{
															id:'S_HQEBSCustomerId',
															labelWidth: '50%',
														    xtype: 'textfield',
														    label: '总部客户Id',
														    hidden:true,
														    width:'100%',
														},{
															id:'S_HQEBSCustomerSiteId',
															labelWidth: '50%',
														    xtype: 'textfield',
														    label: '总部客户收单方Id',
														    hidden:true,
														    width:'100%',
														},{
															id:'S_AccountGroup',
															labelWidth: '50%',
														    xtype: 'textfield',
														    label: '客户账户组',
														    hidden:true,
														    width:'100%',
														},
														{
															id:'S_EBSCustomerName',
															labelWidth: '50%',
															xtype: 'textfield',
															label: '客户名称',
															hidden:true,
															 width:'100%',
														},
                                                   ]
                                	    	   },
                                	    	   {
                                                   xtype: 'fieldset',
                                                   title: '客户Siebel信息',
                                                   cls:'textf',
                                                   items: [
														{
															id:'S_Organization',
														    xtype: 'textfield',
														    label: '组织',
														    width:'100%',
														    labelWidth: '40%',
														},
														{
															id:'S_ApproveStatus',
														    xtype: 'textfield',
														    label: '审核状态',
														    width:'100%',
														    labelWidth: '40%',
														},
														{
															id:'S_AccountAttribute',
														    xtype: 'selectfield',
														    label: '客户属性',
														    width:'100%',
														    labelWidth: '40%',
														},
														{
															id:'S_AccountProperty',
														    xtype: 'selectfield',
														    label: '客户性质',
														    width:'100%',
														    labelWidth: '40%',
														},
														{
															id:'S_AccountMPType',
														    xtype: 'selectfield',
														    label: '保养客户标识',
														    width:'100%',
														    labelWidth: '40%',
														},
														{
															id:'S_Type',
														    xtype: 'selectfield',
														    label: '客户类型',
														    width:'100%',
														    labelWidth: '40%',
														},
														{
															id:'S_AccountSubType',
														    xtype: 'selectfield',
														    label: '客户子类型',
														    width:'100%',
														    labelWidth: '40%',
														},
														{
															id:'S_BigCustomer',
														    xtype: 'selectfield',
														    label: '大客户名称',
														    labelWidth: '40%',
														},
														{
															id:'S_AccountKANumber',
														    xtype: 'selectfield',
														    label: '大客户编号',
														    width:'100%',
														    labelWidth: '40%',
														},
														{
															id:'S_ParentAccountName',
														    xtype: 'textfield',
														    label: '父客户',
														    style: 'float:left',
	                                                      	width:'75%',
	                                                        labelWidth: '54%',
														},
														{
	                                                    	   id:'S_ParentAccountName_CX',
	                                                           xtype: 'button',
	                                                           margin: '6px 0 0 0',
	                                                           padding: 0,
	                                                           style: 'float:left',
	                                                           width:'25%',
	                                                           text: '查询'
	                                                    },
														{
															id:'S_ParentAccountId',
															labelWidth: '40%',
															xtype: 'textfield',
															label: '父客户ID',
															hidden:true,
															width:'100%',
														},
														/*{
															id:'S_Subcustomers',
														    xtype: 'textfield',
														    label: '子客户',
														    style: 'float:left',
	                                                      	width:'75%',
	                                                        labelWidth: '54%',
														},
														{
                                                    	   id:'S_Subcustomers_CX',
                                                           xtype: 'button',
                                                           margin: '6px 0 0 0',
                                                           padding: 0,
                                                           style: 'float:left',
                                                           width:'25%',
                                                           text: '查询'
	                                                    },*/
													]
                                	    	   },
                                	    	   {
                                                   xtype: 'fieldset',
                                                   title: '客户行层信息',
                                                   cls:'textf',
                                                   items: [
														{
															id:'S_AddressStatus',
														    xtype: 'textfield',
														    label: '地址层状态',
														    width:'100%',
														    labelWidth: '40%',
														    hidden:true,
														    readOnly:true,
														},
                                                       {
                                                       	   id:'S_Country',
                                                           xtype: 'textfield',
                                                           label: '国家/地区',
                                                           width:'100%',
                                                           labelWidth: '40%',
                                                           readOnly:true,
                                                           //placeHolder: '这里显示国家/地区'
                                                       },
                                                       {
                                                       	   id:'S_Province',
                                                           xtype: 'textfield',
                                                           label: '省/(直辖)市',
                                                           width:'100%',
                                                           labelWidth: '40%',
                                                           readOnly:true,
                                                           //placeHolder: '这里显示省/(直辖)市'
                                                       },
                                                       {
                                                       	   id:'S_City',
                                                           xtype: 'textfield',
                                                           label: '城市',
                                                           width:'100%',
                                                           labelWidth: '40%',
                                                           readOnly:true,
                                                           //placeHolder: '这里显示城市'
                                                       },
                                                       {
                                                       	   id:'S_EBSCustomerSite',
                                                           xtype: 'textfield',
                                                           label: '业务联系地址',
                                                           style: 'float:left',
                                                      	   width:'75%',
                                                           labelWidth: '55%',
                                                           //placeHolder: '这里显示业务联系地址'
                                                       },
                                                       {
                                                    	   id:'S_EBSCustomerSite_CX',
                                                           xtype: 'button',
                                                           margin: '6px 0 0 0',
                                                           padding: 0,
                                                           style: 'float:left',
                                                           width:'25%',
                                                           text: '查询'
                                                       },
                                                       {
                                                    	   id:'S_PostalCode',
                                                           xtype: 'textfield',
                                                           label: '邮政编码',
                                                           width:'100%',
                                                           labelWidth: '40%',
                                                           //placeHolder: '这里显示邮政编码'
                                                       },
                                                       {
                                                       	   id:'S_Contact',
                                                           xtype: 'textfield',
                                                           label: '联系人',
                                                           width:'100%',
                                                           labelWidth: '40%',
                                                           //placeHolder: '这里显示联系人'
                                                       },
                                                       {
                                                       	   id:'S_MainPhoneNumber',
                                                           xtype: 'textfield',
                                                           label: '主要电话号码',
                                                           width:'100%',
                                                           labelWidth: '40%',
                                                           //placeHolder: '这里显示主要电话号码'
                                                       },
                                                       {
                                                       	   id:'S_MainFaxNumber',
                                                           xtype: 'textfield',
                                                           label: '主要传真号码',
                                                           width:'100%',
                                                           labelWidth: '40%',
                                                           //placeHolder: '这里显示主要传真号码'
                                                       },
                                                       {
                                                       	   id:'S_BankName',
                                                           xtype: 'textfield',
                                                           label: '开户银行名称',
                                                           width:'100%',
                                                           labelWidth: '40%',
                                                           //placeHolder: '这里显示开户银行名称'
                                                       },
                                                       {
                                                       	   id:'S_BankNumber',
                                                           xtype: 'textfield',
                                                           label: '开户银行帐号',
                                                           width:'100%',
                                                           labelWidth: '40%',
                                                           //placeHolder: '这里显示开户银行帐号'
                                                       },
                                                   ]
                                               },
                                	    	   ]
                                	       }]
                        		//上面是结尾
                        		},{
                        			xtype:'container',
                        			id:'tp_EBS',
                                	title:'EBS',
                                	items:[{
                                	   id:'formaa',
                         	    	   xtype: 'formpanel',
                         	    	   height: '100%',
                         	    	   items:[
                         	    	   {
                                            xtype: 'fieldset',
                                            title: '客户头层信息',
                                            cls:'textf',
                                            items: [
													{
														id:'E_HeadStatus',
													    xtype: 'textfield',
													    label: '地址层状态',
													    width:'100%',
													    labelWidth: '40%',
													    hidden:true,
													    readOnly:true,
													},
													{
														id:'E_ApplyType',
													    xtype: 'textfield',
													    label: '本次申请类型',
													    labelWidth: '40%',
													},
													{
														id:'E_CSN',
													    xtype: 'textfield',
													    label: '客户编码',
													    labelWidth: '40%',
													    //placeHolder: '系统自动生成'
													},
													{
														id:'E_AccountNumber',
													    xtype: 'textfield',
													    label: '客户编码',//客户行层的客户编码
													    width:'100%',
													    hidden:true,
													    labelWidth: '40%',
													    //placeHolder: '系统自动生成'
													},
													{
														id:'E_Name',
													    xtype: 'textfield',
													    label: '客户名称',
													    labelWidth: '40%',
													    //placeHolder: '这里显示客户名称'
													},
													{
														id:'E_AccountStatus',
													    xtype: 'textfield',
													    label: '状态',
													    labelWidth: '40%',
													    //placeHolder: '潜在'
													},
													{
														id:'E_AccountSort',
													    xtype: 'textfield',
													    label: '客户分类',
													    labelWidth: '40%',
													    //placeHolder: '这里显示客户分类'
													},
													{
														id:'E_AccountClass',
													    xtype: 'textfield',
													    label: '客户类别',
													    labelWidth: '40%',
													    //placeHolder: '这里显示客户类别'
													},
													{
														id:'E_CertifiAddress',
													    xtype: 'textfield',
													    label: '证照详细地址',
													    labelWidth: '40%',
													    //placeHolder: '这里显示证照详细地址'
													},
													{
														id:'E_Extraordinary',
													    xtype: 'selectfield',
													    label: '是否特批',
													    labelWidth: '40%',
													    options: [
								                        {
								                             text: '是',
								                             value: 'Y'
								                        },
								                        {
								                             text: '否',
								                             value: 'N'
								                         },
								                         ],
								                         usePicker: 'auto'
													    //placeHolder: '这里显示是否特批'
													},
													{
														id:'E_OrgCodeDate',
														labelWidth: '50%',
													    xtype: 'textfield',
													    label: '组织机构代码/身份证效期',
													    labelWidth: '65%',
													    //placeHolder: '这里显示组织机构代码/身份证效期'
													},
													{
														id:'E_OrgCodeNumber',
														labelWidth: '50%',
													    xtype: 'textfield',
													    label: '组织机构代码/身份证号',
													    labelWidth: '65%',
													    //placeHolder: '这里显示机构代码/身份证号'
													},
													{
														id:'E_TaxRegist',
														labelWidth: '50%',
													    xtype: 'textfield',
													    label: '国家税务登记证号',
													    //placeHolder: '这里显示国家税务登记证号'
													},
													
													//特殊的，隐藏起来不可见
													{
														id:'E_Associate',
														labelWidth: '50%',
													    xtype: 'textfield',
													    label: '关联客户',
													    hidden:true,
													    labelWidth: '40%',
													},{
														id:'E_Region',
														labelWidth: '50%',
													    xtype: 'textfield',
													    label: '所属区域',
													    hidden:true,
													},{
														id:'E_SmallScaleTaxpayer',
														labelWidth: '50%',
													    xtype: 'textfield',
													    label: '是否小规模纳税人',
													    hidden:true,
													},{
														id:'E_HQEBSCustomerId',
														labelWidth: '50%',
													    xtype: 'textfield',
													    label: '总部客户Id',
													    hidden:true,
													},{
														id:'E_HQEBSCustomerSiteId',
														labelWidth: '50%',
													    xtype: 'textfield',
													    label: '总部客户收单方Id',
													    hidden:true,
													},{
														id:'E_AccountGroup',
														labelWidth: '50%',
													    xtype: 'textfield',
													    label: '客户账户组',
													    hidden:true,
													},{
	                                             	   id:'E_EBSCustomerName',
	                                             	   labelWidth: '50%',
	                                            	   xtype: 'textfield',
	                                                   label: '开户银行帐号',
	                                                   hidden:true,
	                                               },
                                            ]
                         	    	   },
                         	    	  {
                                           xtype: 'fieldset',
                                           title: '客户Siebel信息',
                                           cls:'textf',
                                           items: [
												{
													id:'E_Organization',
												    xtype: 'textfield',
												    label: '组织',
												    labelWidth: '40%',
												},
												{
													id:'E_ApproveStatus',
												    xtype: 'textfield',
												    label: '审核状态',
												    labelWidth: '40%',
												},
												{
													id:'E_AccountAttribute',
												    xtype: 'textfield',
												    label: '客户属性',
												    labelWidth: '40%',
												},
												{
													id:'E_AccountProperty',
												    xtype: 'textfield',
												    label: '客户性质',
												    labelWidth: '40%',
												},
												{
													id:'E_AccountMPType',
												    xtype: 'textfield',
												    label: '保养客户标识',
												    labelWidth: '40%',
												},
												{
													id:'E_Type',
												    xtype: 'textfield',
												    label: '客户类型',
												    labelWidth: '40%',
												},
												{
													id:'E_AccountSubType',
												    xtype: 'textfield',
												    label: '客户子类型',
												    labelWidth: '40%',
												},
												{
													id:'E_BigCustomer',
												    xtype: 'textfield',
												    label: '大客户名称',
												    labelWidth: '40%',
												},
												{
													id:'E_AccountKANumber',
												    xtype: 'textfield',
												    label: '大客户编号',
												    labelWidth: '40%',
												},
												{
													id:'E_ParentAccountName',
												    xtype: 'textfield',
												    label: '父客户',
												    labelWidth: '40%',
												},
												{
													id:'E_ParentAccountId',
													xtype: 'textfield',
													label: '父客户ID',
													hidden:true,
													width:'100%',
													labelWidth: '40%',
												},
											]
                        	    	   },
                         	    	   {
                                            xtype: 'fieldset',
                                            title: '客户行层信息',
                                            cls:'textf',
                                            items: [
												{
													id:'E_AddressStatus',
												    xtype: 'textfield',
												    label: '地址层状态',
												    width:'100%',
												    labelWidth: '40%',
												    hidden:true,
												    readOnly:true,
												},
                                                {
                                                	id:'E_Country',
                                                    xtype: 'textfield',
                                                    label: '国家/地区',
                                                    labelWidth: '40%',
                                                    //placeHolder: '这里显示国家/地区'
                                                },
                                                {
                                                	id:'E_Province',
                                                    xtype: 'textfield',
                                                    label: '省/(直辖)市',
                                                    labelWidth: '40%',
                                                    //placeHolder: '这里显示省/(直辖)市'
                                                },
                                                {
                                                	id:'E_City',
                                                    xtype: 'textfield',
                                                    label: '城市',
                                                    labelWidth: '40%',
                                                    //placeHolder: '这里显示城市'
                                                },
                                                {
                                                	id:'E_EBSCustomerSite',
                                                    xtype: 'textfield',
                                                    label: '业务联系地址',
                                                    labelWidth: '40%',
                                                    //placeHolder: '这里显示业务联系地址'
                                                },
                                                {
                                                	id:'E_PostalCode',
                                                    xtype: 'textfield',
                                                    label: '邮政编码',
                                                    labelWidth: '40%',
                                                    //placeHolder: '这里显示邮政编码'
                                                },
                                                {
                                                	id:'E_Contact',
                                                    xtype: 'textfield',
                                                    label: '联系人',
                                                    labelWidth: '40%',
                                                    //placeHolder: '这里显示联系人'
                                                },
                                                {
                                                	id:'E_MainPhoneNumber',
                                                    xtype: 'textfield',
                                                    label: '主要电话号码',
                                                    labelWidth: '40%',
                                                    //placeHolder: '这里显示主要电话号码'
                                                },
                                                {
                                                	id:'E_MainFaxNumber',
                                                    xtype: 'textfield',
                                                    label: '主要传真号码',
                                                    labelWidth: '40%',
                                                    //placeHolder: '这里显示主要传真号码'
                                                },
                                                {
                                                	id:'E_BankName',
                                                    xtype: 'textfield',
                                                    label: '开户银行名称',
                                                    labelWidth: '40%',
                                                    //placeHolder: '这里显示开户银行名称'
                                                },
                                                {
                                                	id:'E_BankNumber',
                                                    xtype: 'textfield',
                                                    label: '开户银行帐号',
                                                    labelWidth: '40%',
                                                    //placeHolder: '这里显示开户银行帐号'
                                                },
                                            ]
                                        },
                         	    	   ]
                         	       }]
                        		//上面是标签里面的结尾
                        		}]
                        	}]
                        },
                    {
                        xtype: 'container',
                        id:'fj',
                        title: '&nbsp;附&nbsp;&nbsp;件&nbsp;',
                        items:[
							{
								xtype: 'segmentedbutton',
								margin: 10,
								cls:'textf',
								layout: {
									type: 'hbox',
									pack: 'center'
								},
								items: [{
									id:'custominfo_new_id_PSZP',
									xtype: 'button',
									width: '50%',
									text: '拍摄照片'
								},
								{
									id:'custominfo_new_id_XQZP',
									xtype: 'button',
									width: '50%',
									text: '选取照片'
								}]
							},
							{
				        		xtype:'list',
				                id: 'custominfo_new_id_listV',
				                width:'100%',
				                height:'100%',
				                scrollable: false,
				                store :'PictureStore',
				                itemTpl : [
				                           '<div style="width:100%; margin:0; padding:0;">',
				                           '    <img src="{src}" style="float:left; margin:0; padding:0;width:40px;height:30px"></img>',
				                           '</div>'
				                           /*'<div style="width:100%; margin:0; padding:0;">',
				                           '    <img src="{src}" style="float:left; margin:0; padding:0;width:40px;height:30px"></img>',
				                           '    <div style="float:right;margin:0;">',
				                           '    <img  id="custominfo_new_id_listV_DELETE" style="width:18px;" src="images/delete01.png"/>',
				                           '    </div>',
				                           '</div>'*/
				                ],
				            },
                        ],
                    },
                    /*{
                        xtype: 'container',
                        title: '联系人',
                        items: [
                            {
                                xtype: 'segmentedbutton',
                                margin: 10,
                                items: [
                                    {
                                        xtype: 'button',
                                        id:'custominfo_new_id_LXR_ZZ',
                                        text: '增加'
                                    },
                                    {
                                        xtype: 'button',
                                        id:'custominfo_new_id_LXR_SC',
                                        text: '删除'
                                    }
                                ]
                            },
                            {
                                xtype: 'list',
                                id:'custominfo_new_id_list_LXR',
                                height: '100%',
                                store:'CsStore',
                                itemTpl: [
                                    //'<div><input type=\'checkbox\'>　姓名　性别　部门　职位</div>'
                                    '<table border=0 width=100% style="color:#666" class="textf">'+
                                    '  <tr>'+
                                    '     <td width=10% rowspan="3">'+
                                    '        <div name="groupkung_custominfo" class="p_judge_box2" id="conkung_custominfo">3</div>'+
                                    '     </td>'+
                                    '     <td width=80%>主要   姓+名 </td>'+
                                    '     <td width=10%></td>'+
                                    '  </tr>'+
                                    '  <tr>'+
                                    '      <td>性别    部门  职位</td>'+
                                    '  </tr>'+
                                    '</table>',
                                ],
                                onItemDisclosure: true
                            }
                        ]
                    },*/
                    /*{
                        xtype: 'container',
                        title: '子客户'
                    },
                    {
                        xtype: 'container',
                        title: '关联商机'
                    },*/
                    /*{
                        xtype: 'container',
                        title: '合同信息',
                        hidden: true,
                        items: [
                            {
                                xtype: 'list',
                                height: '100%',
                                itemTpl: [
                                    '<div>台数	分公司	签订人	签订日期	履约情况	发货情况	父客户	子客户</div>'
                                ],
                                onItemDisclosure: true
                            }
                        ]
                    }*/
                ]
            }
        ]
    }

});