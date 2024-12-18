import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./components/navigation-bar/NavBar";
import "./globals.css";
import { ThemeProvider } from "@/app/components/themeprovider/ThemeProvider";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Akko dot(on) Ninja",
  description: "My own humble website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <NavBar />
          <div className="min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
