import React from 'react';
import styles from './Hero.module.css';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.badge} animate-fade-in-up`}>
            <span className={styles.badgeText}>Elite Procurement Standard</span>
          </div>
          
          <h1 className={`${styles.title} animate-fade-in-up`}>
            The Digital Archive for Global <span className={styles.goldText}>Procurement & Warranties.</span>
          </h1>
          
          <p className={`${styles.description} animate-fade-in-up`}>
            WPOMS is an elite multi-user ecosystem for manufacturers, vendors, and customers to streamline purchase orders and professional warranty lifecycles.
          </p>
          
          <div className={`${styles.actions} animate-fade-in-up`}>
            <button className={`${styles.primaryBtn} gold-gradient`}>
              Get Started <ChevronRight size={18} />
            </button>
            <button className={styles.secondaryBtn}>
              <div className={styles.playIcon}>
                <Play size={16} fill="currentColor" />
              </div>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
