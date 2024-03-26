"use client";
import Button from "@/components/atom/button/Button";
import Container from "@/components/atom/container/Container";
import React from "react";

export default function page() {
  const onClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};
  return (
    <Container
      style={{ height: "600px", marginTop: "30px", marginBottom: "30px" }}
    >
      <Button onClick={e => onClick(e)}>카카오로 시작하기</Button>
    </Container>
  );
}
