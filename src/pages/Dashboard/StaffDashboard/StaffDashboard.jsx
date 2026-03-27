import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import { Users, Briefcase } from 'lucide-react';
import styles from '../Dashboard.module.css';

const StaffDashboard = () => {
  return (
    <DashboardLayout title="Staff Dashboard" role="Staff">
      <section className={styles.welcomeSection}>
        <h2 className={styles.welcomeTitle}>Staff Portal</h2>
        <p className={styles.welcomeSubtitle}>Manage your tasks, view department updates, and directory.</p>
      </section>
      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>Assigned Tasks</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>5</span>
            <span className={`${styles.kpiTrend} ${styles.trendPending}`}>
              <Briefcase size={14} /> In Progress
            </span>
          </div>
        </div>
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>Team Members</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>24</span>
            <span className={`${styles.kpiTrend} ${styles.trendUp}`}>
              <Users size={14} /> Active
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StaffDashboard;
