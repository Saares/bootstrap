Ext.define('CDTimer.view.TimerConf', {
    extend: 'Ext.Panel',
    xtype: 'timer',
    id:'Timer',
    config: {
        title: 'Countdown Timer',
        iconCls: 'time',
        layout: 'fit',
        styleHtmlContent:true,
    	styleHtmlCls:'timer',
        items: [ 
            {
            	xtype:'button',
                ui: 'action',
            	text:'10 Minuten',
            	docked:'top',
            	action: 'setTime',
            	itemId: 'setTimeButton',
            },
            {
            	xtype: 'button',
            	text: 'Starten',
            	docked:'top',
            	action :'timerButton',
            	itemId:'startButton',
	        },
	        {
	        	xtype:'button',
	        	text: 'Zurücksetzen',
	        	action: 'resetButton',
	        	docked: 'top',
                itemId: 'resetButton',
                hidden: true,
	        },
	        {
	        	xtype:'audio', // Funktioniert nicht!?!?!
	        	hidden:true,
	        	url:'',
	        	itemId:'timeup',
	        },
		    ],
		    
    },
    
    
});