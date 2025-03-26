import { useEffect } from "react";

import type { PepperController } from "./pepperController";
import pepperController from "./pepperController";

/**
 * React hook for using the Pepper robot controller
 *
 * @returns The PepperController instance
 */
export function usePepper(): PepperController {
  useEffect(() => {
    // Initialize the Pepper controller when the component mounts
    pepperController.init();
  }, []);

  return pepperController;
}
