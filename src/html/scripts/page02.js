// page02.js für alle Amt-Sachen mit jQuery Mobile
var myPepperController = new pepperController();
var myPage02Controller = new page02Controller();

function theDomHasLoaded(e) {
    // window.console.log("Loading external HTML-file into DOM: ainJQM.html");
    // $("#ain_page").load("ainJQM.html");
    // console.log("Main.js: memory.init");
    // memory.init();
    // console.log("Main.js: memory called");
    // memory.memDomTest();
}

function pageFullyLoaded(e) {
    window.console.log("Page02: Initializing Controllers");
    myPepperController.init();
    myPage02Controller.init(myPepperController);
}

window.console.log("Page02.js gestartet");
document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
window.addEventListener("load", pageFullyLoaded, false);
