"use client";

import { motion } from "framer-motion";
import styles from "./Expertise.module.css";
import { Database, Lightbulb, Sparkles, CheckCircle2 } from "lucide-react";

const expertiseData = [
  {
    title: "Data & Analytics",
    icon: Database,
    description: "Need clarity from messy data? This is where I thrive.",
    skills: ["SQL", "Python", "Dashboards", "KPI Systems", "Forecasting", "ETL Pipelines", "Business Intelligence"],
  },
  {
    title: "Business & Growth",
    icon: Lightbulb,
    description: "I understand how businesses actually run.",
    skills: ["Operations", "Customer Experience", "Procurement", "Sales Strategy", "Negotiation", "Growth Systems", "Stakeholder Management"],
  },
  {
    title: "AI Product Building",
    icon: Sparkles,
    description: "I turn ideas into real digital products quickly.",
    skills: ["AI Workflows", "MVP Launches", "Website Systems", "Automations", "Rapid Prototyping", "Product Execution"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className={styles.section}>
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Here’s Where I <span className="gradient-text">Create Value.</span>
      </motion.h2>

      <div className={styles.grid}>
        {expertiseData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.cardGlow} />
              <div className={styles.iconWrapper}>
                <Icon size={24} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <ul className={styles.cardList}>
                {item.skills.map((skill, sIndex) => (
                  <motion.li 
                    key={sIndex} 
                    className={styles.cardListItem}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (sIndex * 0.05) }}
                  >
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
