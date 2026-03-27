import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import { TrendingUp, Clock, Users, Package } from 'lucide-react';
import styles from '../Dashboard.module.css';

const ManufacturerDashboard = () => {
  return (
    <DashboardLayout title="Manufacturer Dashboard" role="Manufacturer">
      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <h2 className={styles.welcomeTitle}>Good morning, Manufacturer</h2>
        <p className={styles.welcomeSubtitle}>Your enterprise overview for today. All purchase orders and active warranties are synced and up to date.</p>
      </section>

      {/* KPI Cards Row */}
      <div className={styles.kpiGrid}>
        {/* KPI 1 */}
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>Total Warranties</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>1,284</span>
            <span className={`${styles.kpiTrend} ${styles.trendUp}`}>
              <TrendingUp size={14} /> +12%
            </span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>Active Purchase Orders</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>42</span>
            <span className={`${styles.kpiTrend} ${styles.trendPending}`}>
              <Clock size={14} /> Pending
            </span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>Staff Members</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>18</span>
            <span className={styles.kpiSubtext}>
              <Users size={14} /> 3 Departments
            </span>
          </div>
        </div>

        {/* KPI 4 */}
        <div className={styles.kpiCard}>
          <p className={styles.kpiLabel}>Products Registered</p>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>312</span>
            <span className={styles.kpiIconBox}>
              <Package size={20} color="#e5c363" />
            </span>
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        {/* Recent Purchase Orders Table */}
        <section className={styles.tableSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Recent Purchase Orders</h3>
            <button className={styles.viewAllBtn}>View Archive</button>
          </div>
          
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>PO Number</th>
                  <th>Vendor</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.poNumber}>PO-88219</td>
                  <td>Lumiere Dynamics</td>
                  <td>Oct 24, 2023</td>
                  <td className={styles.amount}>$12,450.00</td>
                  <td><span className={`${styles.statusBadge} ${styles.statusPending}`}>Pending</span></td>
                </tr>
                <tr>
                  <td className={styles.poNumber}>PO-88215</td>
                  <td>Titan Industries</td>
                  <td>Oct 22, 2023</td>
                  <td className={styles.amount}>$8,200.00</td>
                  <td><span className={`${styles.statusBadge} ${styles.statusApproved}`}>Approved</span></td>
                </tr>
                <tr>
                  <td className={styles.poNumber}>PO-88212</td>
                  <td>Atlas Global</td>
                  <td>Oct 21, 2023</td>
                  <td className={styles.amount}>$4,920.00</td>
                  <td><span className={`${styles.statusBadge} ${styles.statusRejected}`}>Rejected</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Staff Overview Section Component can go here */}
      </div>
    </DashboardLayout>
  );
};

export default ManufacturerDashboard;
