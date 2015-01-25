Ext.define('CDTimer.controller.TimerButtons', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: { // Referenzen kreieren / laden
            btnStart : 'button#startButton',
            timerPanel : 'timerAll',
            btnSetTime: 'button#setTimeButton',
        },

        // Verschiedene Aktionen festlegen
        control: {
            'button[action=resetButton]':{
                tap:function(button){
                    var btnStart = this.getBtnStart();
                    CDTimer.app.getController("TimerCtrl").ctrlTimer("Zurücksetzen");
                    btnStart.show();
                }
            },
            'button[action=timerButton]':{
                tap:function(button){
                    CDTimer.app.getController("TimerCtrl").ctrlTimer("Starten");
                    button.hide();
                }
            },
            'button[action=setTime]':{
            	tap:function(button){
            		var button= this.getBtnSetTime();
            		var btnStart= this.getBtnStart();
                    
                    // Picker kreieren
            		var setMinutesTimer = Ext.create('Ext.Picker',{
                        doneButton: true,
                        cancelButton: false,
                        toolbar: {
                            ui: 'light',
                            title: 'Zeitwahl'
                        },
                        slots: [
     	                    {
     	                    	name:'setTime',
     	                    	title:'Zeitwahl',
     	                    	store: 'Times', // Zeiten laden
     	                    	value: 10,
     	                    	align: 'center',
     	                    }
     	                   ],
     	                  listeners: {
     	                     change: function(picker, value, eOpts) {
     	                         if(value.setTime === 1) {
                                    button.setText(value.setTime + " Minute")
                                } else {
                                    button.setText(value.setTime + " Minuten");
                                }
     	                         CDTimer.app.getController("TimerCtrl").ctrlTimer("Wählen",value.setTime);
     	                         btnStart.setText("Starten");
                                 btnStart.show();
     	                     }
     	                 }
     	                    
            		});
            		this.getTimerPanel().push(setMinutesTimer);
            	}
            }
        }
    },
    
});