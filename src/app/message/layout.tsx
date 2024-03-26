import Stepper from "@/components/organism/stepper/Stepper";
import React from "react";
import styles from "./layout.module.css";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <Stepper></Stepper>
      {children}
    </div>
  );
}
