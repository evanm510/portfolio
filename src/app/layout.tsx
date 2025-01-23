import type { Metadata } from "next";
import "./globals.css";

import { NavBar } from "@/components/Navbar";
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
      <body className="text-bodyText">
        <NavBar />
        {children}
        <AssetViewer />
      </body>
    </html>
  );
}
