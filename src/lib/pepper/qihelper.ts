// /**
//  * This file is required to properly interact with the Pepper robot
//  */

// import { debugLogger, errorLogger } from "../logger";
// import { tryCatch, tryCatchAsync } from "../utils";

// /**
//  * QiHelper
//  *
//  * A class-based implementation for interacting with QiMessaging
//  * Provides similar functionality to jquery.qimhelpers.js without jQuery dependency
//  */
// declare class QiSession {
//   constructor(onConnect: (session: any) => void, onDisconnect: () => void);
//   service(name: "ALMemory"): Promise<ALMemoryType>;
//   socket(): any;
// }

// interface ALMemoryType {
//   subscriber: (event: EventTypes) => Promise<ALMemorySubscriber>;
//   raiseEvent: (event: EventTypes, value?: number | string) => Promise<void>;
// }

// interface ALMemorySubscriber {
//   signal: {
//     connect: (callback: (value: any) => void) => Promise<number>;
//     disconnect: (id: number) => Promise<void>;
//   };
// }

// add all event types here to get type safety
export enum EventTypes {
  TextEventBoy = "SBR/Test/Tablet/TextEventBoy",
  PlaySaxEvent = "SBR/Test/Tablet/PlaySaxEvent",
  TextEventGirl = "SBR/Test/Tablet/TextEventGirl",
  TextEventAngry = "SBR/Test/Tablet/TextEventAngry",
  VolLauter = "SBR/Test/Tablet/VolLauter",
  VolLeiser = "SBR/Test/Tablet/VolLeiser",
  MuteOnOff = "SBR/Test/Tablet/MuteOnOff",
  WinnerEvent = "SBR/Test/Tablet/WinnerEvent",
  LooserEvent = "SBR/Test/Tablet/LooserEvent",
  ShutUpEvent = "SBR/Test/Tablet/ShutUpEvent",
  ShutUpContEvent = "SBR/Test/Tablet/ShutUpContEvent",
  TiredEvent = "SBR/Test/Tablet/TiredEvent",
  SayGestureEvent = "SBR/Test/Tablet/SayGestureEvent",
  DirectionLeftEvent = "SBR/Test/Tablet/DirectionLeftEvent",
  DirectionRightEvent = "SBR/Test/Tablet/DirectionRightEvent",
  Sound = "SBR/Test/Tablet/Sound",
}

// class MemoryEventSubscription {
//   private _event: string;
//   private internalId: number | undefined;
//   private sub: ALMemorySubscriber | undefined;
//   private unsubscribeNotProgress: boolean;
//   private unsubscribeCallback?: (() => void) | undefined;

//   constructor(event: string) {
//     this._event = event;
//     this.internalId = undefined;
//     this.sub = undefined;
//     this.unsubscribeNotProgress = false;
//   }

//   async setId(id: number): Promise<void> {
//     await tryCatchAsync(async () => {
//       this.internalId = id;
//       // as id can be received after unsubscribe call, defer
//       if (this.unsubscribeNotProgress) {
//         await this.unsubscribe(this.unsubscribeCallback);
//       }
//     });
//   }

//   async setSubscriber(sub: ALMemorySubscriber): Promise<void> {
//     await tryCatchAsync(async () => {
//       this.sub = sub;
//       // as sub can be received after unsubscribe call, defer
//       if (this.unsubscribeNotProgress) {
//         await this.unsubscribe(this.unsubscribeCallback);
//       }
//     });
//   }

//   async unsubscribe(unsubscribeDoneCallback?: () => void): Promise<void> {
//     await tryCatchAsync(async () => {
//       if (this.internalId !== null && this.sub !== null) {
//         if (this.internalId === undefined) {
//           errorLogger("No internalId available for unsubscribe");
//           return;
//         }
//         if (this.sub === undefined) {
//           errorLogger("No subscriber available for unsubscribe");
//           return;
//         }
//         this.unsubscribeNotProgress = false;
//         this.unsubscribeCallback = undefined;
//         await this.sub.signal.disconnect(this.internalId);
//         unsubscribeDoneCallback?.();
//       } else {
//         this.unsubscribeNotProgress = true;
//         this.unsubscribeCallback = unsubscribeDoneCallback;
//       }
//     });
//   }
// }

// class QiHelper {
//   private qiSession: QiSession | undefined;
//   private servicePromises: Record<string, Promise<ALMemoryType>> = {};

//   public isProduction: boolean = false;

//   constructor() {
//     tryCatch(() => {
//       debugLogger("PepperController initialisiert");
//       if (window.navigator.userAgent.indexOf("Windows NT") !== -1) {
//         this.isProduction = true;
//         this.qiSession = new QiSession(
//           () => {
//             debugLogger("connected");
//           },
//           () => {
//             errorLogger("disconnected");
//           },
//         );
//       }
//       debugLogger("PepperController: this.isProduction= ", this.isProduction);
//     });
//   }

//   /**
//    * Helper function for getting services
//    * - Lighter syntax: qiHelper.getService('ALServiceName', (ALServiceName) => {ALServiceName.doThings()});
//    * - Caches services, increasing efficiency
//    * - Warns you for missing services (no need to add fail() callbacks on all your functions)
//    */
//   async getService(
//     serviceName: "ALMemory",
//     doneCallback: (service: ALMemoryType | undefined) => void | Promise<void>,
//   ): Promise<void> {
//     await tryCatchAsync(async () => {
//       if (!(serviceName in this.servicePromises)) {
//         if (!this.qiSession) {
//           errorLogger("No QiSession available in getService");
//           return;
//         }
//         this.servicePromises[serviceName] = this.qiSession.service(serviceName);
//       }
//       const result = await this.servicePromises[serviceName];
//       await doneCallback(result);
//     });
//   }

//   /**
//    * Helper function for directly raising an ALMemory event
//    */
//   raiseALMemoryEvent(
//     event: EventTypes,
//     value?: number | string,
//   ): Promise<void> {
//     if (!qiHelper.isProduction) {
//       return Promise.resolve();
//     }

//     return tryCatchAsync(async () => {
//       return this.getService("ALMemory", async (ALMemory) => {
//         await tryCatchAsync(async () => {
//           if (!ALMemory) {
//             errorLogger("ALMemory service not available");
//             return;
//           }
//           await ALMemory.raiseEvent(event, value);
//         });
//       });
//     });
//   }

//   /**
//    * Helper function for subscribing to ALMemory events.
//    * Usage:
//    *  qiHelper.subscribeToALMemoryEvent('myEvent', (eventValue) => {
//    *      console.log("Got myEvent: " + value);
//    *  });
//    *  As an optional third parameter, you can pass a function to be called once
//    *  the subscription is successful.
//    */
//   async subscribeToALMemoryEvent(
//     event: EventTypes,
//     eventCallback: (value: any) => void,
//     subscribeDoneCallback?: (id: number) => void,
//   ): Promise<MemoryEventSubscription> {
//     const evt = new MemoryEventSubscription(event);

//     await tryCatchAsync(async () => {
//       if (!this.qiSession) {
//         errorLogger("No QiSession available in subscribeToALMemoryEvent");
//         return;
//       }

//       // Get ALMemory service
//       if (!("ALMemory" in this.servicePromises)) {
//         this.servicePromises["ALMemory"] = this.qiSession.service("ALMemory");
//       }

//       const ALMemory = await this.servicePromises["ALMemory"];
//       const sub = await ALMemory.subscriber(event);
//       await evt.setSubscriber(sub);

//       try {
//         const id = await sub.signal.connect(eventCallback);
//         await evt.setId(id);
//         subscribeDoneCallback?.(id);
//       } catch (error) {
//         errorLogger("Error subscribing to event:", error);
//       }
//     });

//     return evt;
//   }
// }

// // prevent multiple instances of QiHelper
// let _qiHelper: QiHelper | undefined = undefined;
// if (!_qiHelper) {
//   _qiHelper = new QiHelper();
// }
// export const qiHelper = _qiHelper;
