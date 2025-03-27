/**
 * QiHelper
 *
 * A class-based implementation for interacting with QiMessaging
 * Provides similar functionality to jquery.qimhelpers.js without jQuery dependency
 */

import { debugLogger, errorLogger } from "../logger";

declare class QiSession {
  constructor(onConnect: (session: any) => void, onDisconnect: () => void);
  service(name: string): Promise<any>;
  socket(): any;
}

class MemoryEventSubscription {
  private _event: string;
  private _internalId: number | null;
  private _sub: any;
  private _unsubscribe: boolean;
  private _unsubscribeCallback?: () => void;

  constructor(event: string) {
    this._event = event;
    this._internalId = null;
    this._sub = null;
    this._unsubscribe = false;
  }

  setId(id: number): void {
    this._internalId = id;
    // as id can be received after unsubscribe call, defer
    if (this._unsubscribe) {
      this.unsubscribe(this._unsubscribeCallback);
    }
  }

  setSubscriber(sub: any): void {
    this._sub = sub;
    // as sub can be received after unsubscribe call, defer
    if (this._unsubscribe) {
      this.unsubscribe(this._unsubscribeCallback);
    }
  }

  unsubscribe(unsubscribeDoneCallback?: () => void): void {
    if (this._internalId !== null && this._sub !== null) {
      const evtSubscription = this;
      evtSubscription._sub.signal
        .disconnect(evtSubscription._internalId)
        .then(() => {
          if (unsubscribeDoneCallback) {
            unsubscribeDoneCallback();
          }
        }, this.onQimError);
    } else {
      this._unsubscribe = true;
      this._unsubscribeCallback = unsubscribeDoneCallback;
    }
  }

  private onQimError(data: any): void {
    errorLogger(`Service error: ${data}`);
  }
}

export class QiHelper {
  private qiSession: QiSession;
  private servicePromises: Record<string, Promise<any>> = {};

  constructor() {
    this.qiSession = new QiSession(() => {
      debugLogger("connected");
    }, this.disconnected);
  }

  private disconnected(): void {
    errorLogger("disconnected");
  }

  private onQimError(data: any): void {
    errorLogger(`Service error: ${data}`);
  }

  /**
   * Helper function for getting services
   * - Lighter syntax: qiHelper.getService('ALServiceName', (ALServiceName) => {ALServiceName.doThings()});
   * - Caches services, increasing efficiency
   * - Warns you for missing services (no need to add fail() callbacks on all your functions)
   */
  async getService<T = any>(
    serviceName: string,
    doneCallback: (service: T) => void,
  ): Promise<T> {
    if (!(serviceName in this.servicePromises)) {
      this.servicePromises[serviceName] = this.qiSession.service(serviceName);
    }
    return this.servicePromises[serviceName].then(doneCallback, (error) => {
      errorLogger(`Failed getting ${serviceName}: ${error}`);
    });
  }

  /**
   * Helper function for directly raising an ALMemory event
   */
  raiseALMemoryEvent(event: string, value?: number | string): Promise<void> {
    return this.getService("ALMemory", (ALMemory) => {
      ALMemory.raiseEvent(event, value);
    });
  }

  /**
   * Helper function for subscribing to ALMemory events.
   * Usage:
   *  qiHelper.subscribeToALMemoryEvent('myEvent', (eventValue) => {
   *      console.log("Got myEvent: " + value);
   *  });
   *  As an optional third parameter, you can pass a function to be called once
   *  the subscription is successful.
   */
  async subscribeToALMemoryEvent(
    event: string,
    eventCallback: (value: any) => void,
    subscribeDoneCallback?: (id: number) => void,
  ): Promise<MemoryEventSubscription> {
    const evt = new MemoryEventSubscription(event);
    await this.getService("ALMemory", (ALMemory) => {
      ALMemory.subscriber(event).then((sub: any) => {
        evt.setSubscriber(sub);
        sub.signal.connect(eventCallback).then((id: number) => {
          evt.setId(id);
          if (subscribeDoneCallback) {
            subscribeDoneCallback(id);
          }
        }, this.onQimError);
      }, this.onQimError);
    });
    return evt;
  }
}

export const qiHelper = new QiHelper();
