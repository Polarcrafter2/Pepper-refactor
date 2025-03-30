import type { JSX } from "react";
import React from "react";

import { useNavigation } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone, Printer } from "lucide-react";

export function ContactPage(): JSX.Element {
    const { push, back } = useNavigation();
    return (
        <div className="min-h-screen relative flex flex-col">
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
                        <div className="text-white text-2xl font-bold hover:cursor-pointer" onClick={() => push("/")}>
                            Rathaus <span className="font-normal">Furtwangen</span>
                        </div>
                        <p className="text-2xl md:text-2xl font-bold text-white">Kontakt</p>
                    </div>
                </div>
            </header>
            <div className="flex-grow flex items-center justify-center">
                <Card>
                    <CardContent className="p-6 space-y-6 mr-100">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Stadtverwaltung Furtwangen</h2>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-green-700 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <p>Marktplatz 4</p>
                                        <p>78120 Furtwangen im Schwarzwald</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 text-green-700 mr-3 flex-shrink-0" />
                                    <a href="mailto:stadt@furtwangen.de" className="hover:text-green-700">
                                        stadt@furtwangen.de
                                    </a>
                                </div>

                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 text-green-700 mr-3 flex-shrink-0" />
                                    <a href="tel:+4977239390" className="hover:text-green-700">
                                        (07723) 939-0
                                    </a>
                                </div>

                                <div className="flex items-center">
                                    <Printer className="h-5 w-5 text-green-700 mr-3 flex-shrink-0" />
                                    <span>(07723) 939-199</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                            <div className="flex items-center mb-3">
                                <Clock className="h-5 w-5 text-green-700 mr-2" />
                                <h3 className="text-lg font-semibold">Öffnungszeiten</h3>
                            </div>

                            <div className="ml-7">
                                <p className="font-medium">Montag bis Freitag</p>
                                <p>9.00 Uhr bis 12.30 Uhr</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            

            {/* <h1 className="text-6xl">ContactPage</h1>
            <Button onClick={() => push("/")}>Back</Button>
            <Button onClick={back}>Home</Button> */}
        </div>
    );
}
