"use client";

import { motion } from "framer-motion";
import styles from "./Expertise.module.css";
import { Database, Lightbulb, Sparkles, CheckCircle2 } from "lucide-react";

const expertiseData = [
  {
    title: "Data & Analytics Engineering",
    icon: Database,
    description: "5+ years of turning messy data into reliable, automated insights.",
    skills: ["SQL", "Python", "Power BI / Tableau", "KPI Systems", "ETL Pipelines", "Business Intelligence"],
  },
  {
    title: "Agentic Workflow Automation",
    icon: Sparkles,
    description: "I build sophisticated AI agents to automate and scale business operations.",
    skills: ["n8n", "Zapier / Make", "Voice Agents", "Hermes Agent", "CodeX Integration", "Permeli Workflows"],
  },
  {
    title: "AI Product Building",
    icon: Lightbulb,
    description: "I build real digital solutions from the ground up using modern AI tools.",
    skills: ["SaaS Products", "MVPs", "Websites", "Cursor IDE", "Next.js / React", "Full-Stack Execution"],
  },
];

export default function Expertise() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

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
              onMouseMove={handleMouseMove}
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
