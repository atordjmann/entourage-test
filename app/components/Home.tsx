"use client"
import React from 'react';
import styles from "../styles/layout.module.css";

export const Home = () => {
  return (
    <div className={styles.home_text}>
        <h1 className={styles.home_title}>Some movies</h1>
        <span className={styles.home_subtitle}>Let's find some beautiful place to get lost</span>
    </div>
  )
}
