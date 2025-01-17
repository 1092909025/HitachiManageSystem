
/* JavaScript content from app/store/Service_BranchMap_Region.js in folder common */
/*
 * File: app/store/Service_BranchMap_Region.js
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

Ext.define('HelcRemote.store.Service_BranchMap_Region', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.data.Field'
    ],

    config: {
        storeId: 'Service_BranchMap_Region',
        proxy: {
            type: 'jsonp',
            callbackKey: 'jsonpCallback',
            reader: {
                type: 'json',
                idProperty: 'maintainCode',
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
                name: 'cityCode'
            },
            {
                name: 'cityName'
            },
            {
                name: 'maintainName'
            },
            {
                name: 'maintainAddress'
            },
            {
                name: 'peopleNum'
            },
            {
                name: 'maintainCounts'
            },
            {
                name: 'maintainNum'
            },
            {
                name: 'type'
            },
            {
                name: 'maintainCode'
            },
            {
                name: 'lat'
            },
            {
                name: 'lng'
            }
        ]
    },

    onJsonpstoreBeforeLoad: function(store, operation, eOpts) {
        var url = 'http://' + remote.getCmsIP() + '/YL_SCDG/hitachi/maintainStation/getMaintainStations.do';
        if(this.parm!=='') {
            url = url + '?companyCode=' + this.parm;
        }
        store.getProxy().setUrl(url);
    },

    loadDat: function(onSuccess, onFailure, parm) {
        // 售后->区域地图->分公司
        var me = this;

        if(global.isWorklight()) {
            me.parm = parm;
            me.load();
        } else {
            this.setData([
                {
                    text: '东山区',
                    code: 'dongshan',
                },
                {
                    text: '荔湾区',
                    code: 'liwan',
                },
                {
                    text: '海珠区',
                    code: 'haizhu',
                },
                {
                    text: '天河区',
                    code: 'tianhe',
                }
            ]);

            onSuccess();
        }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {

    }

});