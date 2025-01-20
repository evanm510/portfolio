import type { Metadata } from "next";
import "./globals.css";

import { NavBar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Evan Monroe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {" "}
        <NavBar />
        {children}
      </body>
    </html>
  );
}
