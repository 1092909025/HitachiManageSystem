/*
 * File: app/store/Service_Monitor_Elevator_List.js
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

Ext.define('HelcRemote.store.Service_Monitor_Elevator_List', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.data.Field'
    ],

    config: {
        storeId: 'Service_Monitor_Elevator_List',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
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
                name: 'elevator_type'
            }
        ]
    },

    onJsonpstoreBeforeLoad: function(store, operation, eOpts) {
        var url = 'http://' + remote.getCmsIP() + '/YL_SCDG/hitachi/rmonitor/getElevatorListByDomain.do';
        url = url + '?account_name=' + this.parm.account_name + '&domain_name=' + this.parm.domain_name;
        url = url.replace(/[#%\']/g, '');
        store.getProxy().setUrl(encodeURI(url));
        console.log(store.getProxy().getUrl());
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        // 售后->实时监控->区域->分公司->楼盘+合同->工号
        var me = this;

        if(global.isWorklight()) {
            me.parm = parm;
            me.load();
        } else {
            this.setData([
                {asset_num:'11G027404'},
                {asset_num:'11G027405'},
                {asset_num:'11G027406'},
                {asset_num:'11G027407'},
                {asset_num:'11G027404'},
                {asset_num:'11G027405'},
                {asset_num:'11G027406'},
                {asset_num:'11G027407'},
                {asset_num:'11G027404'},
                {asset_num:'11G027405'},
                {asset_num:'11G027406'},
                {asset_num:'11G027407'},
                {asset_num:'11G027404'},
                {asset_num:'11G027405'},
                {asset_num:'11G027406'},
                {asset_num:'11G027407'},
            ]);
            onSuccess();
        }
    }

});