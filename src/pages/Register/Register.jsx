import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from './Register.module.css';

const Register = () => {
  return (
    <main className={styles.registerPage}>
      {/* ── Left: Branding Panel ── */}
      <section className={styles.brandingPanel}>
        <div className={styles.decorativeCircle1} />
        <div className={styles.decorativeCircle2} />

        <div className={styles.brandingContent}>
          <div className={styles.logoRow}>
            <div className={styles.logoMark}>
              <span className={styles.logoLetter}>W</span>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>WPOMS</span>
              <span className={styles.logoSubtitle}>Enterprise Management</span>
            </div>
          </div>

          <h2 className={styles.headline}>
            Join the Archive
          </h2>
        </div>

        <div className={styles.brandingFooter}>
          <div className={styles.goldDivider} />
          <p className={styles.brandingTagline}>
            Refining the digital archive for global institutions.
          </p>
        </div>
      </section>

      {/* ── Right: Placeholder Panel ── */}
      <section className={styles.formPanel}>
        <div className={styles.formInner}>
          <span className={styles.badge}>Coming Soon</span>

          <h1 className={styles.formTitle}>Create Account</h1>

          <p className={styles.formSubtitle}>
            Registration is currently under development.<br />
            Check back soon to create your WPOMS account.
          </p>

          <div className={styles.divider} />

          <Link to="/login" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to Login
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Register;
