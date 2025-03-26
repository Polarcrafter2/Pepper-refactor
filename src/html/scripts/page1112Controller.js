'use strict';
// JS-file für Controller-Funktionen aller Altbürger-Sachen

function page1112Controller() {
    var self = this;
    var pepperCtrl;

    function doIntro1112(){ 
        pepperCtrl.shutUpAndContinue(); 
        pepperCtrl.playSound(0);        // pling     
        setTimeout(function() { pepperCtrl.animatedSpeak("Boy", "Auch wenn Sie als Altbürger unsere \
            Verwaltung und das Bürgeramt seit Jahren aus dem F F kennen")},450);
        setTimeout(function() { pepperCtrl.animatedSpeak("Boy", "sind manche \
            Besucher für etwas Hilfestellung immer wieder sehr dankbar.")},1000);   
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy","Zum Beispiel bei diesen lästigen Basis-Routinen, \
            die immer wieder anfallen und eben einfach erledigt werden müssen.")},1500);
    }
    
    function onGotoPage02() {
        // wird aufgerufen, wenn "Hauptauswahl"-Button geklickt wird
        window.console.log("page1112Controller: Jetzt auf neue HMTL-Seite Hauptauswahl wechseln");
        // hier wird auf neue HTML-Seite gewecheslt
        window.location.href = "page02.html";
    };
    
    function onGotoAbout() {
        // wird aufgerufen, wenn "About"-Button geklickt wird
        window.console.log("page1112Controller: Jetzt auf About-Seite wechseln");
        pepperCtrl.shutUpAndContinue();
        pepperCtrl.playSound(5);        // swipteR2L
        // hier wird auf neue data-role page gewechselt
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Hier sind noch einige interessante Detail-Informationen \
        zu meiner Person für Sie aufbereitet.")}, 900);
        $.mobile.changePage('#about', {
            transition : 'slidefade'
        });
    };
    
    function itemPass() {
        // wird aufgerufen, wenn "Info-Videoclip" geklickt wird
        window.console.log("page1112Controller: listItem Info-Clip ausgewählt");
        pepperCtrl.playSound(0);        // pling    
        // Pepper spricht eine Erklärung
        setTimeout(function() { pepperCtrl.animatedSpeak("Girl", "Wenn Sie ins Ausland fahren wollen, dann \
        benötigen Sie einen aktuellen Reisepass. Prüfen Sie daher rechtzeitig das Ablaufdatum.")}, 450);
        setTimeout(function() { pepperCtrl.animatedSpeak("Girl", "Für einen neuen Reisepass brauchen Sie zwei korrekte \
        Passfotos von Ihnen selbst. Ach, Sie haben gerade keine Fotos dabei? Das ist kein Problem. \
        Ich mache eben ein Photo von Ihnen.")}, 500);
        
        setTimeout(function() { pepperCtrl.sayGesture("^run(animations/Stand/Waiting/TakePicture_1)",
        "Bitte lächeln! * So, daß hätten wir schon mal.")},5000);

        setTimeout(function() { pepperCtrl.animatedSpeak("Girl", "Ich schicke das Foto \
        gleich zu Frau Winter. Sie kann Ihren Pass-Antrag schon vorbereiten.\
        Bitte gehen Sie jetzt zu Ihr ins Zimmer 1 12 zum Unterschreiben!")}, 20000);
        
        setTimeout(function() {pepperCtrl.wegHinweis("left", "Sie finden Frau Winter im ersten O G rechts den Gang hinunter.")}, 37000);
        
        setTimeout(function() { pepperCtrl.animatedSpeak("Girl", "Die aktuelle Wartezeit beträgt nur zirka 5 Minuten. \
        Heute ist also wirklich Ihr Glückstag!")}, 38000);
    };
    
    function itemStandesamt() {
        // wird aufgerufen, wenn "Infos Standesamt" geklickt wird
        window.console.log("page1112Controller: listItem Infos Standesamt");
        pepperCtrl.playSound(0);        // pling    
        // Pepper spricht eine Erklärung
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Auf dem Standesamt können Sie Geburtsurkunden \
        beantragen, Eheschließungen durchführen und schließlich auch Sterbefälle anzeigen.")}, 450);
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Unser Herr Hubert ist ein sehr erfahrener und beliebter \
        Standesbeamter, der auch ausgefallene Sonderwünsche möglich machen kann. ")}, 500);
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Sie treffen ihn zu einem \
        unverbindlichen Beratungsgespräch im Zimmer 1 25 im ersten O G!")},600);
        
        setTimeout(function() {pepperCtrl.wegHinweis("right", "Das ist dort links die Treppe hoch!\
           Er hat aber im Moment eine Wartezeit von mindestens 10 Minuten.")}, 23000);
    };

    function itemKinder() {
        // wird aufgerufen, wenn "Kind bei Kindertagesstätte anmelden" geklickt wird
        window.console.log("page1112Controller: listItem Kind anmelden");
        pepperCtrl.playSound(0);        // pling    
        // Pepper spricht eine Erklärung
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "In Villingen-Schwenningen gibt es mehrere \
        sehr schöne Kindertagesstätten, bei denen Ihr Kind in den besten Händen ist.")}, 450);
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Wichtig ist uns, Ihr Kind optimal auf die \
        Einschulung vorzubereiten. Ich kenne mich da aus, denn ich war selber einige Jahre \
        als Kindererzieherin tätig.")}, 500);        
        
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Leider sind im Moment alle Tagesstätten voll belegt, \
        und es gibt sogar schon Wartelisten. Aber bitte wenden Sie sich an Frau Schubert in Zimmer \
        2 0 9.")}, 550);
        setTimeout(function() {pepperCtrl.wegHinweis("left", "Dort dann bitte rechts halten. \
        Sie kann Ihnen dann genaue Auskunft über die Anmeldefristen geben.")}, 29000);
    };

    function itemAbfall() {
        // wird aufgerufen, wenn "Infos Abfall" geklickt wird
        window.console.log("page1112Controller: listItem Infos Abfall");
        pepperCtrl.playSound(0);        // pling    
        // Pepper spricht eine Erklärung
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Villingen-Schwenningen ist eine sehr \
        umweltbewußte Stadt inmitten der herrlichen Natur des mittleren Schwarzwalds. ")},450);
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Damit dies auch so bleibt, ist für uns die nachhaltige \
        Abfall-Wirtschaft von großer Bedeutung.")}, 500);
        
        setTimeout(function() {pepperCtrl.animatedSpeakAngry("Girl", 
             "Diese Thema ist auch für mich ein starkes Herzensanliegen.")},6400);
             
        setTimeout(function() {pepperCtrl.animatedSpeakAngry("Girl", 
            "Für Müll-Sünder gibt es bei mir kein Pardon!")}, 6600);
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl", 
            "Am besten, Sie beantragen gleich die korrekten \
        Entsorgungsdienstleistungen, die unser technischer Dienst zuverlässig bereitstellt. \
        Frau Ganter in Zimmer 2 0 4 ist Ihnen dabei gerne behilflich.")},6700);
        
        setTimeout(function() {pepperCtrl.wegHinweis("rechts", "Zu Frau Ganter bitte \
        dort vorne links.")}, 33000);
    };
    
    self.init = function(pepperController) {
        pepperCtrl = pepperController;
        window.console.log("Page1112Controller initialisieren...");


        // Callback-Funktionen bei Navi-Buttons registrieren
        // Achtung: IDs müssen über alle HTML-Seiten eindeutig sein!
        $('#toAbout1112').click(onGotoAbout);

        $('#gotoPage02').click(onGotoPage02);

        $('#itemPass').click(itemPass);
        $('#itemKinder').click(itemKinder);
        $('#itemStandesamt').click(itemStandesamt);
        $('#itemAbfall').click(itemAbfall);
        
        doIntro1112();
    };
}

