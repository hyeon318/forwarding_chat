import React from "react";
import styles from "./Icon.module.css";

type props = {
  status: string;
};
export default function Icon({ status }: props) {
  return (
    <div className={`${styles.eclipse} ${styles[status]}`}>
      <div className={`${styles.eclipseInner} ${styles[status]}`}></div>
    </div>
  );
}
