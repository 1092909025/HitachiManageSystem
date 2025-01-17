
/* JavaScript content from app/view/techParams/TechParams_Search_V.js in folder common */
Ext.define('HelcPDA.view.techParams.TechParams_Search_V', {
	id:'techParams_Search_V',
	extend: 'Ext.Container',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.form.Panel'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '技术附页',
                items: [
                    {
                        xtype: 'button',
                        id:'backToMenus',
                        ui: 'back',
                        text: '主页'
                    },
                    ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'searchfield',
                        width: '76%',
                        placeHolder: '请输入精确的电梯工号...',
                        id:'techParams_GH'
                    },
                    {
                        xtype: 'button',
                        width: '20',
                        iconCls: 'search',
                        text: '查询',
                        id:'btn_techParams_Search'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
            {
            	xtype: 'formpanel',
            	id: 'formpanel_FT',
                flex: 1,
                height: '100%',
                items: [
		                    {
		                    	xtype: 'fieldset',
		                        items: [
		                            {
		                                xtype: 'textfield',
		                                id: 'tps_ELEVATOR_NUMBER_FT',
		                                label: '工号',
		                                labelWidth: '50%',
		                                readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_FTXH',
		                            	label: '扶梯梯种',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_GCKD',
		                            	label: '公称宽度',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_JD',
		                            	label: '角度',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_FTTSGD',
		                            	label: '扶梯提升高度',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_SYHJ',
		                            	label: '使用环境',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_FTKZFS',
		                            	label: '扶梯控制方式',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_FTSPJS',
		                            	label: '扶梯水平级数',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_EDSD',
		                            	label: '额定速度',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_FHFS',
		                            	label: '发货方式',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_TJLX',
		                            	label: '梯级类型',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_SCLX',
		                            	label: '梳齿类型',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_FSDYS',
		                            	label: '扶手带颜色',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_QBLX',
		                            	label: '裙板类型',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_JSP',
		                            	label: '警示牌',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_LCBYCQK',
		                            	label: '楼层板延长情况',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_NGBLX',
		                            	label: '内盖板类型',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_NGBHD',
		                            	label: '内盖板厚度',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_WGBLX',
		                            	label: '外盖板类型',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_WGBHD',
		                            	label: '外盖板厚度',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_FTQTPZ',
		                            	label: '扶梯其他配置',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_ZJZCS',
		                            	label: '中间支承数',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_FTDKKD',
		                            	label: '扶梯底坑宽度',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_FTDKCD',
		                            	label: '扶梯底坑长度',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_FTDKSD',
		                            	label: '扶梯底坑深度',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_FHGN',
		                            	label: '防寒功能',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            ]
		                    },
		                    {
		                    	xtype: 'fieldset',
		                    	title: '中间支承距离',
		                        items: [
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_ZJZCJLM1',
		                            	label: 'M1',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_ZJZCJLM2',
		                            	label: 'M2',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_ZJZCJLM3',
		                            	label: 'M3',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_ZJZCJLM4',
		                            	label: 'M4',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_ZJZCJLM5',
		                            	label: 'M5',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_ZJZCJLM5SL',
		                            	label: 'M5数量',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            ]
		                    },
		                    {
		                    	xtype: 'fieldset',
		                    	title: '外盖板防爬',
		                        items: [
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_WGBFPZZSL',
		                            	label: '装置数量',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            {
		                            	xtype: 'textfield',
		                            	id: 'tps_WGBFPZZ',
		                            	label: '防爬装置',
		                            	labelWidth: '50%',
		                            	readOnly: true
		                            },
		                            ]
		                    }
	                    ]
            },
            {
            	xtype: 'formpanel',
            	id: 'formpanel_ZT',
                flex: 1,
                height: '100%',
                items: [
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'tps_ELEVATOR_NUMBER_ZT',
                                label: '工号',
                                labelWidth: '50%',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                id: 'tps_DTXH',
                                label: '直梯梯种',
                                labelWidth: '50%',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                id: 'tps_FWFS',
                                label: '服务方式',
                                labelWidth: '50%',
                                readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_ZZ',
                            	label: '载重',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_SD',
                            	label: '速度',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_KMS',
                            	label: '开门数',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_C',
                            	label: '层',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
		                        xtype: 'panel',
		                        layout: {
		                            type: 'hbox',
		                            align: 'center'
		                        },
		                        items: [
		                            {
		                                xtype: 'spacer'
		                            },
		                            {
		                            	xtype: 'button',
		                                id: 'show_WLLC',
		                                text: '显示物理楼层',
		                                margin: '15 0',
		                                width: '90%',
		                            },
		                            {
		                                xtype: 'spacer'
		                            }
		                        ]
		                    },
                            {
                                xtype: 'container',
                                id: 'C_list',
                                style: 'background-color:#fff；',
                                items: [
                                    {
                                        xtype: 'list',
                                        id: 'TechParamsList',
                                        store: 'TechParamsStore',
                                        height: 200,
                                        itemTpl: [
                                             '<div style="width:100%; margin:0; padding:0;">',
                                             '    <h1 style="float:left; margin:0; padding:0;">物理楼层&nbsp;:&nbsp;&nbsp;{WLLC}</h1>',
                                             '    <div style="float:right;margin:0;">',
                                             '    </div>',
                                             '</div>'
                                        ]
                                    },
                                ]
                            },
                            {
                                xtype: 'textfield',
                                id: 'tps_DZFZ',
                                label: '对重放置',
                                labelWidth: '50%',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                id: 'tps_DCGD',
                                label: '顶层净高',
                                labelWidth: '50%',
                                readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_DKSD',
                            	label: '底坑净深',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_DTTSGD',
                            	label: '直梯提升高度',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JDZG',
                            	label: '井道总高',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JNKD',
                            	label: '轿内宽度',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JNSD',
                            	label: '轿内深度',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_KMKD',
                            	label: '开门宽度',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_KMGD',
                            	label: '开门高度',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_Z',
                            	label: '站数',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_M',
                            	label: '门数',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            
                            ]
                    },
                    {
                    	xtype: 'fieldset',
                    	title: '临梯',
                        items: [
							{
								xtype: 'textfield',
								id: 'tps_LTDCJG',
								label: '顶层净高',
								labelWidth: '50%',
								readOnly: true
							},
							{
								xtype: 'textfield',
								id: 'tps_LTDKJS',
								label: '底坑净深',
								labelWidth: '50%',
								readOnly: true
							},
							{
								xtype: 'textfield',
								id: 'tps_LTTSGD',
								label: '提升高度',
								labelWidth: '50%',
								readOnly: true
							},
							{
								xtype: 'textfield',
								id: 'tps_LTCS',
								label: '层数',
								labelWidth: '50%',
								readOnly: true
							},
							{
								xtype: 'textfield',
								id: 'tps_LTZS',
								label: '站数',
								labelWidth: '50%',
								readOnly: true
							},
							{
								xtype: 'textfield',
								id: 'tps_LTMS',
								label: '门数',
								labelWidth: '50%',
								readOnly: true
							},
							{
								xtype: 'textfield',
								id: 'tps_LTJDZG',
								label: '井道总高',
								labelWidth: '50%',
								readOnly: true
							},
                                ]
                    },
                            
                    {
                    	xtype: 'fieldset',
                    	title: ' ',
                        items: [
                            {
                            	xtype: 'textfield',
                            	id: 'tps_TSJXZSSM',
                            	label: '特殊轿厢装饰',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JXTH',
                            	label: '轿厢天花',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_THGD',
                            	label: '天花高度',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_QBCZB',
                            	label: '前壁/操纵壁',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_MDHL',
                            	label: '门灯横梁',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_CQB',
                            	label: '侧前壁',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_CZB',
                            	label: '侧中壁',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_CHB',
                            	label: '侧后壁',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_CSB',
                            	label: '侧上壁',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_CBFJ',
                            	label: '侧壁附加',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_CB',
                            	label: '侧壁',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_HB',
                            	label: '后壁',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_FSLS',
                            	label: '扶手列数',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'autoTextArea',
                            	id: 'tps_FS',
                            	label: '扶手',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JM',
                            	label: '轿门',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_DB',
                            	label: '地板',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_YLDBHD',
                            	label: '预留地板厚度',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'autoTextArea',
                            	id: 'tps_CZX',
                            	label: '操纵箱',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_FCZX',
                            	label: '副操纵箱',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_CZXAN',
                            	label: '操纵箱按钮',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JNMP',
                            	label: '轿内铭牌',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JNZCQ',
                            	label: '轿内指层器',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JNZCQWZ',
                            	label: '轿内指层器位置',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JNZCQ2',
                            	label: '轿内指层器2',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JNZCQ2WZ',
                            	label: '轿内指层器2位置',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_GJAZWZ',
                            	label: '挂镜安装位置',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_CJRCZX',
                            	label: '残疾人操纵箱',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_CJRCZXAN',
                            	label: '残疾人操纵箱按钮',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_YLZSZL',
                            	label: '预留装饰重量',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_YLTWICKJK',
                            	label: '预留厅外IC卡接口',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_TWDKQKKFZ',
                            	label: '厅外读卡器开孔负责',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_TWICKKKSM',
                            	label: '厅外IC卡开孔说明',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_TSICKSM',
                            	label: '特殊IC卡说明',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_AQMTG',
                            	label: '安全门提供',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_TWSM',
                            	label: '厅外说明',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_GNSM',
                            	label: '功能说明',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_ZTQTPZ',
                            	label: '直梯其他配置',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_FI100QGLKZGN',
//                            	label: 'F1-100群管理控制功能',
                            	label: 'F1-100',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_FI10QGLKZGN',
//                            	label: 'F1-10群管理控制功能',
                            	label: 'F1-10',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_FI16ZNXQGLKZGN',
//                            	label: 'F1-16智能型群管理控制功能',
                            	label: 'F1-16',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_FI320ZNXXXQGLKZGN',
//                            	label: 'F1-320智能学习型群管理控制功能',
                            	label: 'F1-320',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_FI340GZNXXXQGLKZGN',
//                            	label: 'F1-340G智能学习型群管理控制功能',
                            	label: 'F1-340G',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_FI600ZNXXXQGLKZGN',
//                            	label: 'F1-600智能学习型群管理控制功能',
                            	label: 'F1-600',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_FIAGXXQGLKZGN',
//                            	label: 'F1-A高效型群管理控制功能',
                            	label: 'F1-A',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_TDZDPC',
                            	label: '停电自动平层',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_XFYZY',
                            	label: '消防员专用',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_QJB_MEMO',
                            	label: '前壁操纵壁备注',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_MDHL_MEMO',
                            	label: '门灯横梁备注',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JM_MEMO',
                            	label: '轿门备注',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_DB_MEMO',
                            	label: '地板备注',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_CZX_MEMO',
                            	label: '操纵箱备注',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_CJRCZX_MEMO',
                            	label: '残疾人操纵箱备注',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'tps_JNZCQ_MEMO',
                            	label: '轿内指层器备注',
                            	labelWidth: '50%',
                            	readOnly: true
                            },
                        ]
                    },
                    
                    
                    
                    ],
            }
	]},
          
});