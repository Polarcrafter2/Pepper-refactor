import type { ReactNode } from "react";
import React, { useEffect } from "react";

import { PepperProvider } from "@/lib/pepper/PepperContext";
import { adjustViewport } from "@/lib/responsive/viewport";

import ControlPanel from "./ControlPanel";

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Main layout for the application, includes the PepperProvider
 * and handles viewport adjustments
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useEffect(() => {
    // Adjust the viewport when the component mounts
    adjustViewport();
  }, []);

  return (
    <PepperProvider>
      <div className="min-h-screen flex flex-col">
        <header className="bg-primary text-primary-foreground p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Pepper Information Terminal</h1>
            <ControlPanel />
          </div>
        </header>

        <main className="flex-grow container mx-auto p-4">{children}</main>

        <footer className="bg-muted p-4">
          <div className="container mx-auto text-center text-sm">
            &copy; {new Date().getFullYear()} HFU - Modern Pepper Interface
          </div>
        </footer>
      </div>
    </PepperProvider>
  );
};

export default MainLayout;
