"use client";

import { motion } from "framer-motion";
import styles from "./TechStack.module.css";
import { Database, FileJson, Layers, Monitor, Server, Cpu, Cloud, Code, Braces, Terminal, Sparkles } from "lucide-react";

const toolGroups = [
  {
    category: "Data",
    items: [
      { name: "SQL", icon: Database },
      { name: "Python", icon: Terminal },
      { name: "Power BI", icon: Layers },
      { name: "Tableau", icon: Layers },
      { name: "Excel", icon: FileJson },
    ]
  },
  {
    category: "Engineering",
    items: [
      { name: "Snowflake", icon: Cloud },
      { name: "BigQuery", icon: Database },
      { name: "APIs", icon: Server },
      { name: "ETL", icon: Code },
      { name: "dbt", icon: Terminal },
    ]
  },
  {
    category: "Product",
    items: [
      { name: "React", icon: Code },
      { name: "Next.js", icon: Monitor },
      { name: "Tailwind", icon: Braces },
      { name: "Vercel", icon: Cloud },
    ]
  },
  {
    category: "AI",
    items: [
      { name: "Gemini", icon: Cpu },
      { name: "GPT", icon: Sparkles },
      { name: "Automations", icon: Layers },
    ]
  }
];

export default function TechStack() {
  return (
    <section className={styles.section}>
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Tools I Use <span className="gradient-text">to Deliver.</span>
      </motion.h2>

      <div className={styles.groupContainer}>
        {toolGroups.map((group, groupIndex) => (
          <div key={group.category} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.category}</h3>
            <div className={styles.grid}>
              {group.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    className={styles.item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Icon className={styles.icon} />
                    <span className={styles.name}>{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
