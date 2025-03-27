import type { JSX } from "react";
import React from "react";

export function App(): JSX.Element {
  const qiSession = typeof QiSession !== "undefined" && QiSession;
  const hasQiSession = !!qiSession;
  return (
    <div>
      Hello hasQiSession: {hasQiSession ? "true" : "false"}
      QiSessionm: {JSON.stringify(qiSession)}
    </div>
  );
}
