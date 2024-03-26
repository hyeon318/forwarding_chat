import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organism/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forwarding Chat",
  description: "You can Forward KakaoTalks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="ko"
        suppressHydrationWarning={true}
      >
        <Header />
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
