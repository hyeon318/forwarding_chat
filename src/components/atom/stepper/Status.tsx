import React from "react";
import styles from "./Status.module.css";
type props = {
  status: string;
};
export default function Status({ status }: props) {
  return <span className={`${styles.status} ${styles[status]}`}>{status}</span>;
}
