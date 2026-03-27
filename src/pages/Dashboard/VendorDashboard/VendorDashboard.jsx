import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import { TrendingUp, Clock, Package } from 'lucide-react';
import styles from '../Dashboard.module.css';

const VendorDashboard = () => {
  return (
    <DashboardLayout title="Vendor Dashboard" role="Vendor">
      <section className={styles.welcomeSection}>
        <h2 className={styles.welcomeTitle}>Dashboard Overview</h2>
        <p className={styles.welcomeSubtitle}>View your purchase orders, invoices, and shipment status.</p>
      </section>
      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>Orders to Fulfill</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>8</span>
            <span className={`${styles.kpiTrend} ${styles.trendPending}`}>
              <Clock size={14} /> Action Required
            </span>
          </div>
        </div>
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>Items Shipped</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>154</span>
            <span className={`${styles.kpiTrend} ${styles.trendUp}`}>
              <TrendingUp size={14} /> This Month
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VendorDashboard;
