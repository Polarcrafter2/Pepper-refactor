import "./globals.css";

import type { JSX } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { APage } from "./app/a-page/page";
import { Layout } from "./app/layout";
import { HomePage } from "./app/page";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="a-page" element={<APage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
