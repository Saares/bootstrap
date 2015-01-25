// Globale Variablen anlegen:

var value = 10; // Anfangswert 10 Minuten
var timer = value * 60000; // Wegen Millisekunden multiplizieren
var start = timer; // Startwert des Timers
 
Ext.define("CDTimer.controller.TimerCtrl",{
    extend: 'Ext.app.Controller',
 
    config: {
        statics: { // Aktualisierte Funktion je 1 Millisekunde definieren
            updateTimer: undefined,
        },
        refs: { // Referenzen und getter etc
            btnReset: 'button#resetButton',
            timerContainer : '#Timer',
            btnStart: 'button#startButton',
            audTimeup: 'audio#timeup',
        },
    },
    
    // Handler einbauen, Funktionalität
    ctrlTimer: function(event, value_min) {
    	var btnStart = this.getBtnStart();
    	var audTimeup = this.getAudTimeup();
        var op = event, tempTime;
 
        function newTime(panel){
            var zeitJetzt = Date.now(),
            differenz = zeitJetzt - tempTime;
            tempTime = zeitJetzt;
            timer -= differenz;
            if(timer>0) {
                
                // Neue Zeit aktualisieren:

                var rest;
                var seconds = timer / 1000;
                var minutes = Math.floor(seconds / 60);
                seconds     = Math.floor(seconds % 60);
     
                 rest  = minutes;
                 if(seconds < 10) {
                    rest += ":0" + seconds;
                 } else {
                    rest += ":" + seconds;
                 }
     
                panel.setHtml(rest);
            } else {
                panel.setHtml("Zeit abgelaufen!");
            var btnReset =this.getBtnReset();
                btnReset.hide();
                clearInterval(updateTimer);
                updateTimer = undefined;
                btnStart.setText("Starten");
                btnStart.show();
                timer=start;
                audTimeup.toggle();
            };
        }
 
        // Operationen

        if(op==="Wählen") {
            if(self.updateTimer!=undefined) {
                clearInterval(updateTimer);
                updateTimer = undefined;
            }
            value=value_min;
            start=value*60000;  
            timer=start;
            this.getTimerContainer().setHtml(value+":00");
        };

        ////////// ---------

        if(op==="Starten") {
            var btnReset =this.getBtnReset();
            btnReset.show();
        	tempTime = Date.now();
        	if (self.updateTimer != undefined) { 
                clearInterval(self.updateTimer); 
            }
            var timerCtrl = this; // Für Funktion unten
        	updateTimer = setInterval(function() { // 1 Milliesekunde aktualiseren
                newTime(timerCtrl.getTimerContainer());
            }, 1);
        };

        ////////// ---------

        if(op==="Zurücksetzen") {
            var btnReset =this.getBtnReset();
            btnReset.hide();
        	timer = start;
        	if(self.updateTimer!=undefined) {
        		clearInterval(updateTimer);
        		updateTimer = undefined;
        	}
        	this.getTimerContainer().setHtml(value+":00");
        };
        
        
        } 
 
    });