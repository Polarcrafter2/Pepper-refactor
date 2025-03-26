'use strict';
// page01Controller.js: steuert page01-Verhalten

function page01Controller() {
    var self = this;
    var pepperCtrl;  

    function onGotoHauptauswahl() {
        // wird aufgerufen, wenn "Home (Pseudo-Page)"-Button geklickt wird
         window.console.log("Page01Controller: Jetzt auf Page02 (Amt) wechseln");
         window.location.href = "page02.html#page02?init=1";
         // window.location.href = "page02.html";
    };
    
    function onGotoIndex() {
        // wird aufgerufen, wenn "Home"-Button in Setup geklickt wird
        window.console.log("Page01Controller: Jetzt auf Index-Page (Intro) wechseln");
        pepperCtrl.shutUpAndContinue();
        setTimeout(function() {pepperCtrl.playSound(5)},300)
         $.mobile.changePage('#index', {
            transition : 'slidefade'
        });
    };
    
    function onGotoSetup() {
        // wird aufgerufen, wenn "Setup (Pseudo-Page)"-Button geklickt wird
        window.console.log("Page01Controller: Jetzt auf Setup-Page (Volume/Mute) wechseln");
        pepperCtrl.shutUpAndContinue();
        setTimeout(function() {pepperCtrl.playSound(5)},300)
        $.mobile.changePage('#setup', {
            transition : 'slidefade'
        });
    };
    
    function mySpeak() {
        var meinText= "Hallo test"; 
        window.console.log("Text: " + meinText);
        setTimeout(function() {pepperCtrl.sayGesture("^run(animations/Stand/Waiting/Robot_1)",
        "Wahauh, Hammer! * Ich bin ehrlich beeindruckt. Du hast dieses Memory-Spiel wirklich\
        bis zu Ende durchgespielt. Dein Gedächtnis ist ja fast so gut wie meins.")}, 550);
        // pepperCtrl.animatedSpeak("Boy", meinText);
    }

    function volPlus() {
        pepperCtrl.volPlus();
    }
    
    function volMinus() {
        pepperCtrl.volMinus();
    }
    
    function setMute() {
        pepperCtrl.playSound(0);        // pling
        pepperCtrl.setMute();
        window.console.log("setMute: change bitmap");
        $('#unmuteImg').replaceWith("<img id='unmuteImg' src='bilder/unmute.png' width='70px'>");
        $('#muteImg').replaceWith("<img id='muteImg' src='bilder/muteGrey.png' width='70px'>");
    }
        
    function setUnmute() {
        pepperCtrl.setUnmute();
        pepperCtrl.playSound(0);        // pling
        window.console.log("setUnmute: change bitmap");
        $('#muteImg').replaceWith("<img id='muteImg' src='bilder/mute.png' width='70px'>");
        $('#unmuteImg').replaceWith("<img id='unmuteImg' src='bilder/unmuteGrey.png' width='70px'>");
    }
        
    self.init = function(pepperController) {
        pepperCtrl = pepperController;
        window.console.log("page01Controller initialisiert");

        // Weiter-Button
        $('#gotoHauptauswahl').click(onGotoHauptauswahl);
        // Für Exit aus Setup-Seite: nein, lieber auf index.html bleiben
        // $('#gotoPage02').click(onGotoHauptauswahl);
        $('#gotoPageIndex').click(onGotoIndex);
        $('#gotoPageSetup').click(onGotoSetup);
        
        // Test
        $('#speaker').click(mySpeak); 
        // Volume Control       
        $('#volPlus').click(volPlus);
        $('#volMinus').click(volMinus);
        $('#mute').click(setMute);
        $('#unmute').click(setUnmute);
        
        setUnmute() // default: set unmute beim Initialisieren dieser Seite!!

        // timeout to switch to page02 (Amt)
        // setTimeout(onGotoHauptauswahl, 4000);        

       pepperCtrl.shutUpAndContinue();
       setTimeout(function() {pepperCtrl.animatedSpeak('Boy', "Herzlich Willkommen zu diesem Workshop!     \
        Mein Name ist Pepper, und ich freue mich, daß Sie hergekommen sind, um      \
        sich über das Digitalisierungsprojekt V S digital zu informieren.")}, 800);
    };
}

var myPepperController = new pepperController();
var myPage01Controller = new page01Controller();

function pageFullyLoaded(e) {
    // window.console.log("Initializing Controllers");
    myPepperController.init();
    myPage01Controller.init(myPepperController);
}

window.console.log("page01Controller.js gestartet");
window.addEventListener("load", pageFullyLoaded, false);



