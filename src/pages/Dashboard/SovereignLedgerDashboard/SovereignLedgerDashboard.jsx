import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import { Shield, Clock } from 'lucide-react';
import styles from '../Dashboard.module.css';

const SovereignLedgerDashboard = () => {
  return (
    <DashboardLayout title="Ledger Dashboard" role="Sovereign Ledger">
      <section className={styles.welcomeSection}>
        <h2 className={styles.welcomeTitle}>Sovereign Ledger</h2>
        <p className={styles.welcomeSubtitle}>Immutable record of transactions, warrants, and supply chain history.</p>
      </section>
      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>Total Transactions</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>45,912</span>
            <span className={`${styles.kpiTrend} ${styles.trendUp}`}>
              <Shield size={14} /> Verified
            </span>
          </div>
        </div>
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>Pending Blocks</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>3</span>
            <span className={`${styles.kpiTrend} ${styles.trendPending}`}>
              <Clock size={14} /> Validating
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SovereignLedgerDashboard;
