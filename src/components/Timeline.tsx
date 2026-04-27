"use client";

import { motion } from "framer-motion";
import styles from "./Timeline.module.css";

const experiences = [
  {
    year: "Nov 2024 – Present",
    role: "Senior Data Engineer / Analyst",
    company: "Fortune 100 Insurance Company",
    description: "I build enterprise dashboards, automate reporting systems, improve KPI visibility, and help business leaders make faster decisions through reliable data systems."
  },
  {
    year: "Jan 2021 – Aug 2023",
    role: "Data Engineer / Analyst",
    company: "Citibank",
    description: "Worked across risk, operations, and reporting environments to improve data quality, automate analytics workflows, and support business-critical decisions."
  },
  {
    year: "Jun 2020 – Jan 2021",
    role: "Data Analyst",
    company: "NEW10S Online Shopping Pvt Ltd",
    description: "Used analytics to improve customer conversion, campaign performance, operational efficiency, and revenue growth in a fast-moving e-commerce environment."
  },
  {
    year: "Mar 2026 – Present",
    role: "Strategic Growth & Technology Advisor (Volunteer)",
    company: "Elrix Energy Solar Solutions",
    description: "Supporting family business growth through technology direction, digital systems, website strategy, customer acquisition ideas, and business operations improvements."
  },
  {
    year: "2011 – 2023",
    role: "Business Operations & Growth Advisor (Volunteer)",
    company: "Hari Car Decors",
    description: "Contributed to growth through customer relationships, negotiation, sales support, procurement, Google Business Profile optimization, reviews, and local market expansion."
  }
];

export default function Timeline() {
  return (
    <section id="experience" className={styles.section}>
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Professional <span className="gradient-text">Journey.</span>
      </motion.h2>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className={styles.item}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.dot} />
            <div className={styles.content}>
              <span className={styles.year}>{exp.year}</span>
              <h3 className={styles.role}>{exp.role}</h3>
              <h4 className={styles.company}>{exp.company}</h4>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
