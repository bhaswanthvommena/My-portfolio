"use client";

import styles from "./Navbar.module.css";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>Bhaswanth</div>
        <div className={styles.actions}>
          <a href="https://www.linkedin.com/in/bhaswanthv/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
            <Download size={16} /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
