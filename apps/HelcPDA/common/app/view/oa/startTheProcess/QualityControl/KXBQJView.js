Ext.define('HelcPDA.view.oa.startTheProcess.QualityControl.KXBQJView', {
    extend: 'Ext.Panel',
    id: 'qc_KXBQJView_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.TextArea'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'qc_surface_ID',
                title: '开箱补缺件及不良问题反馈报告',
                items: [
                        {
                            xtype: 'button',
                            ui: 'back',
                            text: '返回',
                            id: 'qc_returnStartTheProcessName_ID'
                        },
                        {
                            xtype: 'spacer'
                        },
                        {
                            text: '下一步',
                            id: 'qc_ToSelectNode',
                        }
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                id: 'fp',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
							{
								xtype: 'selectfield',
								label: '决策内容',
								labelWidth: '40%',
								id:'decision',
								placeHolder: '请选择',
								options: [
								          {
								        	  text: '请选择',
								        	  value: '请选择'
								          },
							              {
							              	text: '转设计/其他相关部门处理',
							                  value: '1'
							              },
							              {
							                  text: '转设计/其他相关部门处理+需要品证部门调查',
							                  value: '4'
							              },
							              {
							            	  text: '处理完成，流程结束',
							            	  value: '7'
							              },
							          ],
							},
                            {
                                xtype: 'textfield',
                                id: 'fileno',
                                label: '编号',
                                labelWidth: '40%',
                                name: 'fileno',
                                placeHolder: '请输入编号'
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'dpm',
                            	label: '地盘名',
                            	labelWidth: '40%',
                            	name: 'subject',
                            	required: true,
                            	placeHolder: '请输入地盘名',
                            	listeners:{
                                	change:function(){
                                		objj.getApplication().getController('oa.startTheProcess.QualityControl.KXBQJCtrl').setsubject();
                                	}
                                }
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'bjm',
                            	label: '部件名',
                            	labelWidth: '40%',
                            	name: 'subject',
                            	required: true,
                            	placeHolder: '请输入部件名',
                            	listeners:{
                                	change:function(){
                                		objj.getApplication().getController('oa.startTheProcess.QualityControl.KXBQJCtrl').setsubject();
                                	}
                                }
                            },
                            {
                            	xtype: 'autoTextArea',
                            	id: 'wtm',
                            	label: '问题/现象',
                            	labelWidth: '40%',
                            	name: 'subject',
                            	required: true,
                            	placeHolder: '请输入问题/现象',
                            	listeners:{
                                	change:function(){
                                		objj.getApplication().getController('oa.startTheProcess.QualityControl.KXBQJCtrl').setsubject();
                                	}
                                }
                            },
                            {
                                xtype: 'autoTextArea',
                                id: 'subject',
                                label: '标题',
                                labelWidth: '40%',
                                name: 'subject',
                                required: true,
                                placeHolder: ''
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'zd',
                            	label: '重点项目',
                            	labelWidth: '40%',
                            	name: 'subject',
                            },
                            {
                                xtype: 'textnumfield',
                                id: 'ts',
                                label: '涉及台数',
                                labelWidth: '40%',
                                name: 'ts',
                                required: true,
                                placeHolder: '请输入涉及台数'
                            },
                            {
                                xtype: 'textfield',
                                id: 'bldate',
                                label: '不良发生',
                                labelWidth: '40%',
                                name: 'bldate',
                                placeHolder: '请选择日期',
                                dateFormat: 'Y-m-d',
                                readOnly:true,
                                placeHolder: '点击设置时间',
                                listeners:{
                                	focus:function(){
                                		initDate2('bldate','不良发生日期');
                                	}
                                }
                            },
                            {
                                xtype: 'selectfield',
                                id: 'type1',
                                label: '流程类型',
                                labelWidth: '40%',
                                required: true,
                                name: 'type',
                                options: [
                                          {
                                        	  text: '请选择',
                                        	  value: ''
                                          },
                                          {
                                              text: '不良问题反馈',
                                              value: '不良问题反馈'
                                          },
                                          {
                                        	  text: '开箱补缺件',
                                        	  value: '开箱补缺件'
                                          },
                                          {
                                              text: '装箱多件反馈',
                                              value: '装箱多件反馈'
                                          }
                                  ],
                                  listeners:{
                                	  change:function(select,newValue,oldValue){
                                		  if(newValue=='开箱补缺件'){
                                			  Ext.getCmp('kxbqj_fieldset').setHidden(false);
                                			  Ext.getCmp('bldate').setDisable(true);
                                			  Ext.getCmp('bldate').setValue('');
                                		  }else if(newValue!="不良问题反馈"){
                                			  Ext.getCmp('bldate').setDisabled(true);
                                		  }else{
                                			  Ext.getCmp('kxbqj_fieldset').setHidden(true);
                                		  }
                                	  }
                                  }
                            },
                            {
                                xtype: 'textfield',
                                id: 'yhmc',
                                label: '订货单位',
                                labelWidth: '40%',
                                name: 'yhmc',
                                required: true,
                                placeHolder: '请输入订货单位'
                            },
                            {
                                xtype: 'textfield',
                                id: 'qwclqx',
                                label: '期望处理',
                                labelWidth: '40%',
                                name: 'qwclqx',
                                required: true,
                                placeHolder: '请选择日期',
                                dateFormat: 'Y-m-d',
                                readOnly:true,
                                placeHolder: '点击设置时间',
                                listeners:{
                                	focus:function(){
                                		initDate2('qwclqx','期望处理时间');
                                	}
                                }
                            },
                            {
                                xtype: 'selectfield',
                                id: 'level',
                                label: '缓急程度',
                                labelWidth: '40%',
                                required: true,
                                name: 'level',
                                options: [
                                          {
                                        	  text: '请选择',
                                        	  value: ''
                                          },
                                          {
                                              text: '普通',
                                              value: '普通'
                                          },
                                          {
                                        	  text: '稍急',
                                        	  value: '稍急'
                                          },
                                          {
                                              text: '紧急',
                                              value: '紧急'
                                          }
                                      ]
                            },
                            {
                                xtype: 'textfield',
                                id: 'jjdz',
                                label: '寄件地址',
                                labelWidth: '40%',
                                name: 'jjdz',
                                required: true,
                                placeHolder: '请输入寄件地址'
                            },
                            {
                                xtype: 'textfield',
                                id: 'yb',
                                label: '邮编',
                                labelWidth: '40%',
                                name: 'yb',
                                required: true,
                                placeHolder: '请输入邮编'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'shr',
                                label: '寄件联系人',
                                labelWidth: '40%',
                                name: 'shr',
                                required: true,
                                placeHolder: '请输入寄件联系人'
                            },
                            {
                                xtype: 'textnumfield',
                                id: 'phone',
                                label: '电话',
                                labelWidth: '40%',
                                name: 'phone',
                                required: true,
                                placeHolder: '请输入电话'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'shr_2',
                                label: '实际反馈人',
                                labelWidth: '40%',
                                name: 'shr_2',
                                required: true,
                                placeHolder: '请输入实际反馈人'
                            },
                            {
                                xtype: 'textnumfield',
                                id: 'phone_2',
                                label: '电话',
                                labelWidth: '40%',
                                name: 'phone',
                                required: true,
                                placeHolder: '请输入电话'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'scgh',
                                label: '生产工号',
                                labelWidth: '40%',
                                name: 'scgh',
                                required: true,
                                placeHolder: '请输入一个生产工号',
                                listeners:{
                                	change:function(){
                                		objj.getApplication().getController('oa.startTheProcess.QualityControl.KXBQJCtrl').GetElevator_no_Info();
                                	}
                                }
                            },
                            {
                                xtype: 'textfield',
                                id: 'azdw',
                                label: '安装单位',
                                labelWidth: '40%',
                                name: 'azdw',
                                required: true,
                                placeHolder: '请输入安装单位'
                            },
                            {
                                xtype: 'textfield',
                                id: 'azzz',
                                label: '安装组长',
                                labelWidth: '40%',
                                name: 'azzz',
                                required: true,
                                placeHolder: '请输入安装组长'
                            },
                            {
                            	xtype: 'textfield',
                            	id:'scjd',
                            	label: '制造地点',
                            	labelWidth: '40%',
                            },
                            {
                                xtype: 'selectfield',
                                id: 'elastatus',
                                label: '电梯状态',
                                labelWidth: '40%',
                                name: 'elastatus',
                                placeHolder: '请选择电梯状态',
                                options: [
                                          {
                                        	  text: '请选择',
                                        	  value: ''
                                          },
                                          {
                                              text: '安装阶段(含调试)',
                                              value: '安装阶段'
                                          },
                                          {
                                        	  text: '保养阶段(已交付客户)',
                                        	  value: '保养阶段'
                                          },
                                      ]
                            },
                            {
                                xtype: 'textfield',
                                id: 'dftxh',
                                label: '电梯参数',
                                labelWidth: '40%',
                                name: 'dftxh',
                            },
                            {
                                xtype: 'textfield',
                                id: 'hth',
                                label: '合同号',
                                labelWidth: '40%',
                                name: 'hth',
                                required: true,
                                placeHolder: '请输入合同号',
                                listeners:{
                                	change:function(){
                                		objj.getApplication().getController('oa.startTheProcess.QualityControl.KXBQJCtrl').IsImportProject();
                                	}
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        id: 'kxbqj_fieldset',
                        hidden : true,
                        instructions: '具体不良/补缺内容及处理意见(必须填写所有涉及不良的工号)',
                        title: '开箱补缺件',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'jcrq',	
                                label: '进场日期',
                                labelWidth: '40%',
                                name: 'jcrq',
                                placeHolder: '请选择进场日期',
                                dateFormat: 'Y-m-d',
                                readOnly:true,
                                placeHolder: '点击设置时间',
                                listeners:{
                                	focus:function(){
                                		initDate2('jcrq','进场日期');
                                	}
                                }
                            },
                            {
                                xtype: 'textfield',
                                label: '监管员',
                                labelWidth: '40%',
                                id: 'sgh',
                                placeHolder: '请输入监管员'
                            },
                            {
                                xtype: 'textfield',
                                label: '开箱员',
                                labelWidth: '40%',
                                id: 'kxy',
                                placeHolder: '请输入开箱员'
                            },
                            {
                                xtype: 'fieldset',
                                title: 'NO.1',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: '箱号',
                                        labelWidth: '40%',
                                        id: 'xh_1',
                                        placeHolder: '请输入箱号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '到货日期',
                                        labelWidth: '40%',
                                        id: 'dhrq_1',
                                        dateFormat: 'Y-m-d',
                                        readOnly:true,
                                        placeHolder: '点击设置时间',
                                        listeners:{
                                        	focus:function(){
                                        		initDate2('dhrq_1','到货日期');
                                        	}
                                        }
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '页码',
                                        labelWidth: '40%',
                                        id: 'ym_1',
                                        placeHolder: '请输入页码'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '序号',
                                        labelWidth: '40%',
                                        id: 'xuh_1',
                                        placeHolder: '请输入序号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '零部件名称',
                                        labelWidth: '40%',
                                        id: 'lbjmc_1',
                                        placeHolder: '请输入零部件名称'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '图号/作业',
                                        labelWidth: '40%',
                                        id: 'thzy_1',
                                        placeHolder: '请输入图号/作业'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '规格',
                                        labelWidth: '40%',
                                        id: 'gg_1',
                                        placeHolder: '请输入规格'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '计量单位',
                                        labelWidth: '40%',
                                        id: 'dw_1',
                                        placeHolder: '请输入计量单位'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '装箱单数量',
                                        labelWidth: '40%',
                                        id: 'zxsl_1',
                                        placeHolder: '请输入装箱单数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '清点数量',
                                        labelWidth: '40%',
                                        id: 'qdsl_1',
                                        placeHolder: '请输入清点数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '缺/换数量',
                                        labelWidth: '40%',
                                        id: 'qhsl_1',
                                        placeHolder: '请输入缺/换数量'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'NO.2',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: '箱号',
                                        labelWidth: '40%',
                                        id: 'xh_2',
                                        placeHolder: '请输入箱号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '到货日期',
                                        labelWidth: '40%',
                                        id: 'dhrq_2',
                                        dateFormat: 'Y-m-d',
                                        readOnly:true,
                                        placeHolder: '点击设置时间',
                                        listeners:{
                                        	focus:function(){
                                        		initDate2('dhrq_2','到货日期');
                                        	}
                                        }
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '页码',
                                        labelWidth: '40%',
                                        id: 'ym_2',
                                        placeHolder: '请输入页码'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '序号',
                                        labelWidth: '40%',
                                        id: 'xuh_2',
                                        placeHolder: '请输入序号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '零部件名称',
                                        labelWidth: '40%',
                                        id: 'lbjmc_2',
                                        placeHolder: '请输入零部件名称'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '图号/作业',
                                        labelWidth: '40%',
                                        id: 'thzy_2',
                                        placeHolder: '请输入图号/作业'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '规格',
                                        labelWidth: '40%',
                                        id: 'gg_2',
                                        placeHolder: '请输入规格'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '计量单位',
                                        labelWidth: '40%',
                                        id: 'dw_2',
                                        placeHolder: '请输入计量单位'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '装箱单数量',
                                        labelWidth: '40%',
                                        id: 'zxsl_2',
                                        placeHolder: '请输入装箱单数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '清点数量',
                                        labelWidth: '40%',
                                        id: 'qdsl_2',
                                        placeHolder: '请输入清点数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '缺/换数量',
                                        labelWidth: '40%',
                                        id: 'qhsl_2',
                                        placeHolder: '请输入缺/换数量'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'NO.3',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: '箱号',
                                        labelWidth: '40%',
                                        id: 'xh_3',
                                        placeHolder: '请输入箱号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '到货日期',
                                        labelWidth: '40%',
                                        id: 'dhrq_3',
                                        placeHolder: '请选择到货日期',
                                        dateFormat: 'Y-m-d',
                                        readOnly:true,
                                        placeHolder: '点击设置时间',
                                        listeners:{
                                        	focus:function(){
                                        		initDate2('dhrq_3','到货日期');
                                        	}
                                        }
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '页码',
                                        labelWidth: '40%',
                                        id: 'ym_3',
                                        placeHolder: '请输入页码'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '序号',
                                        labelWidth: '40%',
                                        id: 'xuh_3',
                                        placeHolder: '请输入序号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '零部件名称',
                                        labelWidth: '40%',
                                        id: 'lbjmc_3',
                                        placeHolder: '请输入零部件名称'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '图号/作业',
                                        labelWidth: '40%',
                                        id: 'thzy_3',
                                        placeHolder: '请输入图号/作业'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '规格',
                                        labelWidth: '40%',
                                        id: 'gg_3',
                                        placeHolder: '请输入规格'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '计量单位',
                                        labelWidth: '40%',
                                        id: 'dw_3',
                                        placeHolder: '请输入计量单位'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '装箱单数量',
                                        labelWidth: '40%',
                                        id: 'zxsl_3',
                                        placeHolder: '请输入装箱单数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '清点数量',
                                        labelWidth: '40%',
                                        id: 'qdsl_3',
                                        placeHolder: '请输入清点数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '缺/换数量',
                                        labelWidth: '40%',
                                        id: 'qhsl_3',
                                        placeHolder: '请输入缺/换数量'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'NO.4',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: '箱号',
                                        labelWidth: '40%',
                                        id: 'xh_4',
                                        placeHolder: '请输入箱号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '到货日期',
                                        labelWidth: '40%',
                                        id: 'dhrq_4',
                                        dateFormat: 'Y-m-d',
                                        readOnly:true,
                                        placeHolder: '点击设置时间',
                                        listeners:{
                                        	focus:function(){
                                        		initDate2('dhrq_4','到货日期');
                                        	}
                                        }
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '页码',
                                        labelWidth: '40%',
                                        id: 'ym_4',
                                        placeHolder: '请输入页码'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '序号',
                                        labelWidth: '40%',
                                        id: 'xuh_4',
                                        placeHolder: '请输入序号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '零部件名称',
                                        labelWidth: '40%',
                                        id: 'lbjmc_4',
                                        placeHolder: '请输入零部件名称'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '图号/作业',
                                        labelWidth: '40%',
                                        id: 'thzy_4',
                                        placeHolder: '请输入图号/作业'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '规格',
                                        labelWidth: '40%',
                                        id: 'gg_4',
                                        placeHolder: '请输入规格'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '计量单位',
                                        labelWidth: '40%',
                                        id: 'dw_4',
                                        placeHolder: '请输入计量单位'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '装箱单数量',
                                        labelWidth: '40%',
                                        id: 'zxsl_4',
                                        placeHolder: '请输入装箱单数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '清点数量',
                                        labelWidth: '40%',
                                        id: 'qdsl_4',
                                        placeHolder: '请输入清点数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '缺/换数量',
                                        labelWidth: '40%',
                                        id: 'qhsl_4',
                                        placeHolder: '请输入缺/换数量'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'NO.5',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: '箱号',
                                        labelWidth: '40%',
                                        id: 'xh_5',
                                        placeHolder: '请输入箱号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '到货日期',
                                        labelWidth: '40%',
                                        id: 'dhrq_5',
                                        dateFormat: 'Y-m-d',
                                        readOnly:true,
                                        placeHolder: '点击设置时间',
                                        listeners:{
                                        	focus:function(){
                                        		initDate2('dhrq_5','到货日期');
                                        	}
                                        }
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '页码',
                                        labelWidth: '40%',
                                        id: 'ym_5',
                                        placeHolder: '请输入页码'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '序号',
                                        labelWidth: '40%',
                                        id: 'xuh_5',
                                        placeHolder: '请输入序号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '零部件名称',
                                        labelWidth: '40%',
                                        id: 'lbjmc_5',
                                        placeHolder: '请输入零部件名称'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '图号/作业',
                                        labelWidth: '40%',
                                        id: 'thzy_5',
                                        placeHolder: '请输入图号/作业'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '规格',
                                        labelWidth: '40%',
                                        id: 'gg_5',
                                        placeHolder: '请输入规格'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '计量单位',
                                        labelWidth: '40%',
                                        id: 'dw_5',
                                        placeHolder: '请输入计量单位'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '装箱单数量',
                                        labelWidth: '40%',
                                        id: 'zxsl_5',
                                        placeHolder: '请输入装箱单数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '清点数量',
                                        labelWidth: '40%',
                                        id: 'qdsl_5',
                                        placeHolder: '请输入清点数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '缺/换数量',
                                        labelWidth: '40%',
                                        id: 'qhsl_5',
                                        placeHolder: '请输入缺/换数量'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'NO.6',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: '箱号',
                                        labelWidth: '40%',
                                        id: 'xh_6',
                                        placeHolder: '请输入箱号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '到货日期',
                                        labelWidth: '40%',
                                        id: 'dhrq_6',
                                        dateFormat: 'Y-m-d',
                                        readOnly:true,
                                        placeHolder: '点击设置时间',
                                        listeners:{
                                        	focus:function(){
                                        		initDate2('dhrq_6','到货日期');
                                        	}
                                        }
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '页码',
                                        labelWidth: '40%',
                                        id: 'ym_6',
                                        placeHolder: '请输入页码'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '序号',
                                        labelWidth: '40%',
                                        id: 'xuh_6',
                                        placeHolder: '请输入序号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '零部件名称',
                                        labelWidth: '40%',
                                        id: 'lbjmc_6',
                                        placeHolder: '请输入零部件名称'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '图号/作业',
                                        labelWidth: '40%',
                                        id: 'thzy_6',
                                        placeHolder: '请输入图号/作业'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '规格',
                                        labelWidth: '40%',
                                        id: 'gg_6',
                                        placeHolder: '请输入规格'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '计量单位',
                                        labelWidth: '40%',
                                        id: 'dw_6',
                                        placeHolder: '请输入计量单位'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '装箱单数量',
                                        labelWidth: '40%',
                                        id: 'zxsl_6',
                                        placeHolder: '请输入装箱单数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '清点数量',
                                        labelWidth: '40%',
                                        id: 'qdsl_6',
                                        placeHolder: '请输入清点数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '缺/换数量',
                                        labelWidth: '40%',
                                        id: 'qhsl_6',
                                        placeHolder: '请输入缺/换数量'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'NO.7',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: '箱号',
                                        labelWidth: '40%',
                                        id: 'xh_7',
                                        placeHolder: '请输入箱号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '到货日期',
                                        labelWidth: '40%',
                                        id: 'dhrq_7',
                                        dateFormat: 'Y-m-d',
                                        readOnly:true,
                                        placeHolder: '点击设置时间',
                                        listeners:{
                                        	focus:function(){
                                        		initDate2('dhrq_7','到货日期');
                                        	}
                                        }
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '页码',
                                        labelWidth: '40%',
                                        id: 'ym_7',
                                        placeHolder: '请输入页码'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '序号',
                                        labelWidth: '40%',
                                        id: 'xuh_7',
                                        placeHolder: '请输入序号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '零部件名称',
                                        labelWidth: '40%',
                                        id: 'lbjmc_7',
                                        placeHolder: '请输入零部件名称'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '图号/作业',
                                        labelWidth: '40%',
                                        id: 'thzy_7',
                                        placeHolder: '请输入图号/作业'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '规格',
                                        labelWidth: '40%',
                                        id: 'gg_7',
                                        placeHolder: '请输入规格'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '计量单位',
                                        labelWidth: '40%',
                                        id: 'dw_7',
                                        placeHolder: '请输入计量单位'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '装箱单数量',
                                        labelWidth: '40%',
                                        id: 'zxsl_7',
                                        placeHolder: '请输入装箱单数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '清点数量',
                                        labelWidth: '40%',
                                        id: 'qdsl_7',
                                        placeHolder: '请输入清点数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '缺/换数量',
                                        labelWidth: '40%',
                                        id: 'qhsl_7',
                                        placeHolder: '请输入缺/换数量'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'NO.8',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: '箱号',
                                        labelWidth: '40%',
                                        id: 'xh_8',
                                        placeHolder: '请输入箱号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '到货日期',
                                        labelWidth: '40%',
                                        id: 'dhrq_8',
                                        dateFormat: 'Y-m-d',
                                        readOnly:true,
                                        placeHolder: '点击设置时间',
                                        listeners:{
                                        	focus:function(){
                                        		initDate2('dhrq_8','到货日期');
                                        	}
                                        }
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '页码',
                                        labelWidth: '40%',
                                        id: 'ym_8',
                                        placeHolder: '请输入页码'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '序号',
                                        labelWidth: '40%',
                                        id: 'xuh_8',
                                        placeHolder: '请输入序号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '零部件名称',
                                        labelWidth: '40%',
                                        id: 'lbjmc_8',
                                        placeHolder: '请输入零部件名称'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '图号/作业',
                                        labelWidth: '40%',
                                        id: 'thzy_8',
                                        placeHolder: '请输入图号/作业'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '规格',
                                        labelWidth: '40%',
                                        id: 'gg_8',
                                        placeHolder: '请输入规格'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '计量单位',
                                        labelWidth: '40%',
                                        id: 'dw_8',
                                        placeHolder: '请输入计量单位'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '装箱单数量',
                                        labelWidth: '40%',
                                        id: 'zxsl_8',
                                        placeHolder: '请输入装箱单数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '清点数量',
                                        labelWidth: '40%',
                                        id: 'qdsl_8',
                                        placeHolder: '请输入清点数量'
                                    },
                                    {
                                        xtype: 'textnumfield',
                                        label: '缺/换数量',
                                        labelWidth: '40%',
                                        id: 'qhsl_8',
                                        placeHolder: '请输入缺/换数量'
                                    }
                                ]
                            },
//                            {
//                                xtype: 'container',
//                                layout: {
//                                    type: 'hbox',
//                                    align: 'start',
//                                    pack: 'center'
//                                },
//                                items: [
//                                    {
//                                        xtype: 'button',
//                                        margin: 10,
//                                        width: 120,
//                                        text: '拍照'
//                                    },
//                                    {
//                                        xtype: 'button',
//                                        margin: 10,
//                                        width: 120,
//                                        text: '浏览'
//                                    }
//                                ]
//                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        items: [
                            {
		                        xtype: 'textareafield',
		                        id: 'beizhu_textarea',
		                        label: '内容',
		                        labelWidth: '40%',
		                        name: 'beizhu',
		                        required: true,
		                        placeHolder: '请输入内容'
                            }
                            ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                id:'agentman',
                                label: '报告人',
                                labelWidth: '40%',
                                name: 'bgr',
                                placeHolder: '请输入报告人'
                            },
                            {
                                xtype: 'textfield',
                                id: 'dept',
                                label: '所属部门',
                                labelWidth: '40%',
                                name: 'dep',
                                placeHolder: '请输入所属部门'
                            },
                            {
                                xtype: 'textfield',
                                id: 'createdate',
                                label: '时间',
                                labelWidth: '40%',
                                name: 'bgsj',
                                placeHolder: '请选择时间'
                            },
                            {
                                xtype: 'textfield',
                                id: 'bgrphone',
                                label: '报告人电话',
                                labelWidth: '40%',
                                required: true,
                                name: 'bgrphone',
                                placeHolder: '请输入报告人联系电话'
                            },
                        ]
                    },
//                    {
//                        xtype: 'fieldset',
//                        title: '',
//                        items: [
//                            {
//                                xtype: 'textfield',
//                                label: '设计/其他相关部门',
//                                labelWidth: '40%',
//                                name: 'sj',
//                                placeHolder: '请输入相关部门'
//                            },
//                            {
//                                xtype: 'textfield',
//                                label: '设计/其他相关部门领导',
//                                labelWidth: '40%',
//                                name: 'sj_leader',
//                                required: true,
//                                placeHolder: '请输入领导姓名'
//                            },
//                            {
//                                xtype: 'fieldset',
//                                title: 'NO.1',
//                                items: [
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'bjmc_1',
//                                        label: '零部件名称',
//                                        labelWidth: '40%',
//                                        name: 'bjmc_22',
//                                        placeHolder: '请输入零部件名称'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'xha_1',
//                                        label: '箱号',
//                                        labelWidth: '40%',
//                                        name: 'xha_1',
//                                        placeHolder: '请输入箱号'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'wlgc_1',
//                                        label: '网络工厂',
//                                        labelWidth: '40%',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '广州工厂',
//                                                      value: '广州工厂'
//                                                  },
//                                                  {
//                                                	  text: '上海工厂',
//                                                	  value: '上海工厂'
//                                                  },
//                                                  {
//                                                      text: '日滨公司',
//                                                      value: '日滨公司'
//                                                  },
//                                                  {
//                                                	  text: '日立电机',
//                                                	  value: '日立电机'
//                                                  },
//                                                  {
//                                                	  text: '成都工厂',
//                                                	  value: '成都工厂'
//                                                  },
//                                                  {
//                                                	  text: '扶梯工厂',
//                                                	  value: '扶梯工厂'
//                                                  },
//                                                  {
//                                                	  text: '天津工厂',
//                                                	  value: '天津工厂'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'blxz_1',
//                                        label: '不良性质',
//                                        labelWidth: '40%',
//                                        name: 'blxz_1',
//                                        placeHolder: '请输入不良性质',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '不良',
//                                                      value: '不良'
//                                                  },
//                                                  {
//                                                	  text: '装箱缺件',
//                                                	  value: '装箱缺件'
//                                                  },
//                                                  {
//                                                      text: '错件',
//                                                      value: '错件'
//                                                  },
//                                                  {
//                                                	  text: '设计缺漏',
//                                                	  value: '设计缺漏'
//                                                  },
//                                                  {
//                                                	  text: '反馈信息错误',
//                                                	  value: '反馈信息错误'
//                                                  },
//                                                  {
//                                                	  text: '废单',
//                                                	  value: '废单'
//                                                  },
//                                                  {
//                                                	  text: '咨询',
//                                                	  value: '咨询'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'zrdep_1',
//                                        label: '责任部门',
//                                        labelWidth: '40%',
//                                        name: 'zrdep_1',
//                                        placeHolder: '请输入责任部门'
//                                    },
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'blyy_1',
//                                        label: '不良原因',
//                                        labelWidth: '40%',
//                                        name: 'blyy_1',
//                                        placeHolder: '请输入不良原因'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'qrr_1',
//                                        label: '确认人',
//                                        labelWidth: '40%',
//                                        name: 'qrr_1',
//                                        placeHolder: '确认人'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'blfl_1',
//                                        label: '不良分类',
//                                        labelWidth: '40%',
//                                        name: 'blfl_1',
//                                        placeHolder: '请输入不良分类'
//                                    },
//                                    {
//                                        xtype: 'textnumfield',
//                                        id: 'xs_1',
//                                        label: '项数',
//                                        labelWidth: '40%',
//                                        name: 'xs_1',
//                                        placeHolder: '请输入项数'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'tz_1',
//                                        label: '梯种类别',
//                                        labelWidth: '40%',
//                                        name: 'tz_1',
//                                        placeHolder: '请选择梯种类别',
//                                        options: [
//                                                  {
//                                                      text: '请选择',
//                                                      value: ''
//                                                  },
//                                                  {
//                                                	  text: '国产标准',
//                                                	  value: '国产标准'
//                                                  },
//                                                  {
//                                                	  text: '国产非标',
//                                                	  value: '国产非标'
//                                                  },
//                                                  {
//                                                	  text: '进口梯',
//                                                	  value: '进口梯'
//                                                  },
//                                                  {
//                                                      text: '复合梯',
//                                                      value: '复合梯'
//                                                  }
//                                              ]
//                                    }
//                                ]
//                            },
//                            {
//                                xtype: 'fieldset',
//                                title: 'NO.2',
//                                items: [
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'bjmc_2',
//                                        label: '零部件名称',
//                                        labelWidth: '40%',
//                                        placeHolder: '请输入零部件名称'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'xha_2',
//                                        label: '箱号',
//                                        labelWidth: '40%',
//                                        name: 'xha_2',
//                                        placeHolder: '请输入箱号'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'wlgc_2',
//                                        label: '网络工厂',
//                                        labelWidth: '40%',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '广州工厂',
//                                                      value: '广州工厂'
//                                                  },
//                                                  {
//                                                	  text: '上海工厂',
//                                                	  value: '上海工厂'
//                                                  },
//                                                  {
//                                                      text: '日滨公司',
//                                                      value: '日滨公司'
//                                                  },
//                                                  {
//                                                	  text: '日立电机',
//                                                	  value: '日立电机'
//                                                  },
//                                                  {
//                                                	  text: '成都工厂',
//                                                	  value: '成都工厂'
//                                                  },
//                                                  {
//                                                	  text: '扶梯工厂',
//                                                	  value: '扶梯工厂'
//                                                  },
//                                                  {
//                                                	  text: '天津工厂',
//                                                	  value: '天津工厂'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'blxz_2',
//                                        label: '不良性质',
//                                        labelWidth: '40%',
//                                        name: 'blxz_2',
//                                        placeHolder: '请输入不良性质',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '不良',
//                                                      value: '不良'
//                                                  },
//                                                  {
//                                                	  text: '装箱缺件',
//                                                	  value: '装箱缺件'
//                                                  },
//                                                  {
//                                                      text: '错件',
//                                                      value: '错件'
//                                                  },
//                                                  {
//                                                	  text: '设计缺漏',
//                                                	  value: '设计缺漏'
//                                                  },
//                                                  {
//                                                	  text: '反馈信息错误',
//                                                	  value: '反馈信息错误'
//                                                  },
//                                                  {
//                                                	  text: '废单',
//                                                	  value: '废单'
//                                                  },
//                                                  {
//                                                	  text: '咨询',
//                                                	  value: '咨询'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'zrdep_2',
//                                        label: '责任部门',
//                                        labelWidth: '40%',
//                                        name: 'zrdep_2',
//                                        placeHolder: '请输入责任部门'
//                                    },
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'blyy_2',
//                                        label: '不良原因',
//                                        labelWidth: '40%',
//                                        name: 'blyy_2',
//                                        placeHolder: '请输入不良原因'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'qrr_2',
//                                        label: '确认人',
//                                        labelWidth: '40%',
//                                        name: 'qrr_2',
//                                        placeHolder: '确认人'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'blfl_2',
//                                        label: '不良分类',
//                                        labelWidth: '40%',
//                                        name: 'blfl_2',
//                                        placeHolder: '请输入不良分类'
//                                    },
//                                    {
//                                        xtype: 'textnumfield',
//                                        id: 'xs_2',
//                                        label: '项数',
//                                        labelWidth: '40%',
//                                        name: 'xs_2',
//                                        placeHolder: '请输入项数'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'tz_2',
//                                        label: '梯种类别',
//                                        labelWidth: '40%',
//                                        name: 'tz_2',
//                                        placeHolder: '请选择梯种类别',
//                                        options: [
//                                                  {
//                                                      text: '请选择',
//                                                      value: ''
//                                                  },
//                                                  {
//                                                	  text: '国产标准',
//                                                	  value: '国产标准'
//                                                  },
//                                                  {
//                                                	  text: '国产非标',
//                                                	  value: '国产非标'
//                                                  },
//                                                  {
//                                                	  text: '进口梯',
//                                                	  value: '进口梯'
//                                                  },
//                                                  {
//                                                      text: '复合梯',
//                                                      value: '复合梯'
//                                                  }
//                                              ]
//                                    }
//                                ]
//                            },
//                            {
//                                xtype: 'fieldset',
//                                title: 'NO.3',
//                                items: [
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'bjmc_3',
//                                        label: '零部件名称',
//                                        labelWidth: '40%',
//                                        placeHolder: '请输入零部件名称'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'xha_3',
//                                        label: '箱号',
//                                        labelWidth: '40%',
//                                        name: 'xha_3',
//                                        placeHolder: '请输入箱号'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'wlgc_3',
//                                        label: '网络工厂',
//                                        labelWidth: '40%',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '广州工厂',
//                                                      value: '广州工厂'
//                                                  },
//                                                  {
//                                                	  text: '上海工厂',
//                                                	  value: '上海工厂'
//                                                  },
//                                                  {
//                                                      text: '日滨公司',
//                                                      value: '日滨公司'
//                                                  },
//                                                  {
//                                                	  text: '日立电机',
//                                                	  value: '日立电机'
//                                                  },
//                                                  {
//                                                	  text: '成都工厂',
//                                                	  value: '成都工厂'
//                                                  },
//                                                  {
//                                                	  text: '扶梯工厂',
//                                                	  value: '扶梯工厂'
//                                                  },
//                                                  {
//                                                	  text: '天津工厂',
//                                                	  value: '天津工厂'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'blxz_3',
//                                        label: '不良性质',
//                                        labelWidth: '40%',
//                                        name: 'blxz_3',
//                                        placeHolder: '请输入不良性质',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '不良',
//                                                      value: '不良'
//                                                  },
//                                                  {
//                                                	  text: '装箱缺件',
//                                                	  value: '装箱缺件'
//                                                  },
//                                                  {
//                                                      text: '错件',
//                                                      value: '错件'
//                                                  },
//                                                  {
//                                                	  text: '设计缺漏',
//                                                	  value: '设计缺漏'
//                                                  },
//                                                  {
//                                                	  text: '反馈信息错误',
//                                                	  value: '反馈信息错误'
//                                                  },
//                                                  {
//                                                	  text: '废单',
//                                                	  value: '废单'
//                                                  },
//                                                  {
//                                                	  text: '咨询',
//                                                	  value: '咨询'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'zrdep_3',
//                                        label: '责任部门',
//                                        labelWidth: '40%',
//                                        name: 'zrdep_3',
//                                        placeHolder: '请输入责任部门'
//                                    },
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'blyy_3',
//                                        label: '不良原因',
//                                        labelWidth: '40%',
//                                        name: 'blyy_3',
//                                        placeHolder: '请输入不良原因'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'qrr_3',
//                                        label: '确认人',
//                                        labelWidth: '40%',
//                                        name: 'qrr_3',
//                                        placeHolder: '确认人'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'blfl_3',
//                                        label: '不良分类',
//                                        labelWidth: '40%',
//                                        name: 'blfl_3',
//                                        placeHolder: '请输入不良分类'
//                                    },
//                                    {
//                                        xtype: 'textnumfield',
//                                        id: 'xs_3',
//                                        label: '项数',
//                                        labelWidth: '40%',
//                                        name: 'xs_3',
//                                        placeHolder: '请输入项数'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'tz_3',
//                                        label: '梯种类别',
//                                        labelWidth: '40%',
//                                        name: 'tz_3',
//                                        placeHolder: '请选择梯种类别',
//                                        options: [
//                                                  {
//                                                      text: '请选择',
//                                                      value: ''
//                                                  },
//                                                  {
//                                                	  text: '国产标准',
//                                                	  value: '国产标准'
//                                                  },
//                                                  {
//                                                	  text: '国产非标',
//                                                	  value: '国产非标'
//                                                  },
//                                                  {
//                                                	  text: '进口梯',
//                                                	  value: '进口梯'
//                                                  },
//                                                  {
//                                                      text: '复合梯',
//                                                      value: '复合梯'
//                                                  }
//                                              ]
//                                    }
//                                ]
//                            },
//                            {
//                                xtype: 'fieldset',
//                                title: 'NO.4',
//                                items: [
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'bjmc_4',
//                                        label: '零部件名称',
//                                        labelWidth: '40%',
//                                        placeHolder: '请输入零部件名称'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'xha_4',
//                                        label: '箱号',
//                                        labelWidth: '40%',
//                                        name: 'xha_4',
//                                        placeHolder: '请输入箱号'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'wlgc_4',
//                                        label: '网络工厂',
//                                        labelWidth: '40%',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '广州工厂',
//                                                      value: '广州工厂'
//                                                  },
//                                                  {
//                                                	  text: '上海工厂',
//                                                	  value: '上海工厂'
//                                                  },
//                                                  {
//                                                      text: '日滨公司',
//                                                      value: '日滨公司'
//                                                  },
//                                                  {
//                                                	  text: '日立电机',
//                                                	  value: '日立电机'
//                                                  },
//                                                  {
//                                                	  text: '成都工厂',
//                                                	  value: '成都工厂'
//                                                  },
//                                                  {
//                                                	  text: '扶梯工厂',
//                                                	  value: '扶梯工厂'
//                                                  },
//                                                  {
//                                                	  text: '天津工厂',
//                                                	  value: '天津工厂'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'blxz_4',
//                                        label: '不良性质',
//                                        labelWidth: '40%',
//                                        name: 'blxz_4',
//                                        placeHolder: '请输入不良性质',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '不良',
//                                                      value: '不良'
//                                                  },
//                                                  {
//                                                	  text: '装箱缺件',
//                                                	  value: '装箱缺件'
//                                                  },
//                                                  {
//                                                      text: '错件',
//                                                      value: '错件'
//                                                  },
//                                                  {
//                                                	  text: '设计缺漏',
//                                                	  value: '设计缺漏'
//                                                  },
//                                                  {
//                                                	  text: '反馈信息错误',
//                                                	  value: '反馈信息错误'
//                                                  },
//                                                  {
//                                                	  text: '废单',
//                                                	  value: '废单'
//                                                  },
//                                                  {
//                                                	  text: '咨询',
//                                                	  value: '咨询'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'zrdep_4',
//                                        label: '责任部门',
//                                        labelWidth: '40%',
//                                        name: 'zrdep_4',
//                                        placeHolder: '请输入责任部门'
//                                    },
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'blyy_4',
//                                        label: '不良原因',
//                                        labelWidth: '40%',
//                                        name: 'blyy_4',
//                                        placeHolder: '请输入不良原因'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'qrr_4',
//                                        label: '确认人',
//                                        labelWidth: '40%',
//                                        name: 'qrr_4',
//                                        placeHolder: '确认人'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'blfl_4',
//                                        label: '不良分类',
//                                        labelWidth: '40%',
//                                        name: 'blfl_4',
//                                        placeHolder: '请输入不良分类'
//                                    },
//                                    {
//                                        xtype: 'textnumfield',
//                                        id: 'xs_4',
//                                        label: '项数',
//                                        labelWidth: '40%',
//                                        name: 'xs_4',
//                                        placeHolder: '请输入项数'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'tz_4',
//                                        label: '梯种类别',
//                                        labelWidth: '40%',
//                                        name: 'tz_4',
//                                        placeHolder: '请选择梯种类别',
//                                        options: [
//                                                  {
//                                                      text: '请选择',
//                                                      value: ''
//                                                  },
//                                                  {
//                                                	  text: '国产标准',
//                                                	  value: '国产标准'
//                                                  },
//                                                  {
//                                                	  text: '国产非标',
//                                                	  value: '国产非标'
//                                                  },
//                                                  {
//                                                	  text: '进口梯',
//                                                	  value: '进口梯'
//                                                  },
//                                                  {
//                                                      text: '复合梯',
//                                                      value: '复合梯'
//                                                  }
//                                              ]
//                                    }
//                                ]
//                            },
//                            {
//                                xtype: 'fieldset',
//                                title: 'NO.5',
//                                items: [
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'bjmc_5',
//                                        label: '零部件名称',
//                                        labelWidth: '40%',
//                                        placeHolder: '请输入零部件名称'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'xha_5',
//                                        label: '箱号',
//                                        labelWidth: '40%',
//                                        name: 'xha_5',
//                                        placeHolder: '请输入箱号'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'wlgc_5',
//                                        label: '网络工厂',
//                                        labelWidth: '40%',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '广州工厂',
//                                                      value: '广州工厂'
//                                                  },
//                                                  {
//                                                	  text: '上海工厂',
//                                                	  value: '上海工厂'
//                                                  },
//                                                  {
//                                                      text: '日滨公司',
//                                                      value: '日滨公司'
//                                                  },
//                                                  {
//                                                	  text: '日立电机',
//                                                	  value: '日立电机'
//                                                  },
//                                                  {
//                                                	  text: '成都工厂',
//                                                	  value: '成都工厂'
//                                                  },
//                                                  {
//                                                	  text: '扶梯工厂',
//                                                	  value: '扶梯工厂'
//                                                  },
//                                                  {
//                                                	  text: '天津工厂',
//                                                	  value: '天津工厂'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'blxz_5',
//                                        label: '不良性质',
//                                        labelWidth: '40%',
//                                        name: 'blxz_5',
//                                        placeHolder: '请输入不良性质',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '不良',
//                                                      value: '不良'
//                                                  },
//                                                  {
//                                                	  text: '装箱缺件',
//                                                	  value: '装箱缺件'
//                                                  },
//                                                  {
//                                                      text: '错件',
//                                                      value: '错件'
//                                                  },
//                                                  {
//                                                	  text: '设计缺漏',
//                                                	  value: '设计缺漏'
//                                                  },
//                                                  {
//                                                	  text: '反馈信息错误',
//                                                	  value: '反馈信息错误'
//                                                  },
//                                                  {
//                                                	  text: '废单',
//                                                	  value: '废单'
//                                                  },
//                                                  {
//                                                	  text: '咨询',
//                                                	  value: '咨询'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'zrdep_5',
//                                        label: '责任部门',
//                                        labelWidth: '40%',
//                                        name: 'zrdep_5',
//                                        placeHolder: '请输入责任部门'
//                                    },
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'blyy_5',
//                                        label: '不良原因',
//                                        labelWidth: '40%',
//                                        name: 'blyy_5',
//                                        placeHolder: '请输入不良原因'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'qrr_5',
//                                        label: '确认人',
//                                        labelWidth: '40%',
//                                        name: 'qrr_5',
//                                        placeHolder: '确认人'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'blfl_5',
//                                        label: '不良分类',
//                                        labelWidth: '40%',
//                                        name: 'blfl_5',
//                                        placeHolder: '请输入不良分类'
//                                    },
//                                    {
//                                        xtype: 'textnumfield',
//                                        id: 'xs_5',
//                                        label: '项数',
//                                        labelWidth: '40%',
//                                        name: 'xs_5',
//                                        placeHolder: '请输入项数'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'tz_5',
//                                        label: '梯种类别',
//                                        labelWidth: '40%',
//                                        name: 'tz_5',
//                                        placeHolder: '请选择梯种类别',
//                                        options: [
//                                                  {
//                                                      text: '请选择',
//                                                      value: ''
//                                                  },
//                                                  {
//                                                	  text: '国产标准',
//                                                	  value: '国产标准'
//                                                  },
//                                                  {
//                                                	  text: '国产非标',
//                                                	  value: '国产非标'
//                                                  },
//                                                  {
//                                                	  text: '进口梯',
//                                                	  value: '进口梯'
//                                                  },
//                                                  {
//                                                      text: '复合梯',
//                                                      value: '复合梯'
//                                                  }
//                                              ]
//                                    }
//                                ]
//                            },
//                            {
//                                xtype: 'fieldset',
//                                title: 'NO.6',
//                                items: [
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'bjmc_6',
//                                        label: '零部件名称',
//                                        labelWidth: '40%',
//                                        placeHolder: '请输入零部件名称'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'xha_6',
//                                        label: '箱号',
//                                        labelWidth: '40%',
//                                        name: 'xha_6',
//                                        placeHolder: '请输入箱号'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'wlgc_6',
//                                        label: '网络工厂',
//                                        labelWidth: '40%',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '广州工厂',
//                                                      value: '广州工厂'
//                                                  },
//                                                  {
//                                                	  text: '上海工厂',
//                                                	  value: '上海工厂'
//                                                  },
//                                                  {
//                                                      text: '日滨公司',
//                                                      value: '日滨公司'
//                                                  },
//                                                  {
//                                                	  text: '日立电机',
//                                                	  value: '日立电机'
//                                                  },
//                                                  {
//                                                	  text: '成都工厂',
//                                                	  value: '成都工厂'
//                                                  },
//                                                  {
//                                                	  text: '扶梯工厂',
//                                                	  value: '扶梯工厂'
//                                                  },
//                                                  {
//                                                	  text: '天津工厂',
//                                                	  value: '天津工厂'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'blxz_6',
//                                        label: '不良性质',
//                                        labelWidth: '40%',
//                                        name: 'blxz_6',
//                                        placeHolder: '请输入不良性质',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '不良',
//                                                      value: '不良'
//                                                  },
//                                                  {
//                                                	  text: '装箱缺件',
//                                                	  value: '装箱缺件'
//                                                  },
//                                                  {
//                                                      text: '错件',
//                                                      value: '错件'
//                                                  },
//                                                  {
//                                                	  text: '设计缺漏',
//                                                	  value: '设计缺漏'
//                                                  },
//                                                  {
//                                                	  text: '反馈信息错误',
//                                                	  value: '反馈信息错误'
//                                                  },
//                                                  {
//                                                	  text: '废单',
//                                                	  value: '废单'
//                                                  },
//                                                  {
//                                                	  text: '咨询',
//                                                	  value: '咨询'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'zrdep_6',
//                                        label: '责任部门',
//                                        labelWidth: '40%',
//                                        name: 'zrdep_6',
//                                        placeHolder: '请输入责任部门'
//                                    },
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'blyy_6',
//                                        label: '不良原因',
//                                        labelWidth: '40%',
//                                        name: 'blyy_6',
//                                        placeHolder: '请输入不良原因'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'qrr_6',
//                                        label: '确认人',
//                                        labelWidth: '40%',
//                                        name: 'qrr_6',
//                                        placeHolder: '确认人'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'blfl_6',
//                                        label: '不良分类',
//                                        labelWidth: '40%',
//                                        name: 'blfl_6',
//                                        placeHolder: '请输入不良分类'
//                                    },
//                                    {
//                                        xtype: 'textnumfield',
//                                        id: 'xs_6',
//                                        label: '项数',
//                                        labelWidth: '40%',
//                                        name: 'xs_6',
//                                        placeHolder: '请输入项数'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'tz_6',
//                                        label: '梯种类别',
//                                        labelWidth: '40%',
//                                        name: 'tz_6',
//                                        placeHolder: '请选择梯种类别',
//                                        options: [
//                                                  {
//                                                      text: '请选择',
//                                                      value: ''
//                                                  },
//                                                  {
//                                                	  text: '国产标准',
//                                                	  value: '国产标准'
//                                                  },
//                                                  {
//                                                	  text: '国产非标',
//                                                	  value: '国产非标'
//                                                  },
//                                                  {
//                                                	  text: '进口梯',
//                                                	  value: '进口梯'
//                                                  },
//                                                  {
//                                                      text: '复合梯',
//                                                      value: '复合梯'
//                                                  }
//                                              ]
//                                    }
//                                ]
//                            },
//                            {
//                                xtype: 'fieldset',
//                                title: 'NO.7',
//                                items: [
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'bjmc_7',
//                                        label: '零部件名称',
//                                        labelWidth: '40%',
//                                        placeHolder: '请输入零部件名称'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'xha_7',
//                                        label: '箱号',
//                                        labelWidth: '40%',
//                                        name: 'xha_7',
//                                        placeHolder: '请输入箱号'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'wlgc_7',
//                                        label: '网络工厂',
//                                        labelWidth: '40%',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '广州工厂',
//                                                      value: '广州工厂'
//                                                  },
//                                                  {
//                                                	  text: '上海工厂',
//                                                	  value: '上海工厂'
//                                                  },
//                                                  {
//                                                      text: '日滨公司',
//                                                      value: '日滨公司'
//                                                  },
//                                                  {
//                                                	  text: '日立电机',
//                                                	  value: '日立电机'
//                                                  },
//                                                  {
//                                                	  text: '成都工厂',
//                                                	  value: '成都工厂'
//                                                  },
//                                                  {
//                                                	  text: '扶梯工厂',
//                                                	  value: '扶梯工厂'
//                                                  },
//                                                  {
//                                                	  text: '天津工厂',
//                                                	  value: '天津工厂'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'blxz_7',
//                                        label: '不良性质',
//                                        labelWidth: '40%',
//                                        name: 'blxz_7',
//                                        placeHolder: '请输入不良性质',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '不良',
//                                                      value: '不良'
//                                                  },
//                                                  {
//                                                	  text: '装箱缺件',
//                                                	  value: '装箱缺件'
//                                                  },
//                                                  {
//                                                      text: '错件',
//                                                      value: '错件'
//                                                  },
//                                                  {
//                                                	  text: '设计缺漏',
//                                                	  value: '设计缺漏'
//                                                  },
//                                                  {
//                                                	  text: '反馈信息错误',
//                                                	  value: '反馈信息错误'
//                                                  },
//                                                  {
//                                                	  text: '废单',
//                                                	  value: '废单'
//                                                  },
//                                                  {
//                                                	  text: '咨询',
//                                                	  value: '咨询'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'zrdep_7',
//                                        label: '责任部门',
//                                        labelWidth: '40%',
//                                        name: 'zrdep_7',
//                                        placeHolder: '请输入责任部门'
//                                    },
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'blyy_7',
//                                        label: '不良原因',
//                                        labelWidth: '40%',
//                                        name: 'blyy_7',
//                                        placeHolder: '请输入不良原因'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'qrr_7',
//                                        label: '确认人',
//                                        labelWidth: '40%',
//                                        name: 'qrr_7',
//                                        placeHolder: '确认人'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'blfl_7',
//                                        label: '不良分类',
//                                        labelWidth: '40%',
//                                        name: 'blfl_7',
//                                        placeHolder: '请输入不良分类'
//                                    },
//                                    {
//                                        xtype: 'textnumfield',
//                                        id: 'xs_7',
//                                        label: '项数',
//                                        labelWidth: '40%',
//                                        name: 'xs_7',
//                                        placeHolder: '请输入项数'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'tz_7',
//                                        label: '梯种类别',
//                                        labelWidth: '40%',
//                                        name: 'tz_7',
//                                        placeHolder: '请选择梯种类别',
//                                        options: [
//                                                  {
//                                                      text: '请选择',
//                                                      value: ''
//                                                  },
//                                                  {
//                                                	  text: '国产标准',
//                                                	  value: '国产标准'
//                                                  },
//                                                  {
//                                                	  text: '国产非标',
//                                                	  value: '国产非标'
//                                                  },
//                                                  {
//                                                	  text: '进口梯',
//                                                	  value: '进口梯'
//                                                  },
//                                                  {
//                                                      text: '复合梯',
//                                                      value: '复合梯'
//                                                  }
//                                              ]
//                                    }
//                                ]
//                            },
//                            {
//                                xtype: 'fieldset',
//                                title: 'NO.8',
//                                items: [
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'bjmc_8',
//                                        label: '零部件名称',
//                                        labelWidth: '40%',
//                                        placeHolder: '请输入零部件名称'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'xha_8',
//                                        label: '箱号',
//                                        labelWidth: '40%',
//                                        name: 'xha_8',
//                                        placeHolder: '请输入箱号'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'wlgc_8',
//                                        label: '网络工厂',
//                                        labelWidth: '40%',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '广州工厂',
//                                                      value: '广州工厂'
//                                                  },
//                                                  {
//                                                	  text: '上海工厂',
//                                                	  value: '上海工厂'
//                                                  },
//                                                  {
//                                                      text: '日滨公司',
//                                                      value: '日滨公司'
//                                                  },
//                                                  {
//                                                	  text: '日立电机',
//                                                	  value: '日立电机'
//                                                  },
//                                                  {
//                                                	  text: '成都工厂',
//                                                	  value: '成都工厂'
//                                                  },
//                                                  {
//                                                	  text: '扶梯工厂',
//                                                	  value: '扶梯工厂'
//                                                  },
//                                                  {
//                                                	  text: '天津工厂',
//                                                	  value: '天津工厂'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'blxz_8',
//                                        label: '不良性质',
//                                        labelWidth: '40%',
//                                        name: 'blxz_8',
//                                        placeHolder: '请输入不良性质',
//                                        options: [
//                                                  {
//                                                	  text: '请选择',
//                                                	  value: ''
//                                                  },
//                                                  {
//                                                      text: '不良',
//                                                      value: '不良'
//                                                  },
//                                                  {
//                                                	  text: '装箱缺件',
//                                                	  value: '装箱缺件'
//                                                  },
//                                                  {
//                                                      text: '错件',
//                                                      value: '错件'
//                                                  },
//                                                  {
//                                                	  text: '设计缺漏',
//                                                	  value: '设计缺漏'
//                                                  },
//                                                  {
//                                                	  text: '反馈信息错误',
//                                                	  value: '反馈信息错误'
//                                                  },
//                                                  {
//                                                	  text: '废单',
//                                                	  value: '废单'
//                                                  },
//                                                  {
//                                                	  text: '咨询',
//                                                	  value: '咨询'
//                                                  },
//                                              ]
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'zrdep_8',
//                                        label: '责任部门',
//                                        labelWidth: '40%',
//                                        name: 'zrdep_8',
//                                        placeHolder: '请输入责任部门'
//                                    },
//                                    {
//                                        xtype: 'autoTextArea',
//                                        id: 'blyy_8',
//                                        label: '不良原因',
//                                        labelWidth: '40%',
//                                        name: 'blyy_8',
//                                        placeHolder: '请输入不良原因'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'qrr_8',
//                                        label: '确认人',
//                                        labelWidth: '40%',
//                                        name: 'qrr_8',
//                                        placeHolder: '确认人'
//                                    },
//                                    {
//                                        xtype: 'textfield',
//                                        id: 'blfl_8',
//                                        label: '不良分类',
//                                        labelWidth: '40%',
//                                        name: 'blfl_8',
//                                        placeHolder: '请输入不良分类'
//                                    },
//                                    {
//                                        xtype: 'textnumfield',
//                                        id: 'xs_8',
//                                        label: '项数',
//                                        labelWidth: '40%',
//                                        name: 'xs_8',
//                                        placeHolder: '请输入项数'
//                                    },
//                                    {
//                                        xtype: 'selectfield',
//                                        id: 'tz_8',
//                                        label: '梯种类别',
//                                        labelWidth: '40%',
//                                        name: 'tz_8',
//                                        placeHolder: '请选择梯种类别',
//                                        options: [
//                                                  {
//                                                      text: '请选择',
//                                                      value: ''
//                                                  },
//                                                  {
//                                                	  text: '国产标准',
//                                                	  value: '国产标准'
//                                                  },
//                                                  {
//                                                	  text: '国产非标',
//                                                	  value: '国产非标'
//                                                  },
//                                                  {
//                                                	  text: '进口梯',
//                                                	  value: '进口梯'
//                                                  },
//                                                  {
//                                                      text: '复合梯',
//                                                      value: '复合梯'
//                                                  }
//                                              ]
//                                    }
//                                ]
//                            },
//                        ]
//                    },
//                    {
//                        xtype: 'fieldset',
//                        title: '根本对策实施情况',
//                        items: [
//                            {
//                                xtype: 'textfield',
//                                label: '跟进部门',
//                                labelWidth: '40%',
//                                id: 'gb',
//                                placeHolder: '请输入跟进部门'
//                            },
//                            {
//                                xtype: 'textfield',
//                                label: '实施日期',
//                                labelWidth: '40%',
//                                id: 'implement_date',
//                                placeHolder: '请选择跟进部门日期',
//                                dateFormat: 'Y-m-d',
//                                readOnly:true,
//                                placeHolder: '点击设置时间',
//                                listeners:{
//                                	focus:function(){
//                                		initDate2('implement_date','实施日期');
//                                	}
//                                }
//                            },
//                            {
//                                xtype: 'textfield',
//                                label: '部门领导',
//                                labelWidth: '40%',
//                                id: 'gb_leader',
//                                placeHolder: '请输入跟进部门领导'
//                            },
//                            {
//                                xtype: 'textfield',
//                                label: '部门人员',
//                                labelWidth: '40%',
//                                id: 'gb_list',
//                                placeHolder: '请输入跟进部门人员'
//                            },
//                            {
//                                xtype: 'textfield',
//                                label: '发货单号',
//                                labelWidth: '40%',
//                                id: 'tldh',
//                                placeHolder: '请输入旧件退还发货单号'
//                            },
//                            {
//                                xtype: 'textfield',
//                                id: 'tldate',
//                                label: '发货时间',
//                                labelWidth: '40%',
//                                name: 'tldate',
//                                placeHolder: '请选择旧件退还发货时间',
//                                dateFormat: 'Y-m-d',
//                                readOnly:true,
//                                placeHolder: '点击设置时间',
//                                listeners:{
//                                	focus:function(){
//                                		initDate2('tldate','发货时间');
//                                	}
//                                }
//                            }
//                        ]
//                    },
                    {
                        xtype: 'fieldset',
                        hidden: true,
                        items: [
                                {
                                    xtype: 'textfield',
                                    id: 'conds',
                                    name: 'conds'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'userid',
                                    name: 'userid'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'type',
                                    name: 'type'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'username',
                                    name: 'username'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'node',
                                    name: 'node'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'ctime',
                                    name: 'ctime'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'piid',
                                    name: 'piid'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'processname',
                                    name: 'processname'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'curauthor',
                                    name: 'curauthor'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'dealmen',
                                    name: 'dealmen'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'ygbh',
                                    name: 'ygbh'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'form',
                                    name: 'form'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'arcpath',
                                    name: 'arcpath'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'arcdate',
                                    name: 'arcdate'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'idea',
                                    name: 'idea'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'endprocessdate',
                                    name: 'endprocessdate'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'audit_list',
                                    name: 'audit_list'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'taskid',
                                    name: 'taskid'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'mast',
                                    name: 'mast'
                                },
                                {
                                	xtype: 'textfield',
                                	id: 'firflow',
                                	name: 'firflow'
                                },
                                {
                                	xtype: 'textfield',
                                	id: 'pi_flag',
                                	name: 'pi_flag'
                                },
                                {
                                	xtype: 'textfield',
                                	id: 'cfg_id',
                                	name: 'cfg_id'
                                },
                                {
                                	xtype: 'textfield',
                                	id: 'createflag',
                                	name: 'createflag'
                                },
                                {
                                	xtype: 'textfield',
                                	id: 'ext1',
                                	name: 'ext1'
                                },
                                {
                                	xtype: 'textfield',
                                	id: 'getdep',
                                	name: 'getdep'
                                },
                                {
                                	xtype: 'textfield',
                                	id: 'getno',
                                	name: 'getno'
                                },
                                {
                                	xtype: 'textfield',
                                	id: 'qaleader',
                                	name: 'qaleader'
                                },
                                {
                                	xtype: 'textfield',
                                	id: 'sj_list',
                                	name: 'sj_list'
                                },
                                {
                                	xtype: 'textfield',
                                	id: 'nextprocessuser',
                                	name: 'nextprocessuser'
                                },
                                {
                                	xtype: 'textfield',
                                	id: 'fnextprocess',
                                	name: 'fnextprocess'
                                },
                            ]
                    }
                ]
            }
        ]
    }

});