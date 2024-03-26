"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <header className={styles.headerInner}>
        <div className={styles.icon}></div>
      </header>
    )
  );
}
