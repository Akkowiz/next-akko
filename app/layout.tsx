import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./components/navigation-bar/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next-Akko",
  description: "My own humble website",
};

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <NavBar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
