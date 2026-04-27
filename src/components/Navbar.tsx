"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href="/" className={styles.logo}>
        <div className={styles.avatarWrapper}>
          <img src="/profile.png" alt="Bhaswanth" className={styles.avatar} />
        </div>
        Bhaswanth
      </Link>
      
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="#about" className={styles.navLink}>About</Link>
        <Link href="#projects" className={styles.navLink}>Projects</Link>
        <Link href="#experience" className={styles.navLink}>Experience</Link>
        <Link href="#contact" className={styles.navLink}>Contact</Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.hireBtn}>Resume</a>
      </div>
    </motion.nav>
  );
}
