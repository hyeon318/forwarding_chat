import StepperItem from "@/components/mocules/stepper/StepperItem";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./Stepper.module.css";
export default function Stepper() {
  return (
    <div className={styles.stepper}>
      <div className={styles.wrapper}>
        <StepperItem
          step={1}
          description="카카오로 시작하기"
        ></StepperItem>
        <div className={styles.line}></div>
        <StepperItem
          step={2}
          description="대상자 선택하기"
        ></StepperItem>
        <div className={styles.line}></div>
        <StepperItem
          step={3}
          description="메시지 작성하기"
        ></StepperItem>
        <div className={styles.line}></div>
        <StepperItem
          step={4}
          description="메시지 발송하기"
        ></StepperItem>
      </div>
    </div>
  );
}
