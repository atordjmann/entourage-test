"use client";
import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {

  return (
    <StoreProvider>

        <BrowserRouter>
      <html lang="en">
        <body>
          <section className={styles.container}>

            <header className={styles.header}>
              <Nav/>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
              <span>Coded with love by </span>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/audrey-tordjmann/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Audrey Tordjmann
              </a>
            </footer>
          </section>
        </body>
      </html>
      </BrowserRouter>
    </StoreProvider>
  );
}
