import React from "react";
import styles from "./Description.module.css";
type props = {
  description: string;
};
export default function Description({ description }: props) {
  return <span className={styles.description}>{description}</span>;
}
