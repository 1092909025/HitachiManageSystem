
/* JavaScript content from app/store/Common_Company_List.js in folder common */
/*
 * File: app/store/Common_Company_List.js
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

Ext.define('HelcRemote.store.Common_Company_List', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.data.Field'
    ],

    config: {
        storeId: 'Common_Company_List',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
                idProperty: 'company_code',
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
                name: 'company_code'
            },
            {
                name: 'sort_name'
            }
        ]
    },

    onJsonpstoreBeforeLoad: function(store, operation, eOpts) {
        var url = 'http://' + remote.getCmsIP() + '/YL_SCDG/hitachi/rmonitor/getBranchListByArea.do';
        if(this.parm!=='') {
            url = url + '?area=' + this.parm;
        }
        store.getProxy().setUrl(url);
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        // 售后->实时监控->区域->分公司
        var me = this;

        switch(parm) {
            case '东区':
            case '华东':
            case 'east':
                parm = 'huadong';
                break;

            case '南区':
            case '华南':
            case 'south':
                parm = 'huanan';
                break;

            case '西区':
            case '华西':
            case 'west':
                parm = 'huaxi';
                break;

            case '北区':
            case '华北':
            case 'north':
                parm = 'huabei';
                break;
        }

        if(global.isWorklight()) {
            me.parm = parm;
            me.load();
        } else {
            switch(parm) {
                case 'huanan':
                    this.setData([
                        {area:'huanan',	sort_name:'郴州司',	company_code:'chenzhou'},
                        {area:'huanan',	sort_name:'东莞司',	company_code:'dongguan'},
                        {area:'huanan',	sort_name:'佛山司',	company_code:'foshan'},
                        {area:'huanan',	sort_name:'福建司',	company_code:'fujian'},
                        {area:'huanan',	sort_name:'赣州司',	company_code:'ganzhou'},
                        {area:'huanan',	sort_name:'广西司',	company_code:'guangxi'},
                        {area:'huanan',	sort_name:'广州司',	company_code:'guangzhou'},
                        {area:'huanan',	sort_name:'海南司',	company_code:'hainan'},
                        {area:'huanan',	sort_name:'衡阳司',	company_code:'hengyang'},
                        {area:'huanan',	sort_name:'湖北司',	company_code:'hubei'},
                        {area:'huanan',	sort_name:'湖南司',	company_code:'hunan'},
                        {area:'huanan',	sort_name:'惠州司',	company_code:'huizhou'},
                        {area:'huanan',	sort_name:'江西司',	company_code:'jiangxi'},
                        {area:'huanan',	sort_name:'柳州司',	company_code:'liuzhou'},
                        {area:'huanan',	sort_name:'南沙司',	company_code:'nansha'},
                        {area:'huanan',	sort_name:'莆田司',	company_code:'putian'},
                        {area:'huanan',	sort_name:'泉州司',	company_code:'quanzhou'},
                        {area:'huanan',	sort_name:'三亚司',	company_code:'sanya'},
                        {area:'huanan',	sort_name:'汕头司',	company_code:'shantou'},
                        {area:'huanan',	sort_name:'深分司',	company_code:'shenfen'},
                        {area:'huanan',	sort_name:'深工司',	company_code:'shengong'},
                        {area:'huanan',	sort_name:'深营司',	company_code:'shenying'},
                        {area:'huanan',	sort_name:'襄阳司',	company_code:'xiangyang'},
                        {area:'huanan',	sort_name:'宜昌司',	company_code:'yichang'},
                        {area:'huanan',	sort_name:'增城司',	company_code:'zengcheng'},
                        {area:'huanan',	sort_name:'湛江司',	company_code:'zhanjiang'},
                        {area:'huanan',	sort_name:'珠海司',	company_code:'zhuhai'},
                    ]);
                    break;
                case 'huabei':
                    this.setData([
                        {area:'huabei',	sort_name:'安阳司',	company_code:'anyang'},
                        {area:'huabei',	sort_name:'北服司',	company_code:'beifu'},
                        {area:'huabei',	sort_name:'北工司',	company_code:'beigong'},
                        {area:'huabei',	sort_name:'北营司',	company_code:'beiying'},
                        {area:'huabei',	sort_name:'河北司',	company_code:'hebei'},
                        {area:'huabei',	sort_name:'河南司',	company_code:'henan'},
                        {area:'huabei',	sort_name:'黑龙江司',	company_code:'heilongjiang'},
                        {area:'huabei',	sort_name:'吉工司',	company_code:'jigong'},
                        {area:'huabei',	sort_name:'锦州司',	company_code:'jinzhou'},
                        {area:'huabei',	sort_name:'辽宁司',	company_code:'liaoning'},
                        {area:'huabei',	sort_name:'洛阳司',	company_code:'luoyang'},
                        {area:'huabei',	sort_name:'内蒙古司',	company_code:'neimenggu'},
                        {area:'huabei',	sort_name:'山工司',	company_code:'shangong'},
                        {area:'huabei',	sort_name:'唐山司',	company_code:'tangshan'},
                        {area:'huabei',	sort_name:'天工司',	company_code:'tiangong'},
                    ]);
                     break;
                case 'huadong':
                    this.setData([
                        {area:'huadong',	sort_name:'安徽司',	company_code:'anhui'},
                        {area:'huadong',	sort_name:'安庆司',	company_code:'anqing'},
                        {area:'huadong',	sort_name:'蚌埠司',	company_code:'bangbu'},
                        {area:'huadong',	sort_name:'杭工司',	company_code:'hanggong'},
                        {area:'huadong',	sort_name:'淮安司',	company_code:'huaian'},
                        {area:'huadong',	sort_name:'济宁司',	company_code:'jining'},
                        {area:'huadong',	sort_name:'江苏司',	company_code:'jiangsu'},
                        {area:'huadong',	sort_name:'临沂司',	company_code:'linyi'},
                        {area:'huadong',	sort_name:'南通司',	company_code:'nantong'},
                        {area:'huadong',	sort_name:'青岛司',	company_code:'qingdao'},
                        {area:'huadong',	sort_name:'山东司',	company_code:'shandong'},
                        {area:'huadong',	sort_name:'上分司',	company_code:'shangfen'},
                        {area:'huadong',	sort_name:'上工司',	company_code:'shanggong'},
                        {area:'huadong',	sort_name:'上营司',	company_code:'shangying'},
                        {area:'huadong',	sort_name:'苏州司',	company_code:'suzhou'},
                        {area:'huadong',	sort_name:'潍坊司',	company_code:'weifang'},
                        {area:'huadong',	sort_name:'芜湖司',	company_code:'wuhu'},
                        {area:'huadong',	sort_name:'烟台司',	company_code:'yantai'},
                        {area:'huadong',	sort_name:'盐城司',	company_code:'yancheng'},
                        {area:'huadong',	sort_name:'扬州司',	company_code:'yangzhou'},
                    ]);
                     break;
                case 'huaxi':
                    this.setData([
                        {area:'huaxi',	sort_name:'川营司',	company_code:'chuanying'},
                        {area:'huaxi',	sort_name:'大理司',	company_code:'dali'},
                        {area:'huaxi',	sort_name:'甘肃司',	company_code:'gansu'},
                        {area:'huaxi',	sort_name:'贵州司',	company_code:'guizhou'},
                        {area:'huaxi',	sort_name:'绵阳司',	company_code:'mianyang'},
                        {area:'huaxi',	sort_name:'南充司',	company_code:'nanchong'},
                        {area:'huaxi',	sort_name:'宁夏司',	company_code:'ningxia'},
                        {area:'huaxi',	sort_name:'青海司',	company_code:'qinghai'},
                        {area:'huaxi',	sort_name:'陕西司',	company_code:'shanxi'},
                        {area:'huaxi',	sort_name:'新疆司',	company_code:'xinjiang'},
                        {area:'huaxi',	sort_name:'云南司',	company_code:'yunnan'},
                        {area:'huaxi',	sort_name:'重营司',	company_code:'zhongying'},
                        {area:'huaxi',	sort_name:'自贡司',	company_code:'zigong'},
                        {area:'huaxi',	sort_name:'遵义司',	company_code:'zunyi'},
                    ]);
                     break;
            }
            onSuccess();
        }
    }

});