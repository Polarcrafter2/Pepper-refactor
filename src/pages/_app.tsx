import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import React, { useEffect } from "react";

// If using Next.js Font system
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

/**
 * Main App component for Next.js
 */
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Any global initialization can go here
  }, []);

  return (
    <div className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
