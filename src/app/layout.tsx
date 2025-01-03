import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Shop.co",
  description: "Clothing Shop",
};
const satoshi = localFont({ src: "../assets/Satoshi-Variable.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
