/**
 * PepperService: provides API / Control-Functions of Pepper Robot
 */

type Role = "Boy" | "Girl";
type Direction = "left" | "right";
type SayEvent = "Sax" | string;
type MuteState = 0 | 1;

export class PepperService {
  private isDesktop: boolean = false;

  constructor() {
    console.log("PepperService initialized");
    // Check if running on a real Pepper with tablet
    // if Windows system: don't call pepper-functions
    if (window.navigator.userAgent.indexOf("Windows NT") !== -1) {
      this.isDesktop = true;
    }
    console.log("PepperService: isDesktop=", this.isDesktop);
  }

  /**
   * Make Pepper speak with animation
   * @param role Character role (Boy or Girl)
   * @param text Text to speak
   */
  public animatedSpeak(role: Role, text: string): void {
    console.log(`PepperService animatedSpeak: ${role} ${text}`);
    if (!this.isDesktop) {
      if (role === "Boy") {
        this.raiseALMemoryEvent("SBR/Test/Tablet/TextEventBoy", text);
      } else {
        this.raiseALMemoryEvent("SBR/Test/Tablet/TextEventGirl", text);
      }
    }
  }

  /**
   * Make Pepper speak in an angry tone
   * @param role Character role (Boy or Girl)
   * @param text Text to speak
   */
  public animatedSpeakAngry(role: Role, text: string): void {
    console.log(`PepperService animatedSpeakAngry: ${role} ${text}`);
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/TextEventAngry", text);
    }
  }

  /**
   * Increase the volume
   */
  public volPlus(): void {
    console.log("PepperService volPlus");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/VolLauter");
    }
  }

  /**
   * Decrease the volume
   */
  public volMinus(): void {
    console.log("PepperService volMinus");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/VolLeiser");
    }
  }

  /**
   * Mute the robot
   */
  public setMute(): void {
    console.log("PepperService setMute");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/MuteOnOff", 1);
    }
  }

  /**
   * Unmute the robot
   */
  public setUnmute(): void {
    console.log("PepperService setUnmute");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/MuteOnOff", 0);
    }
  }

  /**
   * Trigger winner event
   * @param text Text to speak
   */
  public winner(text: string): void {
    console.log(`PepperService winner: ${text}`);
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/WinnerEvent", text);
    }
  }

  /**
   * Trigger loser event
   * @param text Text to speak
   */
  public looser(text: string): void {
    console.log(`PepperService looser: ${text}`);
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/LooserEvent", text);
    }
  }

  /**
   * Make Pepper stop talking
   */
  public shutUp(): void {
    console.log("PepperService shutUp!");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/ShutUpEvent", "");
    }
  }

  /**
   * Make Pepper stop talking and continue
   */
  public shutUpAndContinue(): void {
    console.log("PepperService shutUp and Continue!");
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/ShutUpContEvent", "");
    }
  }

  /**
   * Make Pepper appear tired
   * @param text Text to speak
   */
  public getTired(text: string): void {
    console.log(`PepperService getTired: ${text}`);
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/TiredEvent", text);
    }
  }

  /**
   * Make Pepper speak with a gesture
   * @param gestureCmd Gesture command
   * @param text Text to speak
   */
  public sayGesture(gestureCmd: string, text: string): void {
    const finalText = text.replace(
      "*",
      `^mode(disabled) ${gestureCmd}^mode(contextual)`,
    );
    console.log(`PepperService sayGesture: ${finalText}`);
    if (!this.isDesktop) {
      this.raiseALMemoryEvent("SBR/Test/Tablet/SayGestureEvent", finalText);
    }
  }

  /**
   * Trigger a say event
   * @param event Event type
   * @param text Text to speak
   */
  public sayEvent(event: SayEvent, text: string): void {
    console.log(`PepperService sayEvent: ${event} ${text}`);
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
  }

  /**
   * Show direction hint
   * @param direction Direction (left or right)
   * @param text Text to speak
   */
  public wegHinweis(direction: Direction, text: string): void {
    console.log(`PepperService wegHinweis ${direction} ${text}`);
    if (!this.isDesktop) {
      if (direction === "left") {
        this.raiseALMemoryEvent("SBR/Test/Tablet/DirectionLeftEvent", text);
      } else {
        this.raiseALMemoryEvent("SBR/Test/Tablet/DirectionRightEvent", text);
      }
    }
  }

  /**
   * Play a sound
   * @param soundNumber Sound number (0-7)
   */
  public playSound(soundNumber: number): void {
    console.log(`PepperService playSound num: ${soundNumber}`);
    let soundFile = "/sounds/pling.wav";

    switch (soundNumber) {
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
  }

  /**
   * Helper method to trigger ALMemory events
   * In a real implementation, this would communicate with the Pepper robot
   */
  private raiseALMemoryEvent(event: string, data?: string | number): void {
    if (
      typeof window.$ !== "undefined" &&
      typeof window.$.raiseALMemoryEvent === "function"
    ) {
      if (data !== undefined) {
        window.$.raiseALMemoryEvent(event, data);
      } else {
        window.$.raiseALMemoryEvent(event);
      }
    } else {
      console.log(`Mock raiseALMemoryEvent: ${event}`, data);
    }
  }
}

// Add type definitions for global namespace
declare global {
  interface Window {
    $: {
      raiseALMemoryEvent: (event: string, data?: string | number) => void;
    };
  }
}

// Create a singleton instance that can be imported and used throughout the app
export const pepperService = new PepperService();
