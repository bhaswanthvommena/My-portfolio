"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";
import { ArrowRight, Image as ImageIcon, X, ExternalLink } from "lucide-react";

const GithubIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

type CaseStudy = {
  problem: string;
  solution: string;
  impact: string;
};

type Project = {
  id: number;
  category: "DATA" | "DIGITAL";
  title: string;
  stack: string[];
  image?: string;
  link?: string;
  githubLink?: string;
  result: string;
  caseStudy?: CaseStudy;
};

const projects: Project[] = [
  {
    id: 1,
    category: "DATA",
    title: "Global Supply Chain Dashboard",
    stack: ["Python", "Pandas", "Next.js", "Recharts"],
    link: "/projects/supply-chain",
    result: "Built an autonomous ETL pipeline processing global shipping records to identify routing bottlenecks and visualize revenue streams.",
    caseStudy: {
      problem: "Needed to process and aggregate a massive Kaggle supply chain dataset (180k+ rows) to uncover shipping delays and late delivery risks across global markets.",
      solution: "Engineered a Python ETL script leveraging Pandas to clean, aggregate, and export the raw CSV into optimized JSON. Built a Next.js front-end using Recharts for interactive data visualization.",
      impact: "Successfully automated the data extraction and transformation process, culminating in a beautiful dark-mode dashboard that highlights high-risk regions and top-performing categories."
    }
  },
  {
    id: 2,
    category: "DIGITAL",
    title: "Enterprise RAG Chatbot",
    stack: ["React", "Framer Motion", "LLM Prompting"],
    link: "/projects/rag-chatbot",
    result: "Prototyped a Retrieval-Augmented Generation (RAG) chatbot interface allowing users to query connected corporate knowledge bases.",
    caseStudy: {
      problem: "Needed a way to demonstrate AI Product Building skills by showcasing how an enterprise might interact with proprietary data (PDFs, SQL databases) via an AI chat interface.",
      solution: "Engineered a highly polished, interactive React prototype with simulated 'Agentic Thinking' states (vector search, chunk retrieval) and real-time streaming text effects.",
      impact: "Provides a zero-latency, zero-cost portfolio demonstration of complex AI workflow orchestration, proving front-end prototyping and AI UX capabilities."
    }
  },
  {
    id: 3,
    category: "DIGITAL",
    title: "Elrix Energy – Solar EPC Platform",
    stack: ["Next.js", "Tailwind", "SEO", "Analytics"],
    image: "/elrix_energy.png",
    link: "https://www.elrixenergy.com/",
    result: "Built a robust, feature-rich corporate platform for South India's trusted Solar EPC company to drive lead generation.",
    caseStudy: {
      problem: "The client needed a robust corporate platform to educate users on solar energy, promote PM Surya Ghar government subsidies, and generate leads for residential, commercial, and industrial projects.",
      solution: "Developed an interactive web app featuring a dynamic Solar Savings Calculator, a content-rich FAQ/blog architecture for SEO, and cookie preference management. Integrated Google Analytics and Meta Pixel for ad tracking.",
      impact: "Captures immediate leads through floating WhatsApp widgets and prominent CTAs, while a styled review showcase displaying 5-star ratings builds strong regional trust and consumer confidence."
    }
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
    image: "/la_sabroza.png", // [PLACEHOLDER] Need new image
    link: "https://homeplate717.vercel.app/",
    result: "Built a fast, static 4-page site for an Austin taco truck, optimized for clean layout and client budget constraints.",
  },
  {
    id: 6,
    category: "DIGITAL",
    title: "Lake City – Auto Body & Paint Shop",
    stack: ["React", "Next.js", "CSS Modules"],
    image: "/lake_city_auto.png",
    link: "https://lakecityautoandbody.com",
    result: "Created a professional, trust-building corporate website emphasizing absolute integrity, lifetime guarantees, and expert craftsmanship.",
    caseStudy: {
      problem: "A premier collision repair shop in Denton, Texas needed a professional web presence to showcase their legacy, structure their services, and build trust with prospective clients.",
      solution: "Designed a clean, structured UI detailing specific disciplines (Structural Collision Repair, Paintless Dent Repair). Implemented a dedicated 'Seamless Process' section to alleviate customer stress regarding insurance claims.",
      impact: "Strategically placed CTAs ('Book an Appointment', 'Get an Estimate') drive conversions, while 15+ year legacy badges, BBB A+ certifications, and client feedback quotes establish robust social proof."
    }
  },
  {
    id: 7,
    category: "DIGITAL",
    title: "Personal Portfolio Website MVP",
    stack: ["Next.js", "R3F", "Framer Motion"],
    image: "/portfolio_site.png",
    link: "https://my-portfolio-lac-beta-99.vercel.app/",
    githubLink: "https://github.com/bhaswanthvommena18-jpg",
    result: "Designed a high-end portfolio utilizing WebGL shaders, particle canvas backdrops, and cybernetic themes.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

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

      <motion.div layout className={styles.grid}>
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={styles.card}
              onMouseMove={handleMouseMove}
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
                <div className={styles.actionContainer}>
                  {project.caseStudy && (
                    <button onClick={() => setSelectedProject(project)} className={styles.viewBtn}>
                      Read Case Study <ArrowRight size={16} />
                    </button>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target={project.link.startsWith("http") ? "_blank" : "_self"} 
                      rel="noopener noreferrer" 
                      className={styles.viewBtn}
                    >
                      Visit Live Site <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink !== "#" ? project.githubLink : undefined} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${styles.viewBtn} ${styles.githubBtn}`}
                      onClick={(e) => project.githubLink === "#" && e.preventDefault()}
                    >
                      View GitHub <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.caseStudy && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                <div className={styles.modalStack}>
                  {selectedProject.stack.map(s => (
                    <span key={s} className={styles.modalTag}>{s}</span>
                  ))}
                </div>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.caseStudySection}>
                  <h4 className="gradient-text">The Challenge</h4>
                  <p>{selectedProject.caseStudy.problem}</p>
                </div>
                
                <div className={styles.caseStudySection}>
                  <h4 className="gradient-text">My Solution & Architecture</h4>
                  <p>{selectedProject.caseStudy.solution}</p>
                </div>
                
                <div className={styles.caseStudySection}>
                  <h4 className="gradient-text">Impact & Results</h4>
                  <p>{selectedProject.caseStudy.impact}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

