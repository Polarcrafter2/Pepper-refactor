

function textOnClick(meinText){
  window.console.log("Text: " + meinText);
  $.raiseALMemoryEvent("SBR/Test/Tablet/TextEvent", meinText);
}

function textAusgabe(meinText){
  window.console.log("Text-Ausgabe: ", meinText);
  // $.raiseALMemoryEvent("SBR/Test/Tablet/TextEvent", meinText);
}

// var element = document.getElementById("ain");
// element.addEventListener("click", textOnClick("Dies ist jetzt A I N"), false);
// document.getElementById("ain").addEventListener("click", textAusgabe, false);

var myPepperController = new pepperController();
var myPage01Controller = new page01Controller();
// $(controller.onLoaded);

function pageFullyLoaded(e) {
    // window.console.log("Initializing Controllers");
    myPepperController.init();
    myPage01Controller.init(myPepperController);
}

window.console.log("page01Controller.js gestartet");
window.addEventListener("load", pageFullyLoaded, false);







