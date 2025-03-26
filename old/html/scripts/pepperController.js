// pepperController.js: provides API / Control-Functions of Pepper Robot

function pepperController() {
    var self = this;
    var isDesktop = false;

    self.init = function() {
        window.console.log("PepperController initialisiert");
        // Prüfen, ob echter Pepper mit echtem Tablet
        // falls Windows-System: dann keine pepper-Funktionen aufrufen!!
        if (window.navigator.userAgent.indexOf("Windows NT") != -1)
            isDesktop = true;
        window.console.log("PepperController: isDesktop= ", isDesktop);
    };

    this.animatedSpeak = function(role, meinText) {
        window.console.log("pepperCtrl animatedSpeak: " + role + " " + meinText);
        // debug: $.raiseALMemoryEvent("SBR/Test/Tablet/TextEventGirl", "Hallo Test");
        if (isDesktop == false)
            if (role == "Boy")
                $.raiseALMemoryEvent("SBR/Test/Tablet/TextEventBoy", meinText);
            else
                $.raiseALMemoryEvent("SBR/Test/Tablet/TextEventGirl", meinText);
    };

    this.animatedSpeakAngry = function(role, meinText) {
        window.console.log("pepperCtrl animatedSpeakAngry: " + role + " " + meinText);
        // debug: $.raiseALMemoryEvent("SBR/Test/Tablet/TextEventGirl", "Hallo Test");
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/TextEventAngry", meinText);
    };

    this.volPlus = function() {
        window.console.log("pepperCtrl volPlus");
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/VolLauter");
    };

    this.volMinus = function() {
        window.console.log("pepperCtrl volMinus");
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/VolLeiser");
    };

    this.setMute = function() {
        window.console.log("pepperCtrl setMute");
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/MuteOnOff", 1);
    }

    this.setUnmute = function() {
        window.console.log("pepperCtrl setUnmute");
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/MuteOnOff", 0);
    }

    this.winner = function(meinText) {
        window.console.log("pepperCtrl winner: " + meinText);
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/WinnerEvent", meinText);
    };

    this.looser = function(meinText) {
        window.console.log("pepperCtrl looser: " + meinText);
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/LooserEvent", meinText);
    };

    this.shutUp = function() {
        window.console.log("pepperCtrl shutUp! ");
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/ShutUpEvent", "");
    };

    this.shutUpAndContinue = function() {
        window.console.log("pepperCtrl shutUp and Continue! ");
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/ShutUpContEvent", "");
    };

    this.getTired = function(meinText) {
        window.console.log("pepperCtrl getTired: " + meinText);
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/TiredEvent", meinText);
    };

    this.sayGesture = function(gestureCmd, meinText) {
        finalText = meinText.replace("*", "^mode(disabled) " + gestureCmd + "^mode(contextual)");
        window.console.log("pepperCtrl sayGesture: " + finalText);
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/SayGestureEvent", finalText);
    };

    this.sayEvent = function(meinEvent, meinText) {
        window.console.log("pepperCtrl sayEvent: " + meinEvent + " " + meinText);
        if (isDesktop == false)
            switch (meinEvent) {
            case "Sax":
                $.raiseALMemoryEvent("SBR/Test/Tablet/PlaySaxEvent", meinText);
                break;
            default :
                $.raiseALMemoryEvent("SBR/Test/Tablet/TextEventBoy", "Ups, falscher Parameter");
            }
    };

    this.wegHinweis = function(direction, meinText) {
        window.console.log("pepperCtrl WegHinweis " + direction + meinText);
        if (isDesktop == false)
            if (direction == "left")
                $.raiseALMemoryEvent("SBR/Test/Tablet/DirectionLeftEvent", meinText);
            else
                $.raiseALMemoryEvent("SBR/Test/Tablet/DirectionRightEvent", meinText);
    };

    this.playSound = function(numSound) {
        window.console.log("pepperCtrl playSound num: " + numSound);
        // Pfad startet von ..../behavior_1
        soundFile = "/sounds/pling.wav";
        switch (numSound) {
        case 0:
            soundFile = "/sounds/pling.wav";
            break;
        case 1:
            soundFile = "/sounds/beep.wav";
            break;
        case 2:
            soundFile = "/sounds/slurp.wav";
            break;
        case 3:
            soundFile = "/sounds/toggle.wav";
            break;
        case 4:
            soundFile = "/sounds/clickOn.wav";
            break;
        case 5:
            soundFile = "/sounds/swipeR2L.wav";
            break;
        case 6:
            soundFile = "/sounds/swipeL2R.wav";
            break;
        case 7:
            soundFile = "/sounds/drop.wav";
            break;
        default:
            soundFile = "/sounds/pling.wav";
        }
        if (isDesktop == false)
            $.raiseALMemoryEvent("SBR/Test/Tablet/Sound", soundFile);
    };
}

