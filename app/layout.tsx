import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./components/navigation-bar/NavBar";
import "./globals.css";
import { ThemeProvider } from "@/app/components/themeprovider/ThemeProvider";
import { ReactNode } from "react";
import PreviewIcon from "@/app/images/Preview.png";

export const metadata: Metadata = {
  title: "Akko dot(on) Ninja",
  description: "If you read this, remind me to read the fricking manual",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Akko dot(on) Ninja</title>
        <meta
          name="description"
          content="If you read this, remind me to read the fricking manual"
        />
        <meta property="og:url" content="https://akko.ninja" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Akko dot(on) Ninja" />
        <meta
          property="og:description"
          content="If you read this, remind me to read the fricking manual"
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/3431e8c5-8083-45f1-a512-3d50033741b4.png?token=1m5N2StKt_FpZqcrfqUOiDh4IYOP7aMQ9LP1MH9A-kU&height=630&width=1200&expires=33272239930"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="akko.ninja" />
        <meta property="twitter:url" content="https://akko.ninja" />
        <meta name="twitter:title" content="Akko dot(on) Ninja" />
        <meta
          name="twitter:description"
          content="If you read this, remind me to read the fricking manual"
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/3431e8c5-8083-45f1-a512-3d50033741b4.png?token=1m5N2StKt_FpZqcrfqUOiDh4IYOP7aMQ9LP1MH9A-kU&height=630&width=1200&expires=33272239930"
        />
      </head>
      <body className="h-full ">
        <ThemeProvider>
          <div className="min-h-screen">
            <NavBar />
            <div className="space-y-4">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
