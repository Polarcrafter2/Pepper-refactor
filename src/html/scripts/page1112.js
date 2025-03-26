// page1112.js für alle Altbürger-Sachen mit jQuery Mobile
var myPepperController = new pepperController();
var myPage1112Controller = new page1112Controller();

function pageFullyLoaded(e) {
    window.console.log("Page1112: Initializing Controllers");
    myPepperController.init();
    myPage1112Controller.init(myPepperController);
}

window.console.log("Page1112.js gestartet");
window.addEventListener("load", pageFullyLoaded, false);
