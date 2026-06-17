"use client";

import { motion } from "framer-motion";
import styles from "./TechStack.module.css";
import { Database, FileJson, Layers, Monitor, Server, Cpu, Cloud, Code, Braces, Terminal, Sparkles } from "lucide-react";

const toolGroups = [
  {
    category: "Data Analytics",
    items: [
      { name: "SQL", icon: Database },
      { name: "Python", icon: Terminal },
      { name: "Power BI", icon: Layers },
      { name: "Tableau", icon: Layers },
      { name: "Snowflake", icon: Cloud },
    ]
  },
  {
    category: "AI IDEs",
    items: [
      { name: "Antigravity IDE", icon: Sparkles },
      { name: "Cursor", icon: Code },
      { name: "Claude Code", icon: Terminal },
      { name: "Codex", icon: Cpu },
    ]
  },
  {
    category: "AI Tools",
    items: [
      { name: "NotebookLM", icon: FileJson },
      { name: "Pomelli", icon: Layers },
      { name: "Stitch", icon: Braces },
      { name: "Flow", icon: Cloud },
    ]
  },
  {
    category: "Automations",
    items: [
      { name: "n8n", icon: Layers },
      { name: "Zapier", icon: FileJson },
      { name: "Make", icon: Monitor },
    ]
  },
  {
    category: "Engineering",
    items: [
      { name: "React / Next.js", icon: Code },
      { name: "Tailwind", icon: Braces },
      { name: "APIs & ETL", icon: Server },
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
