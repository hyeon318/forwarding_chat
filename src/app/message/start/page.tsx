"use client";
import Button from "@/components/atom/button/Button";
import Container from "@/components/atom/container/Container";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { apiKakaoProfile } from "@/services/kakao";

export default function page() {
  return (
    <Container
      next="/message/target"
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
