import React from 'react';
import styles from './Footer.module.css';
import { Shield, Globe, Lock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.branding}>
            <div className={styles.logo}>
              <span className={styles.logoText}>WPOMS</span>
            </div>
            <p className={styles.tagline}>The Digital Archive for Global Procurement & Warranties.</p>
            <div className={styles.trustBadges}>
              <div className={styles.badge}>
                <Shield size={16} />
                <span>ISO 27001</span>
              </div>
              <div className={styles.badge}>
                <Globe size={16} />
                <span>Global Standard</span>
              </div>
              <div className={styles.badge}>
                <Lock size={16} />
                <span>256-bit AES</span>
              </div>
            </div>
          </div>
          
          <div className={styles.linksGrid}>
            <div>
              <h4 className={styles.linkTitle}>Platform</h4>
              <ul className={styles.linkList}>
                <li><a href="#features">Features</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className={styles.linkTitle}>Legal</h4>
              <ul className={styles.linkList}>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Compliance</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 WPOMS Ecosystem. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
