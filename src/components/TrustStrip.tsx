"use client";


import { Database, Zap, Code, Briefcase, Globe } from "lucide-react";
import styles from "./TrustStrip.module.css";

const items = [
  { text: "Data Engineering Mindset", icon: Database },
  { text: "Entrepreneurial Experience", icon: Briefcase },
  { text: "AI Builder", icon: Zap },
  { text: "Website Creator", icon: Globe },
  { text: "Problem Solver", icon: Code },
];

export default function TrustStrip() {
  // Duplicate items for seamless loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className={styles.strip}>
      <div className={styles.marquee}>
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
