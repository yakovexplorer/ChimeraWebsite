import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import Navbar from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "pl" }];
}
export const metadata: Metadata = {
  title: "ChimeraGPT - World Class AI API",
  description:
    "ChimeraGPT provides a world class API for Artificial Intelligence. Harness the power of AI in your applications with ease.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/apple-touch-icon.png",
    },
  ],
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    messages = await import("@/messages/en.json");
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
