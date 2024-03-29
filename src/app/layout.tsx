import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organism/header/Header";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { DataProvider } from "@/providers/DataProvider";
import AuthProvider from "@/providers/AuthProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forwarding Chat",
  description: "You can Forward KakaoTalks",
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
  pageProps,
}: Readonly<{
  children: React.ReactNode;
}> &
  AppProps) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning={true}
    >
      <Header />
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="afterInteractive"
      />
      <body className={inter.className}>
        <AuthProvider>
          {/* <DataProvider> */}
          {children}
          {/* </DataProvider> */}
        </AuthProvider>
      </body>
    </html>
  );
}
