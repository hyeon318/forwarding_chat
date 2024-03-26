"use client";
import Button from "@/components/atom/button/Button";
import Container from "@/components/atom/container/Container";
import React from "react";
import styles from "./page.module.css";

export default function page() {
  const onClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};
  return (
    <Container
      style={{
        height: "600px",
        marginTop: "30px",
        marginBottom: "30px",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onClick={e => onClick(e)} className={styles.btnKakao}>
        카카오로 시작하기
      </Button>
    </Container>
  );
}
