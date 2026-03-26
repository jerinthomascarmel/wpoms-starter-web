import React from 'react';
import styles from './CTA.module.css';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={`${styles.card} gold-gradient`}>
          <div className={styles.content}>
            <h2 className={styles.title}>Secure Your Digital Archive Today.</h2>
            <p className={styles.subtitle}>Join the elite network of manufacturers and vendors who are redefining the procurement lifecycle.</p>
            
            <div className={styles.actions}>
              <button className={styles.primaryBtn}>
                Register Now <ArrowRight size={20} />
              </button>
              <button className={styles.secondaryBtn}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
