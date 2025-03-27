import "./globals.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";
import { captureConsoleLogs } from "./lib/logger";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

captureConsoleLogs();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
