import type { JSX } from "react";
import React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { debugLogger, errorLogger, errorStorage } from "./lib/logger";
import { Router } from "./lib/router";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

const debug = true;

export function App(): JSX.Element {
  debugLogger("App rendered");
  errorLogger("App", { exampleData: "Test Data" });
  return (
    <div className="flex flex-col h-screen">
      <ConsoleWrapper>
        <Router
          routes={{
            "/": <HomePage />,
            "/page-example": <HomePage />,
          }}
          notFoundPage={<NotFoundPage />}
        />
      </ConsoleWrapper>
    </div>
  );
}

function ConsoleWrapper({ children }: { children: JSX.Element }): JSX.Element {
  return debug ? (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={75}>{children}</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <div className=" bg-blue-50 text-white p-4 h-full overflow-y-scroll">
          {errorStorage.map((element, index) => (
            <div key={index}>{element}</div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ) : (
    children
  );
}
