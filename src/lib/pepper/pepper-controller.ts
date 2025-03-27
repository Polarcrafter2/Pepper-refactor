// pepper-controller.ts: provides API / Control-Functions of Pepper Robot

import { debugLogger } from "../logger";
import { qiHelper } from "./qihelper";

export class PepperController {
  // eslint-disable-next-line node/no-process-env
  public isProduction: boolean = process.env["NODE_ENV"] === "production";

  constructor() {
    debugLogger("PepperController initialisiert");
    // if (window.navigator.userAgent.indexOf("Windows NT") != -1) {
    //   this.isProduction = true;
    // }
    debugLogger("PepperController: this.isProduction= ", this.isProduction);
  }

  async animatedSpeak(
    role: PepperControllerRole,
    meinText: string,
  ): Promise<void> {
    debugLogger(`pepperCtrl animatedSpeak: ${role} ${meinText}`);
    // debug: $.raiseALMemoryEvent("SBR/Test/Tablet/TextEventGirl", "Hallo Test");
    if (!this.isProduction) {
      if (role === PepperControllerRole.Boy) {
        await qiHelper.raiseALMemoryEvent(
          "SBR/Test/Tablet/TextEventBoy",
          meinText,
        );
      } else {
        await qiHelper.raiseALMemoryEvent(
          "SBR/Test/Tablet/TextEventGirl",
          meinText,
        );
      }
    }
  }

  async animatedSpeakAngry(
    role: PepperControllerRole,
    meinText: string,
  ): Promise<void> {
    debugLogger(`pepperCtrl animatedSpeakAngry: ${role} ${meinText}`);
    // debug: $.raiseALMemoryEvent("SBR/Test/Tablet/TextEventGirl", "Hallo Test");
    if (!this.isProduction) {
      await qiHelper.raiseALMemoryEvent(
        "SBR/Test/Tablet/TextEventAngry",
        meinText,
      );
    }
  }

  async volPlus(): Promise<void> {
    debugLogger("pepperCtrl volPlus");
    if (!this.isProduction) {
      await qiHelper.raiseALMemoryEvent("SBR/Test/Tablet/VolLauter");
    }
  }

  async volMinus(): Promise<void> {
    debugLogger("pepperCtrl volMinus");
    if (!this.isProduction) {
      await qiHelper.raiseALMemoryEvent("SBR/Test/Tablet/VolLeiser");
    }
  }

  async setMute(): Promise<void> {
    debugLogger("pepperCtrl setMute");
    if (!this.isProduction) {
      await qiHelper.raiseALMemoryEvent("SBR/Test/Tablet/MuteOnOff", 1);
    }
  }

  async setUnmute(): Promise<void> {
    debugLogger("pepperCtrl setUnmute");
    if (!this.isProduction) {
      await qiHelper.raiseALMemoryEvent("SBR/Test/Tablet/MuteOnOff", 0);
    }
  }

  async winner(meinText: string): Promise<void> {
    debugLogger(`pepperCtrl winner: ${meinText}`);
    if (!this.isProduction) {
      await qiHelper.raiseALMemoryEvent(
        "SBR/Test/Tablet/WinnerEvent",
        meinText,
      );
    }
  }

  async looser(meinText: string): Promise<void> {
    debugLogger(`pepperCtrl looser: ${meinText}`);
    if (!this.isProduction) {
      await qiHelper.raiseALMemoryEvent(
        "SBR/Test/Tablet/LooserEvent",
        meinText,
      );
    }
  }

  async shutUp(): Promise<void> {
    debugLogger("pepperCtrl shutUp! ");
    if (!this.isProduction) {
      await qiHelper.raiseALMemoryEvent("SBR/Test/Tablet/ShutUpEvent", "");
    }
  }

  async shutUpAndContinue(): Promise<void> {
    debugLogger("pepperCtrl shutUp and Continue! ");
    if (!this.isProduction) {
      await qiHelper.raiseALMemoryEvent("SBR/Test/Tablet/ShutUpContEvent", "");
    }
  }

  async getTired(meinText: string): Promise<void> {
    debugLogger(`pepperCtrl getTired: ${meinText}`);
    if (!this.isProduction) {
      await qiHelper.raiseALMemoryEvent("SBR/Test/Tablet/TiredEvent", meinText);
    }
  }

  async sayGesture(gestureCmd: string, meinText: string): Promise<void> {
    const finalText = meinText.replace(
      "*",
      `^mode(disabled) ${gestureCmd}^mode(contextual)`,
    );
    debugLogger(`pepperCtrl sayGesture: ${finalText}`);
    if (!this.isProduction) {
      await qiHelper.raiseALMemoryEvent(
        "SBR/Test/Tablet/SayGestureEvent",
        finalText,
      );
    }
  }

  async sayEvent(meinEvent: "Sax", meinText: string): Promise<void> {
    debugLogger(`pepperCtrl sayEvent: ${meinEvent} ${meinText}`);
    if (!this.isProduction) {
      switch (meinEvent) {
        case "Sax":
          await qiHelper.raiseALMemoryEvent(
            "SBR/Test/Tablet/PlaySaxEvent",
            meinText,
          );
          break;
        default:
          await qiHelper.raiseALMemoryEvent(
            "SBR/Test/Tablet/TextEventBoy",
            "Ups, falscher Parameter",
          );
      }
    }
  }

  async wegHinweis(direction: "left", meinText: string): Promise<void> {
    debugLogger(`pepperCtrl WegHinweis ${direction}${meinText}`);
    if (!this.isProduction) {
      if (direction === "left") {
        await qiHelper.raiseALMemoryEvent(
          "SBR/Test/Tablet/DirectionLeftEvent",
          meinText,
        );
      } else {
        await qiHelper.raiseALMemoryEvent(
          "SBR/Test/Tablet/DirectionRightEvent",
          meinText,
        );
      }
    }
  }

  async playSound(numSound: number): Promise<void> {
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
      await qiHelper.raiseALMemoryEvent("SBR/Test/Tablet/Sound", soundFile);
    }
  }
}

export enum PepperControllerRole {
  Boy = "Boy",
}
