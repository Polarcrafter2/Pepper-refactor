// mainTTT.js: little Wrapper for TTT-Page to include PepperController
// pepperContrller.js already loaded in HTML-page
var myPepperController = new pepperController();

function pageFullyLoaded(e) {
    myPepperController.init();
    myPepperController.animatedSpeak("Girl","Hier kannst Du gegen mich in einer \
    Partie Tic Tac To antreten. Aber streng Dich, ich bin im Moment ziemlich gut im Training.");
}

window.console.log("mainTTT.js gestartet, aber nur als Dummy");
// window.addEventListener("load", pageFullyLoaded, false);
