"use client"
import React from 'react';
import styles from "../styles/layout.module.css";

export const Footer = () => {
  return (
    <>
    <span>Coded with love by </span>
    <a
        className={styles.link}
        href="https://www.linkedin.com/in/audrey-tordjmann/"
        target="_blank"
        rel="noopener noreferrer"
        >
        Audrey Tordjmann
    </a>
    </>
  )
}
