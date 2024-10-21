import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./components/navigation-bar/NavBar";
import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
