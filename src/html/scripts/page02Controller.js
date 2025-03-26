'use strict';
// JS-file für Controller-Funktionen aller Amts-Pages

function page02Controller() {
    var self = this;
    var pepperCtrl;

    function speakIntro(isFirst){
        pepperCtrl.shutUpAndContinue();
        if( isFirst == true) {
            setTimeout(function() { pepperCtrl.animatedSpeak("Boy", "Ich bin der Prototyp eines Info-Törminells. \
               Ich kann Bürger bei ihrem Besuch bei einer Behörde unterstützen, \
               zum Beispiel auf unserem Bürgeramt.")}, 450);
               
        }          
        setTimeout(function() { pepperCtrl.animatedSpeak("Boy", "Hier ist die Hauptauswahl.\
        Ich kann Sie beim Besuch des Bürgeramtes beraten. Sie können etwas mit mir spielen \
        oder sich auch über die Hochschule hier am Ort informieren.")},500);
        setTimeout(function() {pepperCtrl.sayGesture("^start(animations/Stand/Gestures/ShowTablet_1)",
        "Klicken Sie zur Auswahl einfach auf eine der Battens * hier auf meinem Täblet!")}, 550);                
    }

    function onGotoPage02() {
        // wird aufgerufen, wenn "Hauptauswahl"-Button geklickt wird
        window.console.log("page02Controller: Jetzt auf Page02 wechseln");
        // hier wird auf neue data-role page gewechselt
        speakIntro(false);
        $.mobile.changePage('#page02', {
            transition : 'slidefade'
        });
    };
    
    function onGotoIndex() {// neue HTML-Seite index.hmtl(aber auch mit jQM)!
        // aufgerufen in footer bei "Home"
        window.console.log("page02Controller: Jetzt index.html starten");
        // hier wird auf neue HTML-Seite gewecheslt
        window.location.href = "index.html";
    };

    function onGotoBürgeramt() {
        // wird aufgerufen, wenn "Bürgeramt"-Button geklickt wird -> Bürgeramt-Übergang p111
        window.console.log("page02Controller: Jetzt auf Page11 (BürgeramtAuswahl) wechseln");
        pepperCtrl.shutUpAndContinue();
        setTimeout(function() {pepperCtrl.playSound(5)},300);
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy","Gehören Sie auch zu den Bürgern, für die jeder \
        Behördengang fast ein Alptraum ist? Das muß nicht sein! Ich bin hier, um Sie nach Kräften \
        zu unterstützen. Klicken Sie einfach auf weiter!")},500);
        $.mobile.changePage('#page11', {
            transition : 'slidefade'
        });
    };
    function onGotoPage111() {// Bürgeramt-Auswahl
        // aufgerufen in page11 (Bürgeramt-Übergang) bei "Weiter"
        window.console.log("page02Controller: Jetzt auf Page111 wechseln");
        pepperCtrl.shutUpAndContinue();
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy","Für eine erste Auswahl muß ich wissen, ob Sie neu \
        in unsere schöne Stadt Villingen-Schwenningen gezogen sind, oder ob Sie schon länger \
        hier wohnhaft sind. Klicken Sie einfach die passende Taste!")},500);
        $.mobile.changePage('#page111', {
            transition : 'slidefade'
        });
    };
    function onGotoNeubürger() {// neue HTML-Seite "Neubürger" (aber auch mit jQM)!
        // aufgerufen in page111 (Bürgeramts-Auswahl) bei "Neubürger"
        window.console.log("page02Controller: Jetzt Neubürger starten");
        // hier wird auf neue HTML-Seite gewecheslt
        window.location.href = "page1111.html";
    };
    function onGotoAltbürger() {// neue HTML-Seite "Altbürger" (aber auch mit jQM)!
        // aufgerufen in page111 (Bürgeramts-Auswahl) bei "Altbürger"
        window.console.log("page02Controller: Jetzt Altbürger starten");
        // hier wird auf neue HTML-Seite gewecheslt
        window.location.href = "page1112.html";
    };

    function onGotoSpiele() {
        // wird aufgerufen, wenn "Spiele"-Button geklickt wird -> Spiele-Übergang
        window.console.log("page02Controller: Jetzt auf Page12 (Spieleauswahl) wechseln");
        // Nein (zu komplex bei "back" o.ä.: timeout, danach zu Spiele-Auswahl
        pepperCtrl.shutUpAndContinue();
        setTimeout(function() {pepperCtrl.playSound(5)},300);
        setTimeout(function() {pepperCtrl.sayEvent("Sax",
              "Prima! Ich spiele immer gerne, wenn mir etwas langweilig ist. Hier sind meine Lieblingsspiele. \
              Aber vorher gibt es noch einen kleinen Tusch für Dich!")}, 600);
        setTimeout(function() {pepperCtrl.sayGesture("^start(animations/Stand/Gestures/ShowTablet_1)",
        "Klicken Sie zur Auswahl einfach auf eine der Battens * hier auf meinem Täblet!")}, 550);  
        $.mobile.changePage('#page12', {
            transition : 'slidefade'
        });

    };
    function onGotoPage121() {// Spiele-Auswahl
        // aufgerufen in page12 (Spiele-Übergang) bei "Weiter"
        window.console.log("page02Controller: Jetzt auf Page121 wechseln");
        pepperCtrl.shutUpAndContinue();
        // hier wird auf neue data-role page gewechselt
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy","Einfach jetzt einen \
           der beiden Battens für ein Memory oder Tik Tak Toh Spiel anklicken!")}, 500); 
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy","Übrigens: Tic Tac Toh \
           ist auch unter dem Namen Drei gewinnt bekannt, und Du kannst gerne mal \
           gegen mich antreten.")}, 600);
        $.mobile.changePage('#page121', {
            transition : 'slidefade'
        });
    };

    function onGotoMemory() {// neue HTML-Seite "memory"
        // aufgerufen in page121 (Spiele-Asuwahl) bei "Memory"
        window.console.log("page02Controller: Jetzt Memory starten");
        // hier wird auf neue HTML-Seite gewecheslt
        window.location.href = "memoryPage.html";
    };

    function onGotoTTT() {// neue HTML-Seite "TTT"
        // aufgerufen in page121 (Spiele-Asuwahl) bei "TicTacToe"
        window.console.log("page02Controller: Jetzt TTT starten");
        // hier wird auf neue HTML-Seite gewecheslt
        window.location.href = "tttPage.html";
    };
    
    function onGotoHFU() {
        // wird aufgerufen, wenn "HFU"-Button geklickt wird -> HFU-Übergang
        window.console.log("page02Controller: Jetzt auf Page13 (HFU-Auswahl) wechseln");
        pepperCtrl.shutUpAndContinue();
        setTimeout(function() {pepperCtrl.playSound(5)},300);
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy",
           "Wußten Sie, daß die Stadt Villingen-Schwenningen einen Campus von einer \
           der größten Hochschulen in unserem Bundesland aufweist?")}, 500);
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy",
           "Ja, die H F U ist mit über 6000 Studierenden eine der ältesten und \
           rennomiertesten Hochschulen in Baden -Württemberg.")}, 550);
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy",
           "Und für das Projekt V S digital ist die H F U ein wichtiger Kooperationspartner. \
           Drücken Sie weiter für noch mehr spannende Informationen dazu.")}, 600); 
        $.mobile.changePage('#page13', {
            transition : 'slidefade'
        });       
    };
    
    function onGotoHFUAuswahl() {// HFU-Auswahl
        // aufgerufen in page13 (HFU-Übergang) bei "Weiter"
        window.console.log("page02Controller: Jetzt auf Page131 wechseln");
        // hier wird auf neue data-role page gewechselt
        window.location.href = "pageHFU.html";
    };

    function onGotoAbout() {
        // wird aufgerufen, wenn "About"-Button geklickt wird
        window.console.log("page02Controller: Jetzt auf About-Seite wechseln");
        pepperCtrl.shutUpAndContinue();
        pepperCtrl.playSound(5);  // swipeR2L
        // hier wird auf neue data-role page gewechselt
        // pepperCtrl.animatedSpeak("Girl", 'Aha! Sie wollen also noch etwas mehr Informationen \
        // zu diesem spannenden Projekt bekommen? Gerne! Hier ist einiges für Sie zusammengestellt!');
        setTimeout(function() {pepperCtrl.sayGesture("^start(animations/Stand/Gestures/ShowTablet_1)",
        "Aha! Sie wollen also noch etwas mehr Informationen  \
        zu diesem spannenden Projekt bekommen? Gerne! Hier habe ich einiges für Sie * zusammengestellt!")}, 900);
        $.mobile.changePage('#about', {
            transition : 'slidefade'
        });
    };

    function skipToSpiele() {
        // wird aufgerufen bei "Weiter"-Button in Spiele-Übergang oder Timeout
        window.console.log("Page02Controller: Jetzt auf Page121 Spieleauswahl wechseln");
        // window.location.href = "page02.html";
    };

    self.init = function(pepperController) {
        pepperCtrl = pepperController;
        window.console.log("Page02Controller initialisieren...");
        
        var url= window.location.href;
        var res= url.split("init=");
        if (res[1] && res[1]==1) 
            speakIntro(true);
        else
            speakIntro(false);

        // Callback-Funktionen bei Navi-Buttons registrieren
        // Achtung: IDs müssen über alle HTML-Seiten eindeutig sein!
        $('#toAbout').click(onGotoAbout);
        $('#toAbout11').click(onGotoAbout);
        $('#toAbout111').click(onGotoAbout);
        $('#toAbout12').click(onGotoAbout);
        $('#toAbout121').click(onGotoAbout);
        $('#toAbout13').click(onGotoAbout);
        $('#toAbout131').click(onGotoAbout);
        
        $('#toIndex').click(onGotoIndex);         // nach Home, index.html
        $('#toIndex11').click(onGotoIndex);       // nach Home, index.html
        $('#toIndex111').click(onGotoIndex);      // nach Home, index.html
        $('#toIndex12').click(onGotoIndex);       // nach Home, index.html
        $('#toIndex121').click(onGotoIndex);      // nach Home, index.html
        $('#toIndex13').click(onGotoIndex);       // nach Home, index.html
        $('#toIndex131').click(onGotoIndex);      // nach Home, index.html

        $('#gotoBürgeramt').click(onGotoBürgeramt);
        $('#gotoBürgeramtAuswahl').click(onGotoPage111);
        $('#gotoNeubürger').click(onGotoNeubürger);
        $('#gotoAltbürger').click(onGotoAltbürger);

        $('#gotoSpiele').click(onGotoSpiele);
        $('#gotoSpieleAuswahl').click(onGotoPage121);
        $('#gotoMemory').click(onGotoMemory);
        $('#gotoTTT').click(onGotoTTT);
        
        $('#gotoHFU').click(onGotoHFU);
        $('#gotoHFUAuswahl').click(onGotoHFUAuswahl);

        $('#gotoPage02').click(onGotoPage02);
        $('#gotoPage02_111').click(onGotoPage02);
        $('#gotoPage02_121').click(onGotoPage02);

    };
}

