'use strict';
// JS-file für Controller-Funktionen aller Neubürger-Sachen

function page1111Controller() {
    var self = this;
    var pepperCtrl;
    // for video-Clip    
    var video= 0;
    var btn= 0;
    
    
    function doIntro1111(){
        pepperCtrl.shutUpAndContinue();   
        pepperCtrl.playSound(0);        // pling    
        setTimeout(function() { pepperCtrl.animatedSpeak("Boy", 
            "Toll, daß Sie sich entschieden haben, hier im \
            Oberzentrum Villingen-Schwenningen wohnhaft zu werden.")},450);
        setTimeout(function() { pepperCtrl.animatedSpeak("Boy", 
            "Wir freuen uns über jeden Neubürger, \
            den wir in unserer modernen Stadt begrüßen dürfen!")},500);        
        setTimeout(function() { pepperCtrl.animatedSpeak("Boy",
            "Und daß unsere Verwaltung tipp topp aufgestellt ist, das sehen Sie \
            ja schon an mir.")},550);
        setTimeout(function() { pepperCtrl.animatedSpeak("Boy",
            "Und hier sind schon mal ein paar Basis-Informationen, die ich für Sie \
            zusammengestellt habe.")},600);
    };

    function onGotoPage02() {
        // wird aufgerufen, wenn "Hauptauswahl"-Button geklickt wird
        window.console.log("page1111Controller: Jetzt auf neue HMTL-Seite Hauptauswahl wechseln");
        // hier wird auf neue HTML-Seite gewecheslt
        window.location.href = "page02.html";
    };
      
    function onGotoAbout() {
        // wird aufgerufen, wenn "About"-Button geklickt wird
        window.console.log("page1111Controller: Jetzt auf About-Seite wechseln");
        pepperCtrl.playSound(5);        // swipeR2L
        // hier wird auf neue data-role page gewechselt
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Hier sind noch einige Detail-Informationen \
        zu diesem spannenden Projekt für Sie aufbereitet.")}, 500);
        $.mobile.changePage('#about1111', {
            transition : 'slidefade'
        });
    };
    
    function videoPlay() {
        window.console.log("page1111Controller: videoPlay");
          if (video.paused) {
            video.play();
            btn.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Pause&nbsp;&nbsp;&nbsp;&nbsp;";
          } 
    };
    
    function videoStop() {
        window.console.log("page1111Controller: videoStop");
          if (!video.paused) {
            video.pause();
            video.load(); // reload
            btn.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Play&nbsp;&nbsp;&nbsp;&nbsp;";
          } 
    };

    // Pause and play the video, and change the button text
    function videoToggle() {
        window.console.log("page1111Controller: videoToggle");
          if (video.paused) {
            video.play();
            btn.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Pause&nbsp;&nbsp;&nbsp;&nbsp;";
          } else {
            video.pause();
            btn.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Play&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
          }
    };
    
    function itemPageClip() {
        // wird aufgerufen, wenn "Info-Videoclip" geklickt wird
        window.console.log("page1111Controller: listItem Info-Page-Clip ausgewählt");
        pepperCtrl.playSound(0);        // pling
        // Pepper spricht eine Erklärung
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy", "Wenn Sie gerade erst nach Villingen-Schwenningen \
        gezogen sind, wollen Sie vielleicht etwas über Ihre neue Heimat-Stadt erfahren. \
        Hier ist erstmal ein kleiner Video-Clip zur Einführung!")}, 500);        
        $.mobile.changePage('#pageClip', {
            transition : 'slidefade'
        });
        pepperCtrl.sayGesture("^start(animations/Stand/Gestures/ShowTablet_1)",
        "Für Pause einfach * hier auf meinem Tablet den Pause Batten drücken!");
        // start Playback:
        videoToggle();
    };

    function itemPerso() {
        // wird aufgerufen, wenn "Personalausweis umschreiben" geklickt wird
        window.console.log("page1111Controller: listItem Personausweis umschreiben");
        pepperCtrl.playSound(0);        // pling
        // Pepper spricht eine Erklärung
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Neubürger sollten als erstes unbedingt ihren \
        Personalausweis auf ihre neue Wohnungsadresse umschreiben lassen. Ich fürchte, das ist \
        eine gesetzliche Vorgabe!")}, 450);
        setTimeout(function() {pepperCtrl.wegHinweis("right", "Halten Sie hierfür bitte Ihren Mietvertrag bereit, und gehen Sie zu \
        Frau Sommer im Zimmer 2 0 2. Das ist im zweiten Obergeschoß und \
           dort die zweite Tür auf der linken Seite.")}, 12000);
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl","Ach Du meine Güte. Die aktuelle Wartezeit bei Frau \
           Sommer beträgt zirka 10 Minuten. Aber das ist kein Problem. Wir können \
           zusammen etwas spielen.")}, 13000);
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl","Dann vergeht die Zeit viel schneller, und mir ist \
           nicht so langweilig. Dazu einfach in der Hauptauswahl den Punkt Spiele auswählen.")}, 13500);
    };    

    function itemPageMuseen() {
        // wird aufgerufen, wenn "Infos Museen" geklickt wird
        window.console.log("page1111Controller: listItem Infos PageMuseen");
        pepperCtrl.playSound(0);        // pling
        // Pepper spricht eine Erklärung
        pepperCtrl.animatedSpeak("Girl", "Die Doppelstadt Villingen-Schwenningen zeichnet \
        sich durch eine besonders reichhaltige Museumslandschaft aus.");
        
        $.mobile.changePage('#pageMuseen', {
            transition : 'slidefade'
        });        
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Neben vielen interessanten \
        Sehenswürdigkeiten möchte ich Ihnen hier erst mal die Städtische Galerie in der \
        Friedrich Ebert Straße in Schwenningen empfehlen.")}, 450);
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Sie liegt direkt gegenüber dem \
        Bahnhof und zeigt durchaus ambitionierte Ausstellungen. Teilweise sogar richtig modern.")}, 500);
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl","Wenn Sie hier den QR-Code mit Ihrem Smart-Fon einscennen, \
        dann sind Sie gleich auf der Startseite des Museums.")}, 550);
    };
    
    function itemPageMuseen1() {
        // wird aufgerufen, wenn "Infos Museen" geklickt wird
        window.console.log("page1111Controller: listItem Infos PageMuseen1");
        pepperCtrl.playSound(0);        // pling
        // Pepper spricht eine Erklärung
        $.mobile.changePage('#pageMuseen1', {
            transition : 'slidefade'
        });
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy","Und dann ist da natürlich noch unser Franziskaner \
        Museum in der Villinger Rietgasse. Es zeigt unter anderem ein uraltes keltisches Fürstengrab.")}, 450); 
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy","Es wurde vor einigen Jahren aus dem Magdahlehnen hügel vor den Toren \
        der Stadt geborgen. ")}, 500);
        setTimeout(function() {pepperCtrl.sayGesture("^start(animations/Stand/Gestures/ShowTablet_1)",
        "Sie können hier diesen QR-Code einscennen, * \
        dann sind Sie gleich auf der Startseite vom Franziskaner.")}, 550);
    };

    function itemBibliothek() {
        // wird aufgerufen, wenn "Infos Bibliothek" geklickt wird
        window.console.log("page1111Controller: listItem Infos Bibliothek");
        pepperCtrl.playSound(0);        // pling
        // Pepper spricht eine Erklärung
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy", "Schön, daß Sie sich für Bücher interessieren. \
        Ich lese auch gerne die alten Schinken, wenn mir langweilig ist. In unserer Stadt haben \
        wir eine Bibliothek, die sogar an beiden Standorten vertreten ist.")}, 450);
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy","Und zwar einmal in Schwenningen am Muslen-Platz und \
        in Villingen am Münsterplatz. Manchmal wissen wir selber nicht, \
        an welchem Standort wir ein Buch einsortieren sollen.")}, 500);
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy","Wegen der Corona-Krise sind die Öffnungszeiten \
        nicht immer ganz klar. Da komme sogar ich durcheinander. Am besten, Sie schauen \
        direkt auf der Startseite der Bibliothek nach.")}, 550);
    };
    
    function itemVHS() {
        // wird aufgerufen, wenn "Infos VHS" geklickt wird
        window.console.log("page1111Controller: listItem Infos VHS");
        pepperCtrl.playSound(0);        // pling
        // Pepper spricht eine Erklärung
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy", "Ganz wichtig ist uns hier in Villingen-Schwenningen \
        das lebenslange Lernen unserer Bürger und ganz besonders natürlich unserer \
        Neubürger.")}, 450); 
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy", "In der Volkshochschule finden Sie dafür reichlich Gelegenheit \
        und jede Menge interessanter Kurse von A wie Anfänger-Joga über B wie Beginner-Joga \
        über C für Chronisches Joga über D für Dauer-Joga. Über E.")}, 500);
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy", "Naja Sie verstehen schon, bis hin zu \
        X wie Extra-Joga, Y wie Joga-Joga und Z wie Zahnschmerz-Joga. \
        Einfach toll, was man dort alles lernen kann.")}, 550);
    };

    self.init = function(pepperController) {
        pepperCtrl = pepperController;
        window.console.log("Page1111Controller initialisieren...");
   
        // Callback-Funktionen bei Navi-Buttons registrieren
        // Achtung: IDs müssen über alle HTML-Seiten eindeutig sein!
        $('#toAbout1111').click(onGotoAbout);

        $('#gotoPage02').click(onGotoPage02);

        $('#itemPageClip').click(itemPageClip);   
        $('#myVideoButton').click(videoToggle);
             
        $('#itemPerso').click(itemPerso);
        $('#itemPageMuseen').click(itemPageMuseen);
        $('#gotoPageMuseen1').click(itemPageMuseen1);
        $('#itemBibliothek').click(itemBibliothek);
        $('#itemVHS').click(itemVHS);
        $('#gotoHauptauswahl').click(onGotoPage02);
        
        doIntro1111();
        
        // Get the video
        video = document.getElementById("myVideo");        
        // Get the Video-Play/Pause-button
        btn = document.getElementById("myVideoButton");
        
        $(document).on('pageshow','#page1111', videoStop); 
    };
}

