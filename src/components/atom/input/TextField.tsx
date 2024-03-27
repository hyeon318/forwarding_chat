import React, { InputHTMLAttributes } from "react";
import styles from "./TextField.module.css";
export default function TextField(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={styles.input}
      {...props}
    ></input>
  );
}
