import type { Metadata } from "next";
import React, { Fragment } from "react";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <html lang="en">
        <body className="p-4">
          <Header />
          {children}
        </body>
      </html>
    </Fragment>
  );
}
