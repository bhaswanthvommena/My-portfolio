"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import { Download } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className={styles.navbar}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
