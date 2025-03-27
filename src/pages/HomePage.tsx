import type { JSX } from "react";
import React from "react";

import { Button } from "@/components/ui/button";
import { useNavigation } from "@/lib/router";

export function HomePage(): JSX.Element {
  const { push, back } = useNavigation();
  return (
    <div>
      <h1 className="text-6xl">Hello from Bot</h1>
      <Button onClick={() => push("/page-example")}>Go to some page</Button>
      <Button onClick={back}>Home</Button>
      <Button
        onClick={() => {
          throw new Error("Error crated by button click");
        }}
      >
        throw error
      </Button>
      <Button
        onClick={() => {
          console.error("Error crated by button click");
        }}
      >
        log error
      </Button>
    </div>
  );
}
