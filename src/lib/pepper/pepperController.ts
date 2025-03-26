/**
 * PepperController: Provides API/control functions for the Pepper Robot
 * Migrated from the original jQuery-based implementation to TypeScript
 */

export type Role = "Boy" | "Girl";
export type Direction = "left" | "right";
export type SoundType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type MuteState = 0 | 1;

export interface PepperControllerInterface {
  init: () => void;
  animatedSpeak: (role: Role, text: string) => void;
  animatedSpeakAngry: (role: Role, text: string) => void;
  volPlus: () => void;
  volMinus: () => void;
  setMute: () => void;
  setUnmute: () => void;
  winner: (text: string) => void;
  looser: (text: string) => void;
  shutUp: () => void;
  shutUpAndContinue: () => void;
  getTired: (text: string) => void;
  sayGesture: (gestureCmd: string, text: string) => void;
  sayEvent: (event: string, text: string) => void;
  wegHinweis: (direction: Direction, text: string) => void;
  playSound: (numSound: SoundType) => void;
}

export class PepperController implements PepperControllerInterface {
  private isDesktop: boolean = false;

  /**
   * Initialize the Pepper Controller
   */
  public init = (): void => {
    console.log("PepperController initialized");
    // Check if running on desktop (Windows) - if so, don't call pepper functions
    if (window.navigator.userAgent.indexOf("Windows NT") !== -1) {
      this.isDesktop = true;
    }
    console.log("PepperController: isDesktop=", this.isDesktop);
  };

  /**
   * Have the robot speak with animation in a specific character role
   */
  public animatedSpeak = (role: Role, text: string): void => {
    console.log(`pepperCtrl animatedSpeak: ${role} ${text}`);
    if (!this.isDesktop) {
      if (role === "Boy") {
        this.raiseALMemoryEvent("SBR/Test/Tablet/TextEventBoy", text);
      } else {
        this.raiseALMemoryEvent("SBR/Test/Tablet/TextEventGirl", text);
      }
    }
  };

  /**
   * Have the robot speak with angry animation
   */
  public animatedSpeakAngry = (role: Role, text: string): void => {
    console.log(`pepperCtrl animatedSpeakAngry: ${role} ${text}`);
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/TextEventAngry", text);
    }
  };

  /**
   * Increase robot's volume
   */
  public volPlus = (): void => {
    console.log("pepperCtrl volPlus");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/VolLauter");
    }
  };

  /**
   * Decrease robot's volume
   */
  public volMinus = (): void => {
    console.log("pepperCtrl volMinus");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/VolLeiser");
    }
  };

  /**
   * Mute the robot
   */
  public setMute = (): void => {
    console.log("pepperCtrl setMute");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/MuteOnOff", 1);
    }
  };

  /**
   * Unmute the robot
   */
  public setUnmute = (): void => {
    console.log("pepperCtrl setUnmute");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/MuteOnOff", 0);
    }
  };

  /**
   * Trigger winner behavior with text
   */
  public winner = (text: string): void => {
    console.log(`pepperCtrl winner: ${text}`);
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/WinnerEvent", text);
    }
  };

  /**
   * Trigger loser behavior with text
   */
  public looser = (text: string): void => {
    console.log(`pepperCtrl looser: ${text}`);
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/LooserEvent", text);
    }
  };

  /**
   * Stop the robot from talking
   */
  public shutUp = (): void => {
    console.log("pepperCtrl shutUp!");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/ShutUpEvent", "");
    }
  };

  /**
   * Stop the robot from talking and continue
   */
  public shutUpAndContinue = (): void => {
    console.log("pepperCtrl shutUp and Continue!");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/ShutUpContEvent", "");
    }
  };

  /**
   * Trigger tired behavior with text
   */
  public getTired = (text: string): void => {
    console.log(`pepperCtrl getTired: ${text}`);
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/TiredEvent", text);
    }
  };

  /**
   * Have the robot say something with a specific gesture
   */
  public sayGesture = (gestureCmd: string, text: string): void => {
    const finalText = text.replace(
      "*",
      `^mode(disabled) ${gestureCmd}^mode(contextual)`,
    );
    console.log(`pepperCtrl sayGesture: ${finalText}`);
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/SayGestureEvent", finalText);
    }
  };

  /**
   * Have the robot say something with a specific event animation
   */
  public sayEvent = (event: string, text: string): void => {
    console.log(`pepperCtrl sayEvent: ${event} ${text}`);
    if (!this.isDesktop) {
      switch (event) {
        case "Sax":
          this.raiseALMemoryEvent("SBR/Test/Tablet/PlaySaxEvent", text);
          break;
        default:
          this.raiseALMemoryEvent(
            "SBR/Test/Tablet/TextEventBoy",
            "Ups, falscher Parameter",
          );
      }
    }
  };

  /**
   * Have the robot give directional hints
   */
  public wegHinweis = (direction: Direction, text: string): void => {
    console.log(`pepperCtrl WegHinweis ${direction} ${text}`);
    if (!this.isDesktop) {
      if (direction === "left") {
        this.raiseALMemoryEvent("SBR/Test/Tablet/DirectionLeftEvent", text);
      } else {
        this.raiseALMemoryEvent("SBR/Test/Tablet/DirectionRightEvent", text);
      }
    }
  };

  /**
   * Play a sound on the robot
   */
  public playSound = (numSound: SoundType): void => {
    console.log(`pepperCtrl playSound num: ${numSound}`);
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

    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/Sound", soundFile);
    }
  };

  /**
   * Helper method to raise events to the robot's ALMemory system
   */
  private raiseALMemoryEvent = (event: string, value: any = null): void => {
    if (window.$ && window.$.raiseALMemoryEvent) {
      window.$.raiseALMemoryEvent(event, value);
    } else {
      console.warn(
        `Cannot raise event ${event}: $.raiseALMemoryEvent is not available`,
      );
    }
  };
}

// Add type definitions for the jQuery extension
declare global {
  interface Window {
    $: {
      raiseALMemoryEvent: (event: string, value: any) => void;
    } & JQuery;
  }
  interface JQuery {
    raiseALMemoryEvent: (event: string, value: any) => void;
  }
}

// Export a singleton instance
export const pepperController = new PepperController();
export default pepperController;
