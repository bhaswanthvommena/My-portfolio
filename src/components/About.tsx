"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.heading}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ display: "block" }}
            >
              Why People
            </motion.span>
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{ display: "block" }}
            >
              Work With Me.
            </motion.span>
          </h2>
          <motion.p 
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            You’re not just hiring another analyst.
          </motion.p>
          <motion.p 
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            I bring a rare mix of <span className={styles.highlight}>technical depth</span>, business judgment, and builder mentality. 
            My background spans enterprise analytics, data engineering, operations, customer growth, and AI-powered product execution.
          </motion.p>
          <motion.p 
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            That means I don’t just analyze numbers — I understand how decisions create outcomes.
          </motion.p>
          <motion.p 
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            If your business needs someone who can <span className={styles.highlight}>think, build, and execute</span>, I can help.
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <img 
              src="/profile.png" 
              alt="Bhaswanth Vommena" 
              className={styles.profileImage}
            />
          </div>
          <div className={styles.glowBox} />
        </motion.div>
      </div>
    </section>
  );
}
