"use client";

import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { Mail, MapPin, MessageSquare } from "lucide-react";

const GithubIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.glow} />
      
      <div className={styles.ctaSection}>
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Looking for someone who can <br />
          <span className="gradient-text">own outcomes?</span>
        </motion.h2>
        
        <motion.p 
          className={styles.subtext}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          If you need a data professional who understands execution, growth, and modern product thinking — let’s talk.
        </motion.p>
        
        <motion.div 
          className={styles.btnGroup}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>View Resume</a>
          <a href="/resume.pdf" download className={styles.secondaryBtn}>Download Resume</a>
          <a href="#contact-details" className={styles.secondaryBtn}>Let’s Connect</a>
        </motion.div>
      </div>

      <div id="contact-details" className={styles.contactSection}>
        <h3 className={styles.contactHeading}>Let’s Build Something Valuable</h3>
        <p className={styles.contactCopy}>
          Whether it’s a data challenge, a business opportunity, or a product idea — I’d love to hear about it.
        </p>
        <div className={styles.finalCtas}>
          <a href="https://www.linkedin.com/in/bhaswanthv/" target="_blank" rel="noreferrer" className={styles.primaryBtn}>
            <LinkedinIcon size={18} style={{ marginRight: '8px' }} /> Message on LinkedIn
          </a>
          <a href="mailto:bhaswanthvommena18@gmail.com" className={styles.secondaryBtn}>
            <Mail size={18} style={{ marginRight: '8px' }} /> Send an Email
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/bhaswanthv/" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
          <a href="https://github.com/bhaswanthvommena18-jpg" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub"><GithubIcon size={20} /></a>
          <a href="mailto:bhaswanthvommena18@gmail.com" className={styles.socialLink} aria-label="Email"><Mail size={20} /></a>
          <a href="https://wa.me/18723679053" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="WhatsApp"><MessageSquare size={20} /></a>
        </div>
        
        <div className={styles.copyright}>
          <div className={styles.signature}>
            <img src="/profile.png" alt="Bhaswanth" className={styles.signatureAvatar} />
            <span>Bhaswanth Vommena</span>
          </div>
          © {new Date().getFullYear()} All rights reserved. <br />
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginTop: '4px' }}>
            <MapPin size={12} /> Global
          </span>
        </div>
      </div>
    </footer>
  );
}
