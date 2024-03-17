import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />

            <header className={styles.header}>
              <Image src="/logo.svg" className={styles.logo} alt="logo" width="150" height="150" />
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
    </StoreProvider>
  );
}
