/**
 * QiHelper
 * 
 * A non-jQuery implementation for interacting with QiMessaging
 * Provides similar functionality to jquery.qimhelpers.js without jQuery dependency
 */

export class QiHelper {
  private qim: any;
  private servicePromises: Record<string, Promise<any>> = {};
  
  constructor() {
    this.qim = new QiSession(
      (session: any) => {
        console.log("QiHelper: connected");
      }, 
      () => {
        console.log("QiHelper: disconnected");
      }
    );
  }

  /**
   * Get a service from QiMessaging
   */
  getService(serviceName: string): Promise<any> {
    if (!(serviceName in this.servicePromises)) {
      this.servicePromises[serviceName] = this.qim.service(serviceName);
    }
    
    return this.servicePromises[serviceName].catch((error: any) => {
      console.log(`Failed getting ${serviceName}: ${error}`);
      throw error;
    });
  }

  /**
   * Raise an ALMemory event
   */
  raiseALMemoryEvent(event: string, value: any): Promise<void> {
    return this.getService("ALMemory").then((ALMemory: any) => {
      return ALMemory.raiseEvent(event, value);
    });
  }

  /**
   * Subscribe to an ALMemory event
   */
  subscribeToALMemoryEvent(
    event: string, 
    eventCallback: (value: any) => void, 
    subscribeDoneCallback?: (id: string) => void
  ): any {
    const subscription = {
      _event: event,
      _internalId: null as string | null,
      _sub: null as any,
      _unsubscribe: false,
      _unsubscribeCallback: null as (() => void) | null,
      
      setId(id: string) {
        this._internalId = id;
        if (this._unsubscribe) this.unsubscribe(this._unsubscribeCallback);
      },
      
      setSubscriber(sub: any) {
        this._sub = sub;
        if (this._unsubscribe) this.unsubscribe(this._unsubscribeCallback);
      },
      
      unsubscribe(unsubscribeDoneCallback?: () => void) {
        if (this._internalId !== null && this._sub !== null) {
          this._sub.signal.disconnect(this._internalId).then(() => {
            if (unsubscribeDoneCallback) unsubscribeDoneCallback();
          }).catch((error: any) => {
            console.log(`Failed to unsubscribe from ${this._event}: ${error}`);
          });
        } else {
          this._unsubscribe = true;
          this._unsubscribeCallback = unsubscribeDoneCallback || null;
        }
      }
    };
    
    this.getService("ALMemory").then((ALMemory: any) => {
      return ALMemory.subscriber(event);
    }).then((sub: any) => {
      subscription.setSubscriber(sub);
      return sub.signal.connect(eventCallback);
    }).then((id: string) => {
      subscription.setId(id);
      if (subscribeDoneCallback) subscribeDoneCallback(id);
    }).catch((error: any) => {
      console.log(`Failed to subscribe to ${event}: ${error}`);
    });
    
    return subscription;
  }
}

// Create a singleton instance
export const qiHelper = new QiHelper();
