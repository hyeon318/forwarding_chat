import React from "react";
import styles from "./Step.module.css";
type props = {
  step: number;
};
export default function Step({ step }: props) {
  return <span className={styles.step}>{`STEP ${step}`}</span>;
}
