
/* JavaScript content from app/store/Service_Monitor_Favorite_List.js in folder common */
/*
 * File: app/store/Service_Monitor_Favorite_List.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcRemote.store.Service_Monitor_Favorite_List', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.data.Field'
    ],

    config: {
        storeId: 'Service_Monitor_Favorite_List',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
                idProperty: 'asset_num',
                rootProperty: 'data'
            }
        },
        listeners: [
            {
                fn: 'onJsonpstoreBeforeLoad',
                event: 'beforeload'
            }
        ],
        fields: [
            {
                name: 'asset_num'
            },
            {
                name: 'agree_account_name'
            },
            {
                name: 'domain_name'
            },
            {
                name: 'asset_address'
            },
            {
                name: 'elevator_type'
            }
        ]
    },

    onJsonpstoreBeforeLoad: function(store, operation, eOpts) {
        var url = 'http://' + remote.getCmsIP() + '/YL_SCDG/hitachi/rmonitor/getElevatorFavoriteList.do';
        store.getProxy().setUrl(url);
    },

    loadDat: function(onSuccess, onFailure, parm) {
        // 售后->实时监控->收藏的电梯
        var me = this;

        if(global.isWorklight()) {
            me.parm = parm;
            me.onSuccess = onSuccess;
            me.load();
        } else {
            me.setData([{
                        agree_account_name: '广东省技监局',
                        asset_address: '广州黄埔大道西363号',
                        asset_num: '11G027404', // 113.343441,23.132678
                        domain_name: '省技监局',
                    }, {
                        agree_account_name: '广东省技监局',
                        asset_address: '广州黄埔大道西363号',
                        asset_num: '11G027405', // 113.343441,23.132678
                        domain_name: '省技监局',
                    }, {
                        agree_account_name: '广东省技监局',
                        asset_address: '广州黄埔大道西363号',
                        asset_num: '11G027406', // 113.343441,23.132678
                        domain_name: '省技监局',
                    }, {
                        agree_account_name: '广东省技监局',
                        asset_address: '广州黄埔大道西363号',
                        asset_num: '11G027407', // 113.343441,23.132678
                        domain_name: '省技监局',
                    },

                    {
                        agree_account_name: '珠海',
                        asset_address: '斗门县白蕉路万科魅力之城',
                        asset_num: '12G035081', // 113.333861,22.204954
                        domain_name: '万科魅力之城',
                    }, {
                        agree_account_name: '珠海',
                        asset_address: '斗门县白蕉路万科魅力之城',
                        asset_num: '12G035082', // 113.333861,22.204954
                        domain_name: '万科魅力之城',
                    }, {
                        agree_account_name: '珠海',
                        asset_address: '新光御景花园二期',
                        asset_num: '10G005939', // 113.526319,22.281284
                        domain_name: '新光御景花园二期',
                    }, {
                        agree_account_name: '珠海',
                        asset_address: '五洲花园C区',
                        asset_num: '11G019518', // 113.555828,22.285673
                        domain_name: '五洲花园C区',
                    }, {
                        agree_account_name: '珠海',
                        asset_address: '斗门县白蕉路万科魅力之城',
                        asset_num: '12G035081', // 113.333861,22.204954
                        domain_name: '万科魅力之城',
                    }, {
                        agree_account_name: '日立电梯',
                        asset_address: '广州科林路1号',
                        asset_num: '15G025552', // 113.445448,23.149385
                        domain_name: '科学城展厅',
                    }, {
                        agree_account_name: '日立电梯',
                        asset_address: '广州科林路1号',
                        asset_num: '15G025553', // 113.445448,23.149385
                        domain_name: '科学城展厅',
                    },

                    // 2016-5-17加入
                    {
                        agree_account_name: '广州',
                        asset_address: '万科新里程B9栋2号梯',
                        asset_num: '07G038888',
                        domain_name: '万科新里程',
                    }, {
                        agree_account_name: '广州',
                        asset_address: '万科新里程A1栋2号梯',
                        asset_num: '07G038853',
                        domain_name: '万科新里程',
                    }, {
                        agree_account_name: '北京',
                        asset_address: '合景领峰',
                        asset_num: '14G049396',
                        domain_name: '合景领峰',
                    }, {
                        agree_account_name: '北京',
                        asset_address: '万科四季花城38号楼4单元',
                        asset_num: '08G010906',
                        domain_name: '万科四季花城',
                    }, {
                        agree_account_name: '长沙',
                        asset_address: '万科金玉华府17栋1',
                        asset_num: '11G016783',
                        domain_name: '万科金玉华府',
                    }, {
                        agree_account_name: '长沙',
                        asset_address: '万科金域华府1栋北单元2#',
                        asset_num: '12G524257',
                        domain_name: '万科金域华府',
                    }, {
                        agree_account_name: '中山',
                        asset_address: '广东中山市万科城市风景友怡苑F栋1#梯',
                        asset_num: '10G024338',
                        domain_name: '万科城市风景',
                    }, {
                        agree_account_name: '湛江',
                        asset_address: '江南世家7栋2#',
                        asset_num: '12G028492',
                        domain_name: '江南世家',
                    }, {
                        agree_account_name: '深圳',
                        asset_address: '万科第五园6栋2#梯',
                        asset_num: '10G005424',
                        domain_name: '万科第五园',
                    }, {
                        agree_account_name: '深圳',
                        asset_address: '罗湖区合正荣悦府1C栋3#梯',
                        asset_num: '11G084709',
                        domain_name: '合正荣悦府',
                    }, {
                        agree_account_name: '四川',
                        asset_address: '保利春天花语10号楼2#梯',
                        asset_num: '14G006006',
                        domain_name: '保利春天花语',
                    }, {
                        agree_account_name: '四川',
                        asset_address: '富力桃园11栋2#',
                        asset_num: '14G047384',
                        domain_name: '富力桃园',
                    }, {
                        agree_account_name: '上海',
                        asset_address: '风荷丽景二期3号楼2号梯',
                        asset_num: '11G064042',
                        domain_name: '风荷丽景',
                    }, {
                        agree_account_name: '上海',
                        asset_address: '嘉定区宝翔路方菊路10号',
                        asset_num: '12G511668',
                        domain_name: '方菊路10号',
                    }, {
                        agree_account_name: '天津',
                        asset_address: '万科东疆港12#1NO.1',
                        asset_num: '12G509503',
                        domain_name: '万科东疆港',
                    }, {
                        agree_account_name: '天津',
                        asset_address: '万科盈润园',
                        asset_num: '10G049564',
                        domain_name: '万科盈润园',
                    }, {
                        agree_account_name: '杭州',
                        asset_address: '万科西溪蝶园2-4',
                        asset_num: '08G023152',
                        domain_name: '万科西溪蝶园',
                    }, {
                        agree_account_name: '宁波',
                        asset_address: '万科金色水岸3栋9单元-2#',
                        asset_num: '07G019430',
                        domain_name: '万科金色水岸',
                    }, {
                        agree_account_name: '东莞',
                        asset_address: '万科紫台16栋2号梯客梯',
                        asset_num: '11G076620',
                        domain_name: '万科紫台',
                    },

            ]);
            onSuccess();
        }
    }

});