import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1573161158332-544ce39bbad0?auto=format&fit=crop&q=80&w=2069" 
              alt="Professional Team" 
              className={styles.image}
              referrerPolicy="no-referrer"
            />
            <div className={styles.experienceBadge}>
              <div className={styles.years}>15+</div>
              <div className={styles.yearsLabel}>Years of Archive Excellence</div>
            </div>
          </div>
          
          <div className={styles.content}>
            <h2 className={styles.title}>The Standard for Digital Asset Archiving</h2>
            <p className={styles.description}>
              Founded on the principles of transparency and security, WPOMS has evolved from a simple tracking tool into a global standard for procurement and warranty management.
            </p>
            <p className={styles.description}>
              We believe that every high-value asset deserves a permanent, verifiable digital record. Our platform bridges the gap between manufacturers, vendors, and customers, creating a seamless flow of information that protects value and ensures compliance.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>$2.4B+</div>
                <div className={styles.statName}>Managed Warranties</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>0.4s</div>
                <div className={styles.statName}>Retrieval Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
