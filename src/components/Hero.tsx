"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "./Hero.module.css";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.badge}>
            <Terminal size={14} style={{ display: "inline", marginRight: "6px" }} />
            Bhaswanth Vommena
          </div>
          
          <h1 className={styles.title}>
            <motion.span 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              style={{ display: "block" }}
            >
              Data Professional.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.4 }}
              style={{ display: "block" }}
            >
              Entrepreneur.
            </motion.span>
            <motion.span 
              className="gradient-accent"
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.6 }}
              style={{ display: "block" }}
            >
              AI Product Builder.
            </motion.span>
          </h1>
          
          <p className={styles.subtitle}>
            Welcome — I build data solutions, business systems, and modern AI-powered products that solve real problems.
          </p>

          <div className={styles.ctaContainer}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work <ArrowRight size={16} style={{ display: "inline", marginLeft: "8px" }} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              Resume
            </a>
            <a href="https://www.linkedin.com/in/bhaswanthv/" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
