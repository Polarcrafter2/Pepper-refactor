// // polyfills for older browsers
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import "./globals.css";

import React from "react";
import ReactDOM from "react-dom/client";

// import { App } from "./app";
import { captureConsoleLogs } from "./lib/logger";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

captureConsoleLogs();

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div className="h-screen w-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold underline">
        Hello World, im not insane
      </h1>
    </div>
  </React.StrictMode>,
);
