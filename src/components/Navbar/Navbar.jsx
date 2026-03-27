import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>WPOMS</span>
        </div>

        <div className={styles.desktopLinks}>
          {['Features', 'Services', 'About', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={styles.link}
            >
              {item}
            </a>
          ))}
        </div>

        <div className={styles.desktopActions}>
          <Link to="/login">
            <button className={styles.signInBtn}>
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button className={`${styles.registerBtn} gold-gradient`}>
              Register
            </button>
          </Link>
        </div>

        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          {['Features', 'Services', 'About', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={styles.mobileLink}
            >
              {item}
            </a>
          ))}
          <hr className={styles.divider} />
          <button className={styles.mobileSignInBtn}>Sign In</button>
          <button className={`${styles.mobileRegisterBtn} gold-gradient`}>Register</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
