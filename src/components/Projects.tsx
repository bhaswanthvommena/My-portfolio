"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "DATA",
    title: "Global Supply Chain Dashboard",
    stack: ["Power BI", "SQL", "Python"],
    result: "Built executive reporting systems that reduced reporting delays and uncovered multi-million-dollar operational bottlenecks.",
  },
  {
    id: 2,
    category: "DATA",
    title: "Automated ETL Pipeline",
    stack: ["Python", "Airflow", "Snowflake"],
    result: "Designed scalable data workflows handling high-volume ingestion with strong uptime and governance.",
  },
  {
    id: 3,
    category: "DIGITAL",
    title: "Elrix Energy – Solar EPC Website",
    stack: ["Next.js", "Tailwind", "SEO"],
    result: "Built a production-ready solar platform focused on trust, lead generation, and search visibility.",
  },
  {
    id: 4,
    category: "DIGITAL",
    title: "Solar WhatsApp AI Assistant",
    stack: ["OpenAI API", "Node.js", "WhatsApp Cloud"],
    result: "Created automated lead qualification workflows to improve customer response speed and conversion.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("ALL");

  const filteredProjects = projects.filter(
    (p) => filter === "ALL" || p.category === filter
  );

  return (
    <section id="projects" className={styles.section}>
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Here’s What <span className="gradient-text">I’ve Built.</span>
      </motion.h2>

      <div className={styles.filterContainer}>
        {["ALL", "DATA", "DIGITAL"].map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles.active : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "ALL" ? "All Projects" : f === "DATA" ? "Data Projects" : "Digital Projects"}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={styles.card}
            >
              <div className={styles.thumbnail}>
                <div className={styles.thumbnailPlaceholder}>
                  <ImageIcon size={48} />
                </div>
              </div>
              <div className={styles.content}>
                <motion.h3 
                  className={styles.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.title}
                </motion.h3>
                <div className={styles.stack}>
                  {project.stack.map((s, si) => (
                    <motion.span 
                      key={s} 
                      className={styles.tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + (si * 0.05) }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
                <motion.p 
                  className={styles.result}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.result}
                </motion.p>
                <button className={styles.viewBtn}>
                  View Case Study <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
