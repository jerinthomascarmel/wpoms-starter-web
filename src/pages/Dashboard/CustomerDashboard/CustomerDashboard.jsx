import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import { TrendingUp, Clock, Users, Package } from 'lucide-react';
import styles from '../Dashboard.module.css';

const CustomerDashboard = () => {
  return (
    <DashboardLayout title="Customer Dashboard" role="Customer">
      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <h2 className={styles.welcomeTitle}>Welcome back, Customer</h2>
        <p className={styles.welcomeSubtitle}>Here is an overview of your registered warranties and active claims.</p>
      </section>

      {/* KPI Cards Row */}
      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>My Products</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>12</span>
            <span className={`${styles.kpiTrend} ${styles.trendUp}`}>
              <Package size={14} /> Registered
            </span>
          </div>
        </div>
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>Active Claims</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>1</span>
            <span className={`${styles.kpiTrend} ${styles.trendPending}`}>
              <Clock size={14} /> Pending
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard;
