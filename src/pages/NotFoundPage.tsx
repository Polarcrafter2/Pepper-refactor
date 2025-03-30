import type { JSX } from "react";
import React from "react";

import { Button } from "@/components/ui/button";
import { useNavigation } from "@/lib/router";

export function NotFoundPage(): JSX.Element {
  const { push, back } = useNavigation();
  return (
    <div>
      <h1 className="text-6xl">404 not found </h1>
      <Button onClick={() => push("/")}>Back</Button>
      <Button onClick={back}>Home</Button>
    </div>
  );
}
