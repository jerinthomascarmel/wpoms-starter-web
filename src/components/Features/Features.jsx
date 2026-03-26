import React from 'react';
import styles from './Features.module.css';
import { ShieldCheck, Link, UserCheck } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>Precision Features for High-Value Assets</h2>
            <p className={styles.subtitle}>Our platform is engineered to handle the most demanding procurement environments with absolute integrity.</p>
            
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>Regulatory Compliance</h3>
                  <p className={styles.featureDescription}>Automated adherence to international trade and warranty standards.</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <Link size={24} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>End-to-End Traceability</h3>
                  <p className={styles.featureDescription}>Every asset has a verifiable digital pedigree from factory to customer.</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>Role-Based Control</h3>
                  <p className={styles.featureDescription}>Granular permissions ensuring each stakeholder sees only what they need.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
                alt="Data Visualization" 
                className={styles.image}
                referrerPolicy="no-referrer"
              />
              <div className={`${styles.statCard} animate-scale-in`}>
                <div className={styles.statValue}>99.9%</div>
                <div className={styles.statLabel}>Uptime Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
