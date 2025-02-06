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
    <html lang="en" className="h-full">
      <body className="h-full overflow-auto text-bodyText">
        <NavBar />
        <main className="pt-16">{children}</main>
        <AssetViewer />
      </body>
    </html>
  );
}
