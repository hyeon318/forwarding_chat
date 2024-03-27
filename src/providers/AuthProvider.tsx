"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

type props = {
  children: React.ReactNode;
};
export default function AuthProvider({ children }: props) {
  return <SessionProvider>{children}</SessionProvider>;
}
