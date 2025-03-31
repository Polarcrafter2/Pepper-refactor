import type { JSX } from "react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  pepperController,
  PepperControllerRole,
} from "@/lib/pepper/pepper-controller";
import { useNavigation } from "@/lib/router";

export function HomePage(): JSX.Element {
  const { push, back } = useNavigation();
  return (
    <div className="min-h-[60vh] relative flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 z-[-1]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('../assets/images/background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div
              className="text-white text-2xl font-bold"
              onClick={() => push("/")}
            >
              Rathaus <span className="font-normal">Furtwangen</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Willkommen im Rathaus Furtwangen
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            Ihre zentrale Anlaufstelle für alle Bürgeranliegen im Herzen des
            Schwarzwalds
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Button
              variant="default"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg h-16"
              onClick={() => push("/notFound")}
            >
              Aktuelles
            </Button>

            <Button
              variant="default"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg h-16"
              onClick={() => push("/notFound")}
            >
              Bürgerservice
            </Button>

            <Button
              variant="default"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg h-16"
              onClick={() => push("/notFound")}
            >
              Über uns
            </Button>

            <Button
              variant="default"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg h-16"
              onClick={() => {
                push("/page-example");
                void pepperController.animatedSpeak(
                  PepperControllerRole.Boy,
                  "Hier erhalten Sie einen Überblick über unsere Kontaktmöglichkeiten und Öffnungszeiten.",
                );
              }}
            >
              Kontakt
            </Button>
          </div>
        </div>
      </main>
      {/* <h1 className="text-6xl">Hello from Bot</h1>
      <Button onClick={() => push("/page-example")}>Go to some page</Button>
      <Button onClick={back}>Home</Button>
      <Button
        onClick={() => {
          throw new Error("Error created by button click");
        }}
      >
        throw error
      </Button>
      <Button
        onClick={() => {
          console.error("Error created by button click");
        }}
      >
        log error
      </Button> */}
    </div>
  );
}
