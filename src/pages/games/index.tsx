import React from 'react';
import { NextPage } from 'next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { usePepperContext } from '@/lib/pepper/PepperContext';

/**
 * Games selection page
 */
const GamesPage: NextPage = () => {
  const pepper = usePepperContext();

  const handleTTTClick = () => {
    pepper.animatedSpeak('Boy', 'Lass uns Tic Tac Toe spielen!');
  };

  const handleMemoryClick = () => {
    pepper.animatedSpeak('Girl', 'Wie gut ist dein Gedächtnis? Lass uns Memory spielen!');
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Spiele</h1>
        <Link href="/" passHref>
          <Button variant="outline">Zurück</Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tic Tac Toe</CardTitle>
            <CardDescription>Spiele gegen Pepper!</CardDescription>
          </CardHeader>
          <CardContent>
            <img 
              src="/images/logoTTT1.png" 
              alt="TicTacToe Logo" 
              className="w-full h-48 object-contain"
            />
          </CardContent>
          <CardFooter>
            <Link href="/games/tictactoe" passHref>
              <Button className="w-full" onClick={handleTTTClick}>Spielen</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Memory</CardTitle>
            <CardDescription>Teste dein Gedächtnis</CardDescription>
          </CardHeader>
          <CardContent>
            <img 
              src="/images/logoMemory.png" 
              alt="Memory Logo" 
              className="w-full h-48 object-contain"
            />
          </CardContent>
          <CardFooter>
            <Link href="/games/memory" passHref>
              <Button className="w-full" onClick={handleMemoryClick}>Spielen</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
};

export default GamesPage;
