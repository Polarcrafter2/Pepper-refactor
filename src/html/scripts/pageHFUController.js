'use strict';
// JS-file für Controller-Funktionen aller HFU-Pages

function slideShow(pepCtrl) {
    var self = this;
    var slideIndex = 1;
    var timer = 0;
    var maxPassed = false;  // einmal max erreicht -> keine Sprachausgabe mehr
    var pepperCtrl = pepCtrl;
   
    this.showSlides= function(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        for ( i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for ( i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        
        if ( !maxPassed ) {
            this.explainCurrentSlide()
        } 
        else {
            // timer for automatic next()
            timer= setTimeout(function() {mySlideShow.plusSlides(1)}, 10000); // Change image every 2 seconds  
        }       
        if (n == slides.length) {
            maxPassed = true;
        }             
    }
    
    this.plusSlides = function(n) {
        console.log("slideShow: plusSlides");
        pepperCtrl.shutUpAndContinue();
        pepperCtrl.playSound(7);  // slurp
        if (timer != 0) {
            clearTimeout(timer);
            timer= 0;
        }
        this.showSlides(slideIndex += n);
    }

    this.currentSlide = function(n) {
        this.showSlides( slideIndex = n);
    }
    
    this.explainCurrentSlide = function() {
        switch (slideIndex) {
            case (1) :
                pepperCtrl.shutUpAndContinue()
                setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Die H F U ist in drei Städten mit je einem Campus vertreten.\
                   Insgesamt haben wir 9 Fakultäten. In Schwenningen sind zum Beispiel die Medizintechnik und \
                   der Maschinenbau vertreten.")}, 2450);
                setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Die fast 2000 Studierenden alleine hier\
                   in Villingen-Schwenningen sind ein wichtiger Faktor im Leben unserer Stadt.")}, 2500);
                setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Ja, ich liebe unsere Studenten und \
                   arbeite gerne mit ihnen zusammen.")}, 2600);   
                timer= setTimeout(function() {mySlideShow.plusSlides(1)}, 27000);
                break;
            case (2) :
                pepperCtrl.shutUpAndContinue()
                setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Und schon kommen wir zur Informatik. Hier handelt es sich um\
                   eine sogenannte Systemwissenschaft, die heutzutage ganz entscheidende Beiträge für viele Bereiche \
                   unseres modernen Lebens liefert.")}, 2450);               
                setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Deshalb sind Informatiker bei den \
                   Arbeitgebern und Unternehmen so beliebt! Und die Fakultät Informatik setzt alles daran, ihre Studierenden \
                   optimal auf das Berufsleben vorzubereiten.")}, 2500);
                timer= setTimeout(function() {mySlideShow.plusSlides(1)}, 27000);
                break;
            case (3) :
                pepperCtrl.shutUpAndContinue()
                setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Aber die Hochschule kümmert sich nicht nur um die Studierenden.\
                  Es gibt auch viele Forschungsaktivitäten und Kontakte zu Industrieunternehmen. Ich bin zum Beispiel \
                  sehr an modernen Formen der Didaktik interessiert.")}, 2450);
                setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Oder ein Professoren-Kollege von mir ist\
                  den gesamten Rhein hinuntergeschwommen, um die Wasserqualität hautnah zu überprüfen.")}, 2500);  
                setTimeout(function() {pepperCtrl.animatedSpeak("Girl", "Aber besonders beliebt sind unsere\
                   Exkursionen zu interessanten Unternehmen. So haben wir uns zum Beispiel die selbstfahrenden \
                   Autos der Firma Daimler in Stuttgart angesehen.")}, 2600); 
                timer= setTimeout(function() {mySlideShow.plusSlides(1)}, 34000);
                break;
            default :
                pepperCtrl.animatedSpeak("Girl", "Bild fehlt");
        }
    }
    
    this.stopSlideShow = function(n) {
        console.log("slideShow: stopSlideShow");
        pepperCtrl.shutUpAndContinue();
        if (timer != 0) {
            clearTimeout(timer);
            timer= 0;
            slideIndex = 1;
        }
    }
}

function pageHFUController() {
    var self = this;
    var pepperCtrl;
    var slide;
    // for video-Clip    
    var videoTimer= 0;
    var video= 0;
    var btn= 0;

    function speakIntro(isFirst){
        pepperCtrl.shutUpAndContinue();
        setTimeout(function() {pepperCtrl.playSound(4)},400);        // clickOn  
        if( isFirst == true) { 
           setTimeout(function() {pepperCtrl.animatedSpeak("Boy", "Wie ich bei Wikipedia erfahren habe,\
              ist die Hochschule Furtwangen aus der ältesten Uhrmacherschule in Deutschland \
              entstanden.")}, 450);  
           setTimeout(function() {pepperCtrl.animatedSpeak("Boy", "Diese wurde 18 Hundert 50 in unserer \
              Nachbarstadt Furtwangen gegründet. Deshalb ist bis heute das Uhrenmuseum direkt an \
              die H F U angegliedert.")}, 500);
           setTimeout(function() {pepperCtrl.animatedSpeak("Boy", "Wenn Du also demnächst einmal \
              in Furtwangen bist, dann schaue gerne mal dort vorbei. Wirklich interessant, was \
              man dort alles sehen kann!")}, 550);   
        }         
        setTimeout(function() {pepperCtrl.sayGesture("^start(animations/Stand/Gestures/ShowTablet_1)",
           "Für weitere Infos zur H F U und natürlich zur Fakultät Informatik klicke \
           einfach auf eine der Battens hier * auf meinem Tablet!")}, 800);                
    }

    function onGotoPage02() {
        // wird aufgerufen, wenn "Hauptauswahl"-Button geklickt wird
        window.console.log("pageHFUController: Jetzt auf Page02 wechseln");
        // hier wird auf neue data-role page gewechselt
        slide.stopSlideShow();
        window.location.href = "page02.html#page02";
    };
    
    function onGotoHFUAllgemein() {
        // wird aufgerufen, wenn "Allgemein"-Button geklickt wird 
        window.console.log("pageHFUController: Jetzt auf Page HFUAllgemein wechseln");
        pepperCtrl.playSound(4);        // clickOn  
        // pepperCtrl.shutUpAndContinue();
        // pepperCtrl.animatedSpeak("Boy","Jetzt kommt HFU allgemein");
        $.mobile.changePage('#pageHFUAllgemein', {
            transition : 'slidefade'
        });
        slide.showSlides(1);
    };
    
    function onGotoHFUIN() {
        // wird aufgerufen, wenn "HFU-IN"-Button geklickt wird 
        window.console.log("pageHFUController: Jetzt auf Page HFU-IN wechseln");
        pepperCtrl.shutUpAndContinue();
        pepperCtrl.playSound(4);        // clickOn  
        slide.stopSlideShow();
        // pepperCtrl.animatedSpeak("Boy","Jetzt kommt die Fakultät I N !");
        $.mobile.changePage('#pageHFUInformatik', {
            transition : 'slidefade'
        });
        setTimeout(function() {pepperCtrl.sayGesture("^run(animations/Stand/Waiting/MysticalPower_1)",
        "* Die Fakultät Informatik ist natürlich meine Lieblingsfakultät, da ich \
        hier kwahsi zu Hause bin! Hier erstmal einige wichtige Fakten.")}, 500);        
    };
    
    function onGotoHFUIN1() {
        // wird aufgerufen, wenn in HFU-IN "Weiter"-Button geklickt wird 
        window.console.log("pageHFUController: Jetzt auf Page HFUIN1 wechseln");
        pepperCtrl.shutUpAndContinue();
        pepperCtrl.playSound(4);        // clickOn  
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl","Vielleicht fragst Du Dich, was bedeutet denn \
        eigentlich Informatik? Dazu habe ich Dir einen kleinen Erklär-Videoclip mitgebracht!")}, 500);
        $.mobile.changePage('#pageHFUIN1', {
            transition : 'slidefade'
        });
        videoTimer= setTimeout(function(){ myPageHFUController.videoPlay()}, 4000);

    };
    
    function onGotoHFUIN2() {
        // wird aufgerufen, wenn in HFU-IN1 bei Clip "Weiter"-Button geklickt wird 
        window.console.log("pageHFUController: Jetzt auf Page HFUIN2 wechseln");
        videoStop();
        pepperCtrl.shutUpAndContinue();
        pepperCtrl.playSound(4);        // clickOn 
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl","Nachdem Du jetzt über die Informatik grob Bescheid weißt, \
        kannst Du Dich hier nocht detailliert über unsere Studiengänge informieren!")}, 500);
        $.mobile.changePage('#pageHFUIN2', {
            transition : 'slidefade'
        });
    };
    
    
    this.videoPlay = function() {
        window.console.log("pageHFUController: videoPlay");
          if (video.paused) {
            video.play();
            btn.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;PAUSE ||&nbsp;&nbsp;&nbsp;&nbsp;";
          } 
    };
    
    function videoStop() {
        window.console.log("pageHFUController: videoStop");
        if (videoTimer != 0) {
            clearTimeout(videoTimer);
            videoTimer= 0;
        }
        if (!video.paused) {
            video.pause();
            video.load(); // reload
            btn.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;PLAY >&nbsp;&nbsp;&nbsp;&nbsp;";
        } 
    };

    // Pause and play the video, and change the button text
    function videoToggle() {
        window.console.log("pageHFUController: videoToggle");
          if (video.paused) {
            video.play();
            btn.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;PAUSE ||&nbsp;&nbsp;&nbsp;&nbsp;";
          } else {
            video.pause();
            btn.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PLAY >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
          }
    };
    
    function onGotoAbout() {
        // wird aufgerufen, wenn "About"-Button geklickt wird
        window.console.log("pageHFUController: Jetzt auf About-Seite wechseln");
        slide.stopSlideShow();
        videoStop();
        pepperCtrl.shutUpAndContinue();
        pepperCtrl.playSound(5); // swipeR2L
        // setTimeout(function() {pepperCtrl.sayGesture("Girl", "Weitere Hintergrundinfos")}, 500); 
        // pepperCtrl.animatedSpeak("Girl","Jetzt sind wir auf der Hintergrundseite angekommen!");
        // pepperCtrl.sayGesture("Girl", "Weitere Hintergrundinfos ^start(animations/Stand/Gestures/ShowTablet_1) einfach auf eine der Battens hier auf meinem Tablet!");
        setTimeout(function() {pepperCtrl.sayGesture("^start(animations/Stand/Gestures/ShowTablet_1)",
        "Aha! Sie wollen also noch etwas mehr Informationen  \
        zu diesem spannenden Projekt bekommen? Gerne! Hier habe ich einiges für Sie * zusammengestellt!")}, 900);
        $.mobile.changePage('#about', {
            transition : 'slidefade'
        });
    };    
        
    function onGotoIndex() {// neue HTML-Seite index.hmtl(aber auch mit jQM)!
        // aufgerufen in footer bei "Home"
        window.console.log("page02Controller: Jetzt index.html starten");
        slide.stopSlideShow();
        // hier wird auf neue HTML-Seite gewecheslt
        window.location.href = "index.html";
    };
    
    function onSpeakAIN() {
        // wird aufgerufen, wenn in HFU-IN2 der "AIN"-Button geklickt wird 
        videoStop();
        pepperCtrl.shutUpAndContinue();
        pepperCtrl.playSound(4);        // clickOn 
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl","Der Bätscheler-Studiengang Allgemeine Informatik \
        ist sehr gut geeignet, wenn Du einen grundlegenden und praxisnahen Informatik-Abschluß suchst.")}, 500);
    };
    
    function onSpeakITP() {
        // wird aufgerufen, wenn in HFU-IN2 der "ITP"-Button geklickt wird 
        videoStop();
        pepperCtrl.shutUpAndContinue();
        pepperCtrl.playSound(4);        // clickOn
        setTimeout(function() {pepperCtrl.animatedSpeak("Girl","Im Bätscheler-Studiengang I T Produkt-Management \
        lernst Du, wie man heutzutage komplexe Produkte im I T Umfeld erfolgreich plant, koordiniert \
        und durchführt.")}, 500);
    };

    function onSpeakINM() {
        // wird aufgerufen, wenn in HFU-IN2 der "INM"-Button geklickt wird 
        videoStop();
        pepperCtrl.shutUpAndContinue();
        pepperCtrl.playSound(4);        // clickOn
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy","Im Mahster-Studiengang Informatik \
        vermittelt Dir fortgeschrittene Kenntnisse auf Experten-Niveau im Fach Informatik")}, 500);
    };

    function onSpeakMOS() {
        // wird aufgerufen, wenn in HFU-IN2 der "MOS"-Button geklickt wird 
        videoStop();
        pepperCtrl.shutUpAndContinue();
        pepperCtrl.playSound(4);        // clickOn
        setTimeout(function() {pepperCtrl.animatedSpeak("Boy","Im Mahster-Studiengang Mobile Systeme \
        bekommst Du I T Kenntnisse im Bereich der digitalen Mobilität vermittelt.")}, 500);
    };
        
    self.init = function(pepperController, slideShow) {
        pepperCtrl = pepperController;
        slide= slideShow;
        window.console.log("PageHFUController initialisieren...");
        speakIntro(true);

        // Callback-Funktionen bei Navi-Buttons registrieren
        // Achtung: IDs müssen über alle HTML-Seiten eindeutig sein!
        $('#toAbout').click(onGotoAbout);
        $('#toAboutAllgemein').click(onGotoAbout);
        $('#toAboutInformatik').click(onGotoAbout);
        $('#toAboutIN1').click(onGotoAbout);
        $('#toAboutIN2').click(onGotoAbout);
        
        $('#toIndex').click(onGotoIndex);         // nach Home, index.html

        $('#gotoHFUAllgemein').click(onGotoHFUAllgemein);
        $('#gotoHFUIN').click(onGotoHFUIN);
        $('#gotoHFUIN1').click(onGotoHFUIN1);
        
        $('#gotoPage02').click(onGotoPage02);
        $('#gotoPage02_HFU').click(onGotoPage02);
        $('#gotoPage02_Allgemein').click(onGotoPage02);
        $('#gotoPage02_IN').click(onGotoPage02);
        $('#gotoPage02_About').click(onGotoPage02);
        $('#myVideoButton').click(videoToggle);
        $('#myWeiterButton').click(onGotoHFUIN2);
        
        $('#startInfoAIN').click(onSpeakAIN);
        $('#startInfoITP').click(onSpeakITP);
        $('#startInfoINM').click(onSpeakINM);
        $('#startInfoMOS').click(onSpeakMOS);
        
        // Get the video
        video = document.getElementById("myINVideo");        
        // Get the Video-Play/Pause-button
        btn = document.getElementById("myVideoButton");
        
        $(document).on('pageshow','#pageHFUInformatik', videoStop);
    };
}

