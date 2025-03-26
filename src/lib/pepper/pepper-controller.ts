// pepper-controller.ts: provides API / Control-Functions of Pepper Robot

import { debugLogger } from "../utils";
import { qiHelper } from "./qihelper";

// Check if jQuery is available
const useJQuery = typeof $ !== 'undefined' && $ !== null;

export class PepperController {
  public isProduction: boolean = process.env.NODE_ENV === "production";

  constructor() {
    debugLogger("PepperController initialisiert");
    // if (window.navigator.userAgent.indexOf("Windows NT") != -1) {
    //   this.isProduction = true;
    // }
    debugLogger("PepperController: this.isProduction= ", this.isProduction);
    debugLogger("PepperController: using " + (useJQuery ? "jQuery" : "QiHelper"));
  }

  private raiseALMemoryEvent(event: string, value: any): void {
    if (useJQuery) {
      $.raiseALMemoryEvent(event, value);
    } else {
      qiHelper.raiseALMemoryEvent(event, value);
    }
  }

  animatedSpeak(role: PepperControllerRole, meinText: string): void {
    debugLogger(`pepperCtrl animatedSpeak: ${role} ${meinText}`);
    // debug: $.raiseALMemoryEvent("SBR/Test/Tablet/TextEventGirl", "Hallo Test");
    if (!this.isProduction) {
      if (role === PepperControllerRole.Boy) {
        this.raiseALMemoryEvent("SBR/Test/Tablet/TextEventBoy", meinText);
      } else {
        this.raiseALMemoryEvent("SBR/Test/Tablet/TextEventGirl", meinText);
      }
    }
  }

  animatedSpeakAngry(role: PepperControllerRole, meinText: string): void {
    debugLogger(`pepperCtrl animatedSpeakAngry: ${role} ${meinText}`);
    // debug: $.raiseALMemoryEvent("SBR/Test/Tablet/TextEventGirl", "Hallo Test");
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/TextEventAngry", meinText);
    }
  }

  volPlus(): void {
    debugLogger("pepperCtrl volPlus");
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/VolLauter");
    }
  }

  volMinus(): void {
    debugLogger("pepperCtrl volMinus");
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/VolLeiser");
    }
  }

  setMute(): void {
    debugLogger("pepperCtrl setMute");
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/MuteOnOff", 1);
    }
  }

  setUnmute(): void {
    debugLogger("pepperCtrl setUnmute");
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/MuteOnOff", 0);
    }
  }

  winner(meinText: string): void {
    debugLogger(`pepperCtrl winner: ${meinText}`);
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/WinnerEvent", meinText);
    }
  }

  looser(meinText: string): void {
    debugLogger(`pepperCtrl looser: ${meinText}`);
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/LooserEvent", meinText);
    }
  }

  shutUp(): void {
    debugLogger("pepperCtrl shutUp! ");
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/ShutUpEvent", "");
    }
  }

  shutUpAndContinue(): void {
    debugLogger("pepperCtrl shutUp and Continue! ");
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/ShutUpContEvent", "");
    }
  }

  getTired(meinText: string): void {
    debugLogger(`pepperCtrl getTired: ${meinText}`);
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/TiredEvent", meinText);
    }
  }

  sayGesture(gestureCmd: string, meinText: string): void {
    const finalText = meinText.replace(
      "*",
      `^mode(disabled) ${gestureCmd}^mode(contextual)`,
    );
    debugLogger(`pepperCtrl sayGesture: ${finalText}`);
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/SayGestureEvent", finalText);
    }
  }

  sayEvent(meinEvent, meinText: string): void {
    debugLogger(`pepperCtrl sayEvent: ${meinEvent} ${meinText}`);
    if (!this.isProduction) {
      switch (meinEvent) {
        case "Sax":
          this.raiseALMemoryEvent("SBR/Test/Tablet/PlaySaxEvent", meinText);
          break;
        default:
          this.raiseALMemoryEvent(
            "SBR/Test/Tablet/TextEventBoy",
            "Ups, falscher Parameter",
          );
      }
    }
  }

  wegHinweis(direction: "left", meinText: string): void {
    debugLogger(`pepperCtrl WegHinweis ${direction}${meinText}`);
    if (!this.isProduction) {
      if (direction === "left") {
        this.raiseALMemoryEvent("SBR/Test/Tablet/DirectionLeftEvent", meinText);
      } else {
        this.raiseALMemoryEvent("SBR/Test/Tablet/DirectionRightEvent", meinText);
      }
    }
  }

  playSound(numSound: number): void {
    debugLogger(`pepperCtrl playSound num: ${numSound}`);
    // Pfad startet von ..../behavior_1
    let soundFile = "/sounds/pling.wav";
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
    if (!this.isProduction) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/Sound", soundFile);
    }
  }
}

export enum PepperControllerRole {
  Boy = "Boy",
}
