"use client";
import Description from "@/components/atom/stepper/Description";
import Icon from "@/components/atom/stepper/Icon";
import Status from "@/components/atom/stepper/Status";
import Step from "@/components/atom/stepper/Step";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./StepperItem.module.css";

type props = {
  step: number;
  description: string;
};

export default function StepperItem({ step, description }: props) {
  const [curr, setCurr] = useState<number>(0);
  const path = usePathname();

  useEffect(() => {
    if (path === "/message/start") {
      setCurr(1);
    } else if (path === "/message/target") {
      setCurr(2);
    } else if (path === "/message/write") {
      setCurr(3);
    } else if (path === "/message/send") {
      setCurr(4);
    }
  }, [path]);
  return (
    <div className={styles.wrapper}>
      <Icon
        status={
          step === curr ? "progress" : step < curr ? "complete" : "pending"
        }
      />
      <div className={styles.content}>
        <Step step={step} />
        <Description description={description}></Description>
        <Status
          status={
            step === curr ? "progress" : step < curr ? "complete" : "pending"
          }
        />
      </div>
    </div>
  );
}
