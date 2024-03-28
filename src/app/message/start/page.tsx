"use client";
import Button from "@/components/atom/button/Button";
import Container from "@/components/atom/container/Container";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { apiKakaoProfile } from "@/services/kakao";
import { useSession } from "next-auth/react";

export default function StartPage() {
  const session = useSession();

  return (
    <Container
      next={session.data ? "/message/target" : undefined}
      style={{
        height: "600px",
        marginTop: "25px",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onClick={() => {
          apiKakaoProfile();
        }}
        className={styles.btnKakao}
      >
        카카오로 시작하기
      </Button>
    </Container>
  );
}
