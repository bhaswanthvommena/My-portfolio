"use client";

import { useState } from "react";
import { Database, Zap, Code, Briefcase, Globe } from "lucide-react";
import styles from "./TrustStrip.module.css";

const items = [
  { text: "Senior Data Analyst", icon: Database },
  { text: "Agentic Workflow Automation", icon: Zap },
  { text: "AI Product Builder", icon: Globe },
  { text: "Fast MVP Prototyping", icon: Code },
  { text: "5+ Years Experience", icon: Briefcase },
];

export default function TrustStrip() {
  const [isPaused, setIsPaused] = useState(false);
  // Duplicate items for seamless loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div 
      className={styles.strip}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={styles.marquee}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {displayItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className={styles.item}>
              <Icon size={16} className={styles.icon} />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
