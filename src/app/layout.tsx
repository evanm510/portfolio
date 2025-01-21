import type { Metadata } from "next";
import "./globals.css";

import { NavBar } from "@/components/navbar";
import AssetViewer from "@/components/AssetViewer/AssetViewer";

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
        <NavBar />
        {children}
        <AssetViewer />
      </body>
    </html>
  );
}
