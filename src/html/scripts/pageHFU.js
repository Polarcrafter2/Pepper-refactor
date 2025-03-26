// pageHFU.js für alle HFU-Sachen mit jQuery Mobile
var myPepperController = new pepperController();
var mySlideShow= new slideShow(myPepperController);
var myPageHFUController = new pageHFUController();

function pageFullyLoaded(e) {
    window.console.log("PageHFU: Initializing Controllers");
    myPepperController.init();
    //mySlideShow.init();
    myPageHFUController.init(myPepperController, mySlideShow);
}

window.console.log("PageHFU.js gestartet");
window.addEventListener("load", pageFullyLoaded, false);
