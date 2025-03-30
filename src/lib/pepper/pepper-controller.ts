// provides API / Control-Functions of Pepper Robot

import { debugLogger } from "../logger";
import { EventTypes, qiHelper } from "./qihelper";

class PepperController {
  constructor() {
    debugLogger("PepperController initialisiert");
  }

  async animatedSpeak(
    role: PepperControllerRole,
    meinText: string,
  ): Promise<void> {
    debugLogger(`pepperCtrl animatedSpeak: ${role} ${meinText}`);
    if (role === PepperControllerRole.Boy) {
      await qiHelper.raiseALMemoryEvent(EventTypes.TextEventBoy, meinText);
    } else {
      await qiHelper.raiseALMemoryEvent(EventTypes.TextEventGirl, meinText);
    }
  }

  async animatedSpeakAngry(
    role: PepperControllerRole,
    meinText: string,
  ): Promise<void> {
    debugLogger(`pepperCtrl animatedSpeakAngry: ${role} ${meinText}`);
    await qiHelper.raiseALMemoryEvent(EventTypes.TextEventAngry, meinText);
  }

  async volPlus(): Promise<void> {
    debugLogger("pepperCtrl volPlus");
    await qiHelper.raiseALMemoryEvent(EventTypes.VolLauter);
  }

  async volMinus(): Promise<void> {
    debugLogger("pepperCtrl volMinus");
    await qiHelper.raiseALMemoryEvent(EventTypes.VolLeiser);
  }

  async setMute(): Promise<void> {
    debugLogger("pepperCtrl setMute");
    await qiHelper.raiseALMemoryEvent(EventTypes.MuteOnOff, 1);
  }

  async setUnmute(): Promise<void> {
    debugLogger("pepperCtrl setUnmute");
    await qiHelper.raiseALMemoryEvent(EventTypes.MuteOnOff, 0);
  }

  async winner(meinText: string): Promise<void> {
    debugLogger(`pepperCtrl winner: ${meinText}`);
    await qiHelper.raiseALMemoryEvent(EventTypes.WinnerEvent, meinText);
  }

  async looser(meinText: string): Promise<void> {
    debugLogger(`pepperCtrl looser: ${meinText}`);
    await qiHelper.raiseALMemoryEvent(EventTypes.LooserEvent, meinText);
  }

  async shutUp(): Promise<void> {
    debugLogger("pepperCtrl shutUp! ");
    await qiHelper.raiseALMemoryEvent(EventTypes.ShutUpEvent, "");
  }

  async shutUpAndContinue(): Promise<void> {
    debugLogger("pepperCtrl shutUp and Continue! ");
    await qiHelper.raiseALMemoryEvent(EventTypes.ShutUpContEvent, "");
  }

  async getTired(meinText: string): Promise<void> {
    debugLogger(`pepperCtrl getTired: ${meinText}`);
    await qiHelper.raiseALMemoryEvent(EventTypes.TiredEvent, meinText);
  }

  async sayGesture(gestureCmd: string, meinText: string): Promise<void> {
    const finalText = meinText.replace(
      "*",
      `^mode(disabled) ${gestureCmd}^mode(contextual)`,
    );
    debugLogger(`pepperCtrl sayGesture: ${finalText}`);
    await qiHelper.raiseALMemoryEvent(EventTypes.SayGestureEvent, finalText);
  }

  async sayEvent(meinEvent: "Sax", meinText: string): Promise<void> {
    debugLogger(`pepperCtrl sayEvent: ${meinEvent} ${meinText}`);
    switch (meinEvent) {
      case "Sax":
        await qiHelper.raiseALMemoryEvent(EventTypes.PlaySaxEvent, meinText);
        break;
      default:
        await qiHelper.raiseALMemoryEvent(
          EventTypes.TextEventBoy,
          "Ups, falscher Parameter",
        );
    }
  }

  async wegHinweis(direction: "left", meinText: string): Promise<void> {
    debugLogger(`pepperCtrl WegHinweis ${direction}${meinText}`);
    if (direction === "left") {
      await qiHelper.raiseALMemoryEvent(
        EventTypes.DirectionLeftEvent,
        meinText,
      );
    } else {
      await qiHelper.raiseALMemoryEvent(
        EventTypes.DirectionRightEvent,
        meinText,
      );
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
    await qiHelper.raiseALMemoryEvent(EventTypes.Sound, soundFile);
  }
}

export enum PepperControllerRole {
  Boy = "Boy",
  Girl = "Girl",
}

// prevent multiple instances of PepperController
let _pepperController: PepperController | undefined = undefined;
if (!_pepperController) {
  _pepperController = new PepperController();
}
export const pepperController = _pepperController;
