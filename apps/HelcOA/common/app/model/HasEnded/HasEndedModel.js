Ext.define('HelcOA.model.HasEnded.HasEndedModel',{
	extend:'Ext.data.Model',
	config:{
		fields:['gdtime','createdate','app_name','processname','subject',
		        'color','class','icon','piid','task_id','endstauts']
	}
});