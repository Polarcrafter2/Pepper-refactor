import type { ReactNode } from "react";
import React, { createContext, useContext, useEffect } from "react";

import type { PepperController } from "./pepperController";
import { pepperController } from "./pepperController";

// Create a context for the Pepper controller
const PepperContext = createContext<PepperController | undefined>(undefined);

interface PepperProviderProps {
  children: ReactNode;
}

/**
 * Provider component for the Pepper controller
 */
export const PepperProvider: React.FC<PepperProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize the controller when the provider mounts
    pepperController.init();
  }, []);

  return (
    <PepperContext.Provider value={pepperController}>
      {children}
    </PepperContext.Provider>
  );
};

/**
 * Custom hook to use the Pepper controller
 */
export const usePepperContext = (): PepperController => {
  const context = useContext(PepperContext);

  if (context === undefined) {
    throw new Error("usePepperContext must be used within a PepperProvider");
  }

  return context;
};
