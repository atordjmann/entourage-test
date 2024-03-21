"use client"
import React from 'react';
import Image from "next/image";
import styles from "../styles/layout.module.css";

export const Loader = () => {
  return (
    <div className={styles.loader}>
        <Image src="/heart-spinner.svg" className={styles.loaderImg} alt="logo" width="150" height="150" />
    </div>
  )
}
