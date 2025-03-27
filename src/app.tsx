import type { JSX } from "react";
import React from "react";

import { Router } from "./lib/router";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App(): JSX.Element {
  return (
    <Router
      routes={{
        "/": <HomePage />,
        "/page-example": <HomePage />,
      }}
      notFoundPage={<NotFoundPage />}
    />
  );
}
