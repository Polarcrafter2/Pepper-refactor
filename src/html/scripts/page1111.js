// page1111.js für alle Neubürger-Sachen mit jQuery Mobile
var myPepperController = new pepperController();
var myPage1111Controller = new page1111Controller();

function pageFullyLoaded(e) {
    window.console.log("Page1111: Initializing Controllers");
    myPepperController.init();
    myPage1111Controller.init(myPepperController);
}

window.console.log("Page1111.js gestartet");
window.addEventListener("load", pageFullyLoaded, false);
