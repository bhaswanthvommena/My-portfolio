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
    image: "/supply_chain_dashboard.png",
    link: "#contact",
    result: "Built executive reporting systems that reduced reporting delays and uncovered multi-million-dollar operational bottlenecks.",
  },
  {
    id: 2,
    category: "DATA",
    title: "Automated ETL Pipeline",
    stack: ["Python", "Airflow", "Snowflake"],
    image: "/supply_chain_dashboard.png",
    link: "#contact",
    result: "Designed scalable data workflows handling high-volume ingestion with strong uptime and governance.",
  },
  {
    id: 3,
    category: "DIGITAL",
    title: "Elrix Energy – Solar EPC Platform",
    stack: ["Next.js", "Tailwind", "SEO"],
    image: "/elrix_energy.png",
    link: "https://www.elrixenergy.com/",
    result: "Built a live, production-ready solar platform in India focused on trust, lead generation, and search visibility.",
  },
  {
    id: 4,
    category: "DIGITAL",
    title: "La Sabroza – Taco Truck Website",
    stack: ["React", "Framer Motion", "CSS Modules"],
    image: "/la_sabroza.png",
    link: "https://lasabroza-tacos.vercel.app/",
    result: "Developed an immersive food truck website in Austin featuring modern 3D dynamic taco visuals and interactive menus.",
  },
  {
    id: 5,
    category: "DIGITAL",
    title: "Homeplate Tacos – Static MVP",
    stack: ["HTML", "Vanilla JS", "CSS"],
    image: "/la_sabroza.png",
    link: "https://homeplate717.vercel.app/",
    result: "Built a fast, static 4-page site for an Austin taco truck, optimized for clean layout and client budget constraints.",
  },
  {
    id: 6,
    category: "DIGITAL",
    title: "Lake City – Auto Body & Paint Shop",
    stack: ["React", "Next.js", "CSS Modules"],
    image: "/lake_city_auto.png",
    link: "https://lakecitypaintandbody.vercel.app/",
    result: "Created a high-fidelity workshop platform prototype featuring appointment integrations and responsive booking systems.",
  },
  {
    id: 7,
    category: "DIGITAL",
    title: "Personal Portfolio Website MVP",
    stack: ["Next.js", "R3F", "Framer Motion"],
    image: "/portfolio_site.png",
    link: "https://my-portfolio-lac-beta-99.vercel.app/",
    result: "Designed a high-end portfolio utilizing WebGL shaders, particle canvas backdrops, and cybernetic themes.",
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
                {project.image ? (
                  <img src={project.image} alt={project.title} className={styles.thumbnailImage} />
                ) : (
                  <div className={styles.thumbnailPlaceholder}>
                    <ImageIcon size={48} />
                  </div>
                )}
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
                <a 
                  href={project.link} 
                  target={project.link.startsWith("http") ? "_blank" : "_self"} 
                  rel="noopener noreferrer" 
                  className={styles.viewBtn}
                >
                  {project.link.startsWith("http") ? "Visit Live Site" : "View Details"} <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

