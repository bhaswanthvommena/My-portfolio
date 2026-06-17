"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { ArrowLeft, TrendingUp, Package, Clock, AlertTriangle } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

export default function SupplyChainDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/data/supply_chain_metrics.json')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) {
    return <div className={styles.loader}>Processing ETL Pipeline...</div>;
  }

  const { kpis, revenueByRegion, monthlySales } = data;

  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/#projects" className={styles.backBtn}>
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Global Supply Chain Intelligence</h1>
          <p className={styles.subtitle}>Automated ETL Pipeline & Analytics Dashboard</p>
        </div>
      </header>

      <main className={styles.main}>
        {/* KPI Grid */}
        <div className={styles.kpiGrid}>
          <motion.div className={styles.kpiCard} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}}>
            <div className={styles.kpiHeader}>
              <TrendingUp className={styles.kpiIcon} />
              <span>Total Revenue</span>
            </div>
            <div className={styles.kpiValue}>{formatCurrency(kpis.totalRevenue)}</div>
            <div className={styles.kpiSub}>Across {kpis.totalOrders.toLocaleString()} global orders</div>
          </motion.div>
          
          <motion.div className={styles.kpiCard} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}}>
            <div className={styles.kpiHeader}>
              <Package className={styles.kpiIcon} />
              <span>Avg Profit Margin</span>
            </div>
            <div className={styles.kpiValue}>{kpis.avgProfitMargin.toFixed(2)}%</div>
          </motion.div>
          
          <motion.div className={styles.kpiCard} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3}}>
            <div className={styles.kpiHeader}>
              <Clock className={styles.kpiIcon} />
              <span>Avg Shipping Delay</span>
            </div>
            <div className={styles.kpiValue}>{kpis.avgShippingDelay.toFixed(2)} Days</div>
          </motion.div>
          
          <motion.div className={styles.kpiCard} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}}>
            <div className={styles.kpiHeader}>
              <AlertTriangle className={styles.kpiIcon} style={{color: '#ff4d4d'}}/>
              <span>Late Delivery Risk</span>
            </div>
            <div className={styles.kpiValue}>{kpis.lateDeliveryRate.toFixed(1)}%</div>
            <div className={styles.kpiSub}>Orders at risk of missing SLA</div>
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className={styles.chartsGrid}>
          {/* Monthly Sales */}
          <motion.div className={styles.chartCard} initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.5}}>
            <h3 className={styles.chartTitle}>Monthly Revenue Trend</h3>
            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlySales}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#00f2ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="#888" tick={{fontSize: 12}} />
                  <YAxis stroke="#888" tickFormatter={(val) => `$${(val/1000000).toFixed(0)}M`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(10,10,12,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    formatter={(val: number) => formatCurrency(val)}
                  />
                  <Area type="monotone" dataKey="value" stroke="#00f2ff" fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Revenue by Region */}
          <motion.div className={styles.chartCard} initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.6}}>
            <h3 className={styles.chartTitle}>Top 10 Regions by Revenue</h3>
            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueByRegion} layout="vertical" margin={{ left: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                  <XAxis type="number" stroke="#888" tickFormatter={(val) => `$${(val/1000000).toFixed(0)}M`} />
                  <YAxis dataKey="name" type="category" stroke="#888" tick={{fontSize: 11}} width={80} />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{ backgroundColor: 'rgba(10,10,12,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    formatter={(val: number) => formatCurrency(val)}
                  />
                  <Bar dataKey="value" fill="#7928ca" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
