Ext.define('HelcPAD.store.Remind.RemindListStore',{
	extend:'Ext.data.Store',
	requires:['HelcPAD.model.Remind.RemindListModel'],
	config:{
		model:'HelcPAD.model.Remind.RemindListModel',
	},
});