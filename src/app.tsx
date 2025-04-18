import type { JSX } from "react";
import React from "react";

import { debugLogger, errorLogger, errorStorage } from "./lib/logger";
import { Router } from "./lib/router";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

// set this to true to enable the console
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
            "/page-example": <ContactPage />,
            "/notFound": <NotFoundPage />,
          }}
          notFoundPage={<NotFoundPage />}
        />
      </ConsoleWrapper>
    </div>
  );
}

function ConsoleWrapper({ children }: { children: JSX.Element }): JSX.Element {
  return debug ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: "60vh", maxHeight: "60vh" }}>{children}</div>
      <div style={{ height: "40vh" }}>

    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={75}>{children}</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <div className="bg-blue-50 text-black p-4 h-full overflow-y-scroll">
          {errorStorage.map((element, index) => (
            <div key={index}>{element}</div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    // <ResizablePanelGroup direction="vertical">
    //   <ResizablePanel defaultSize={75}>{children}</ResizablePanel>
    //   <ResizableHandle withHandle />
    //   <ResizablePanel defaultSize={25}>
    //     <div className="bg-blue-50 text-black p-4 h-full overflow-y-scroll">
    //       {errorStorage.map((element, index) => (
    //         <div key={index}>{element}</div>
    //       ))}
    //     </div>
    //   </ResizablePanel>
    // </ResizablePanelGroup>
    children
  );
}
