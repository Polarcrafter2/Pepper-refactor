import type { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";

import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePepperContext } from "@/lib/pepper/PepperContext";
import { translate } from "@/lib/translation/translations";

/**
 * Home page for the Pepper Information Terminal
 */
const HomePage: NextPage = () => {
  const pepper = usePepperContext();

  useEffect(() => {
    // Say greeting when the page loads
    pepper.animatedSpeak("Girl", translate("greeting"));
  }, [pepper]);

  return (
    <MainLayout>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Hochschule Furtwangen</CardTitle>
            <CardDescription>Information über die HFU</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="/images/logoHFU.png"
              alt="HFU Logo"
              className="w-full h-40 object-contain"
            />
          </CardContent>
          <CardFooter>
            <Link href="/hfu" passHref>
              <Button className="w-full">Mehr Info</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Villingen-Schwenningen</CardTitle>
            <CardDescription>Information über die Stadt</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="/images/logoVS.png"
              alt="VS Logo"
              className="w-full h-40 object-contain"
            />
          </CardContent>
          <CardFooter>
            <Link href="/vs" passHref>
              <Button className="w-full">Mehr Info</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spiele</CardTitle>
            <CardDescription>TicTacToe & Memory</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="/images/logoSpiel.png"
              alt="Game Logo"
              className="w-full h-40 object-contain"
            />
          </CardContent>
          <CardFooter>
            <Link href="/games" passHref>
              <Button className="w-full">Spielen</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
};

export default HomePage;
