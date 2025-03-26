'use strict';
// page01Controller.js: steuert page01-Verhalten

// JS-file für Controller-Funktionen
var meinText = "Null";

function page01Controller() {
    var self = this;
    var pepperCtrl;

    function myAnimatedSpeak() {
        meinText= "Hallo test";
        window.console.log("Text: " + meinText);
        pepperCtrl.animatedSpeak("Boy", meinText);
        //$.raiseALMemoryEvent("SBR/Test/Tablet/TextEventGirl", meinText);
    }


    self.init = function(pepperController) {
        pepperCtrl = pepperController;
        window.console.log("Page01Controller initialisiert");
        // Keine Callback-Funktionen bei Navi-Buttons registrieren
        $('#treffer').click(myAnimatedSpeak);
        
  
        
        // $('#gotoHauptauswahl').click(onGotoHauptauswahl);

        // timeout to switch to page02 (Amt)
        // setTimeout(onGotoAmt, 4000);

        // Hello-Text
        //pepperCtrl.animatedSpeak('Boy', "Herzlich Willkommen zu diesem Workshop!");

    };
}

// var myPepperController = new pepperController();
// var myPage01Controller = new page01Controller();

