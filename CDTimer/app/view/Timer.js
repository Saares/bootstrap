Ext.define('CDTimer.view.Timer',{
	extend:'Ext.NavigationView',
	xtype:'timerAll',
	config: {
		title: 'Countdown Timer',
		iconCls:'time',
		styleHtmlContent:true,
		styleHtmlCls:'timer',
		items: [
		        {
		        	xtype: 'timer',
		        }
		]
	}
})