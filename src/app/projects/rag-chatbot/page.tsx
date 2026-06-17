"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, FileText, Send, User, Cpu, ArrowLeft, Search, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

const dataSources = [
  { id: 1, name: "Q3_Financial_Report.pdf", type: "pdf" },
  { id: 2, name: "Employee_Handbook_2026.pdf", type: "pdf" },
  { id: 3, name: "Customer_Support_Logs.csv", type: "csv" },
  { id: 4, name: "Sales_Database_Prod", type: "db" },
];

const suggestedQueries = [
  { id: "q1", text: "Summarize the Q3 Revenue Report" },
  { id: "q2", text: "What is the policy on remote work?" },
  { id: "q3", text: "Analyze top customer complaints from logs" }
];

const mockResponses: Record<string, string> = {
  "q1": "Based on the Q3_Financial_Report.pdf, the total revenue for Q3 2026 was $4.2M, representing an 18% increase year-over-year.\n\n**Key Growth Drivers:**\n- Enterprise SaaS subscriptions: +25%\n- Professional Services: +12%\n\nOperating expenses decreased by 4% due to automated supply chain optimizations. The overall profit margin sits at an impressive 22%.",
  "q2": "According to the Employee_Handbook_2026.pdf (Section 4.2):\n\nThe company fully supports a **Hybrid Remote Model**.\n- Employees are expected to be in the office 2 days per week (Tuesdays and Thursdays).\n- The remaining 3 days can be worked from anywhere within the same time zone.\n- A $500 annual stipend is provided for home office equipment.",
  "q3": "I've analyzed the Customer_Support_Logs.csv. The top 3 categories of complaints over the last 30 days are:\n\n1. **Shipping Delays (42%)** - Primarily affecting the EU region due to customs bottlenecks.\n2. **Login Issues (28%)** - Related to the recent OAuth 2.0 migration.\n3. **Billing Errors (15%)** - Duplicate charges on annual renewals.\n\n*Recommendation:* Integrating an automated ETL pipeline to flag delayed shipments could preemptively reduce support tickets by 30%."
};

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
};

export default function RAGChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "init", role: "assistant", content: "Hello! I am your Enterprise RAG Agent. I am securely connected to your corporate knowledge base. How can I help you today?" }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingState, setProcessingState] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isProcessing, processingState]);

  const handleQuery = async (queryId: string, text: string) => {
    if (isProcessing) return;
    
    // Add User Message
    setMessages(prev => [...prev, { id: Date.now().toString(), role: "user", content: text }]);
    setIsProcessing(true);

    // Simulate Agentic Retrieval Steps
    setProcessingState("Converting query to vector embeddings...");
    await new Promise(r => setTimeout(r, 800));
    
    setProcessingState("Searching vector database (pgvector)...");
    await new Promise(r => setTimeout(r, 1200));
    
    setProcessingState("Retrieving top 3 relevant chunks...");
    await new Promise(r => setTimeout(r, 900));

    setProcessingState("Synthesizing final response...");
    await new Promise(r => setTimeout(r, 800));
    
    setProcessingState("");

    // Simulate Streaming Response
    const fullResponse = mockResponses[queryId];
    const messageId = Date.now().toString() + "_ai";
    
    setMessages(prev => [...prev, { id: messageId, role: "assistant", content: "", isStreaming: true }]);
    
    let currentText = "";
    const words = fullResponse.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      currentText += words[i] + " ";
      setMessages(prev => prev.map(m => m.id === messageId ? { ...m, content: currentText } : m));
      await new Promise(r => setTimeout(r, 50)); // Typing speed
    }

    setMessages(prev => prev.map(m => m.id === messageId ? { ...m, isStreaming: false } : m));
    setIsProcessing(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/#projects" className={styles.backBtn}>
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Enterprise RAG Chatbot</h1>
          <p className={styles.subtitle}>Chat-with-your-Data AI Prototype</p>
        </div>
      </header>

      <div className={styles.layout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>
            <Database size={16} /> Knowledge Base
          </h3>
          <ul className={styles.sourceList}>
            {dataSources.map(source => (
              <li key={source.id} className={styles.sourceItem}>
                {source.type === 'pdf' ? <FileText size={16} className={styles.iconPdf} /> : 
                 source.type === 'csv' ? <FileText size={16} className={styles.iconCsv} /> : 
                 <Database size={16} className={styles.iconDb} />}
                <span>{source.name}</span>
                <CheckCircle2 size={14} className={styles.checkIcon} />
              </li>
            ))}
          </ul>
          <div className={styles.statusBox}>
            <div className={styles.statusDot}></div>
            Vector DB Synced
          </div>
        </aside>

        {/* Chat Area */}
        <main className={styles.chatArea}>
          <div className={styles.messagesContainer}>
            {messages.map((msg) => (
              <motion.div 
                key={msg.id} 
                className={`${styles.messageWrapper} ${msg.role === 'user' ? styles.wrapperUser : styles.wrapperAi}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={styles.avatar}>
                  {msg.role === 'user' ? <User size={18} /> : <Cpu size={18} />}
                </div>
                <div className={`${styles.messageBubble} ${msg.role === 'user' ? styles.bubbleUser : styles.bubbleAi}`}>
                  {msg.content.split('\n').map((line, i) => (
                    <span key={i}>
                      {line.startsWith('**') && line.endsWith('**') ? <strong>{line.replace(/\*\*/g, '')}</strong> : line}
                      <br/>
                    </span>
                  ))}
                  {msg.isStreaming && <span className={styles.cursor}>|</span>}
                </div>
              </motion.div>
            ))}

            {isProcessing && processingState && (
              <motion.div 
                className={styles.processingState}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Search size={14} className={styles.spinIcon} />
                {processingState}
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={styles.inputArea}>
            <div className={styles.suggestedQueries}>
              {suggestedQueries.map(q => (
                <button 
                  key={q.id} 
                  className={styles.suggestedBtn}
                  onClick={() => handleQuery(q.id, q.text)}
                  disabled={isProcessing}
                >
                  {q.text}
                </button>
              ))}
            </div>
            <div className={styles.inputBox}>
              <input 
                type="text" 
                placeholder="Ask a question about your data... (Try the suggested queries above!)" 
                className={styles.input}
                disabled
              />
              <button className={styles.sendBtn} disabled>
                <Send size={18} />
              </button>
            </div>
            <p className={styles.inputHint}>This is an interactive MVP. Click a suggested query to see the RAG logic in action.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
