import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, RefreshCw, Lock, AtSign, Eye, EyeOff } from 'lucide-react';
import styles from './Login.module.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to auth service
    console.log('Login attempt:', formData);
  };

  const features = [
    {
      icon: <ShieldCheck size={22} />,
      title: 'Real-time tracking',
      desc: 'Complete visibility into your high-value assets across global jurisdictions.',
    },
    {
      icon: <RefreshCw size={22} />,
      title: 'Automated workflows',
      desc: 'Smart notification systems for renewals and fulfillment triggers.',
    },
    {
      icon: <Lock size={22} />,
      title: 'Secure management',
      desc: 'Military-grade encryption for all institutional purchase data.',
    },
  ];

  return (
    <main className={styles.loginPage}>
      {/* ── Left: Branding Panel ── */}
      <section className={styles.brandingPanel}>
        <div className={styles.decorativeCircle1} />
        <div className={styles.decorativeCircle2} />

        <div className={styles.brandingContent}>
          {/* Logo */}
          <div className={styles.logoRow}>
            <div className={styles.logoMark}>
              <span className={styles.logoLetter}>W</span>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>WPOMS</span>
              <span className={styles.logoSubtitle}>Enterprise Management</span>
            </div>
          </div>

          {/* Headline */}
          <h2 className={styles.headline}>
            Warranty &amp; Purchase Order Management System
          </h2>

          {/* Feature bullets */}
          <ul className={styles.featureList}>
            {features.map((f, i) => (
              <li key={i} className={styles.featureItem}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <div>
                  <h3 className={styles.featureItemTitle}>{f.title}</h3>
                  <p className={styles.featureItemDesc}>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Branding footer */}
        <div className={styles.brandingFooter}>
          <div className={styles.goldDivider} />
          <p className={styles.brandingTagline}>
            Refining the digital archive for global institutions.
          </p>
        </div>
      </section>

      {/* ── Right: Form Panel ── */}
      <section className={styles.formPanel}>
        <div className={styles.formInner}>
          <header className={styles.formHeader}>
            <h1 className={styles.formTitle}>Welcome Back</h1>
            <p className={styles.formSubtitle}>
              Please enter your credentials to access the archive.
            </p>
          </header>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="email">
                Email Address
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="name@enterprise.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <span className={styles.inputIcon}>
                  <AtSign size={18} />
                </span>
              </div>
            </div>

            {/* Password */}
            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label} htmlFor="password">
                  Security Password
                </label>
                <a href="#" className={styles.forgotLink}>
                  Forgot Password?
                </a>
              </div>
              <div className={styles.inputWrapper}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className={styles.input}
                  placeholder="••••••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={styles.toggleBtn}
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className={styles.checkboxRow}>
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className={styles.checkbox}
                checked={formData.remember}
                onChange={handleChange}
              />
              <label htmlFor="remember" className={styles.checkboxLabel}>
                Keep me signed in 6 days
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className={styles.submitBtn}>
              Sign In to Dashboard
            </button>
          </form>

          <footer className={styles.formFooter}>
            <p className={styles.footerText}>
              Don&apos;t have an account?
              <Link to="/register" className={styles.footerLink}>
                Register here
              </Link>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default Login;
