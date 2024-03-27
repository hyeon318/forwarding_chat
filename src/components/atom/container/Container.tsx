import React from "react";
import styles from "./Container.module.css";
import Button from "../button/Button";
import Link from "next/link";

type props = {
  children: React.ReactNode[] | React.ReactNode;
  style?: React.CSSProperties;
  prev?: string;
  next?: string;
};
export default function Container({ children, style, prev, next }: props) {
  return (
    <section
      className={styles.container}
      style={style}
    >
      <div className={styles.content}>{children}</div>

      <div className={styles.btnGrp}>
        {prev ? (
          <Link
            className={styles.btnPrev}
            href={prev}
          >
            이전
          </Link>
        ) : (
          <div></div>
        )}
        {next ? (
          <Link
            className={styles.btnNext}
            href={next}
          >
            이후
          </Link>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
