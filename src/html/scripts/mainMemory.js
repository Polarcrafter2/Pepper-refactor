// mainMemory.js: little Wrapper for Memopry-Page to include PepperController
// pepperContrller.js already loaded in HTML-page
var myPepperController = new pepperController();

function pageFullyLoaded(e) {
    myPepperController.init();
    myPepperController.animatedSpeak("Boy", "Hier kannst Du Dein Gedächtnis etwas trainieren!");
}

window.console.log("mainMemory.js gestartet");
window.addEventListener("load", pageFullyLoaded, false);
