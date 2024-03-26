import React from "react";
import styles from "./Container.module.css";

type props = {
  children: React.ReactNode[] | React.ReactNode;
  style?: React.CSSProperties;
};
export default function Container({ children, style }: props) {
  return (
    <section className={styles.container} style={style}>
      {children}
    </section>
  );
}
