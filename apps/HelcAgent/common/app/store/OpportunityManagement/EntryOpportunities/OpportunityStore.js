Ext.define('HelcAgent.store.OpportunityManagement.EntryOpportunities.OpportunityStore',{
	extend:'Ext.data.Store',
	requires:'HelcAgent.model.OpportunityManagement.EntryOpportunities.OpportunityModel',
	config:{
		model:'HelcAgent.model.OpportunityManagement.EntryOpportunities.OpportunityModel'
	}
});