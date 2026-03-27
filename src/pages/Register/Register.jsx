import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ShieldCheck,
  RefreshCw,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Factory,
  ShoppingCart,
  User,
  Globe,
  Phone,
  MapPin,
  BadgeCheck,
  Lock,
  Calendar,
  Mail,
  Upload,
} from 'lucide-react';
import styles from './Register.module.css';

const STEPS = [
  { label: 'Basic Info', sub: 'Account Setup' },
  { label: 'Select Role', sub: 'Account Type' },
  { label: 'Role Details', sub: 'Organization' },
];

const ROLES = [
  {
    id: 'manufacturer',
    icon: <Factory size={28} />,
    title: 'Manufacturer',
    desc: 'Production & warranty management',
  },
  {
    id: 'vendor',
    icon: <ShoppingCart size={28} />,
    title: 'Vendor',
    desc: 'Sales & purchase orders',
  },
  {
    id: 'staff',
    icon: <User size={28} />,
    title: 'Staff',
    desc: 'Internal team, limited access',
  },
  {
    id: 'customer',
    icon: <Globe size={28} />,
    title: 'Customer',
    desc: 'Track warranties & orders',
  },
];

const Register = () => {
  const [step, setStep] = useState(0); // 0-indexed
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    role: '',
    // Vendor
    vendorName: '',
    vendorEmail: '',
    vendorAddress: '',
    vendorCity: '',
    vendorPhone: '',
    vendorGstNo: '',
    // Manufacturer
    companyName: '',
    companyEmail: '',
    companyAddress: '',
    companyPhone: '',
    companyGstNo: '',
    // Staff
    staffId: '',
    tempPassword: '',
    // Customer
    customerPhone: '',
    customerDob: '',
    shippingAddress: '',
    primaryContactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit:', formData);
  };

  // ── Strength indicator ──────────────────────────────────────────────
  const getStrength = (pwd) => {
    if (!pwd) return 0;
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };
  const strength = getStrength(formData.password);
  const strengthLabel = ['', 'Weak', 'Fair', 'Strong', 'Very Strong'][strength];
  const strengthColor = ['', '#ef4444', '#f59e0b', '#745b00', '#16a34a'][strength];

  // ── Progress ────────────────────────────────────────────────────────
  const progressPct = Math.round(((step + 1) / STEPS.length) * 100);

  // ── Input helper ───────────────────────────────────────────────────
  const Field = ({ label, children }) => (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  );

  const InputRow = ({ children }) => (
    <div className={styles.inputRow}>{children}</div>
  );

  // ── Step 1: Basic Info ─────────────────────────────────────────────
  const renderBasicInfo = () => (
    <div className={styles.stepContent}>
      <header className={styles.stepHeader}>
        <h1 className={styles.stepTitle}>Create Your Account</h1>
        <p className={styles.stepSubtitle}>
          Begin your archival journey by providing your primary identity details.
        </p>
      </header>

      <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
        <div className={styles.formCard}>
          <Field label="Full Name">
            <div className={styles.inputWrapper}>
              <input
                name="fullName"
                type="text"
                className={styles.input}
                placeholder="e.g. Alistair Thorne"
                value={formData.fullName}
                onChange={handleChange}
              />
              <span className={styles.inputIcon}><User size={18} /></span>
            </div>
          </Field>
          <Field label="Email Address">
            <div className={styles.inputWrapper}>
              <input
                name="email"
                type="email"
                className={styles.input}
                placeholder="a.thorne@enterprise.com"
                value={formData.email}
                onChange={handleChange}
              />
              <span className={styles.inputIcon}><Mail size={18} /></span>
            </div>
          </Field>

          <Field label="Password">
            <div className={styles.inputWrapper}>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className={styles.input}
                placeholder="••••••••••••"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="button" className={styles.toggleBtn} onClick={() => setShowPassword((v) => !v)}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {formData.password && (
              <div className={styles.strengthWrap}>
                <div className={styles.strengthBars}>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={styles.strengthBar}
                      style={{ backgroundColor: i <= strength ? strengthColor : '#dee3ec' }}
                    />
                  ))}
                </div>
                <span className={styles.strengthLabel} style={{ color: strengthColor }}>
                  {strengthLabel}
                </span>
              </div>
            )}
          </Field>
          <Field label="Confirm Password">
            <div className={styles.inputWrapper}>
              <input
                name="confirmPassword"
                type={showConfirm ? 'text' : 'password'}
                className={styles.input}
                placeholder="••••••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button type="button" className={styles.toggleBtn} onClick={() => setShowConfirm((v) => !v)}>
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </Field>

        </div>

        <footer className={styles.stepFooter}>
          <Link to="/login" className={styles.backTextBtn}>
            <ArrowLeft size={16} /> Back to Login
          </Link>
          <div className={styles.footerRight}>
            <button type="submit" className={styles.btnPrimary}>
              Next Step <ArrowRight size={18} />
            </button>
          </div>
        </footer>
      </form>
    </div>
  );

  // ── Step 2: Select Role ────────────────────────────────────────────
  const renderSelectRole = () => (
    <div className={styles.stepContent}>
      <header className={styles.stepHeader}>
        <h1 className={styles.stepTitle}>What is your role?</h1>
        <p className={styles.stepSubtitle}>
          Choose the identity that best describes your workflow. This will tailor your experience
          and permissions within the archive.
        </p>
      </header>

      <div className={styles.roleGrid}>
        {ROLES.map((r) => (
          <button
            key={r.id}
            type="button"
            className={`${styles.roleCard} ${formData.role === r.id ? styles.roleCardActive : ''}`}
            onClick={() => setFormData((prev) => ({ ...prev, role: r.id }))}
          >
            {formData.role === r.id && (
              <div className={styles.roleCheckBadge}>
                <Check size={14} strokeWidth={3} />
              </div>
            )}
            <div className={`${styles.roleIconWrap} ${formData.role === r.id ? styles.roleIconActive : ''}`}>
              {r.icon}
            </div>
            <h3 className={styles.roleCardTitle}>{r.title}</h3>
            <p className={styles.roleCardDesc}>{r.desc}</p>
          </button>
        ))}
      </div>

      <footer className={styles.stepFooter}>
        <button type="button" className={styles.backTextBtn} onClick={handlePrev}>
          <ArrowLeft size={18} /> Back
        </button>
        <div className={styles.footerRight}>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={handleNext}
            disabled={!formData.role}
            style={{ opacity: !formData.role ? 0.5 : 1, cursor: !formData.role ? 'not-allowed' : 'pointer' }}
          >
            Next Step <ArrowRight size={18} />
          </button>
        </div>
      </footer>
    </div>
  );

  // ── Step 3: Role Details ───────────────────────────────────────────
  const renderRoleDetails = () => {
    const { role } = formData;

    let titleText = 'Role Details';
    let subtitleText = 'Provide specific information for your role.';
    if (role === 'vendor') { titleText = 'Vendor Details'; subtitleText = 'Please provide the official credentials for your business entity to proceed with verification.'; }
    if (role === 'manufacturer') { titleText = 'Manufacturer Details'; subtitleText = 'Provide official organizational information for record archival.'; }
    if (role === 'staff') { titleText = 'Staff Details'; subtitleText = 'Finalize your institutional credentials to access the WPOMS secure ledger.'; }
    if (role === 'customer') { titleText = 'Customer Details'; subtitleText = 'Provide the primary administrative contact details for seamless warranty management.'; }

    return (
      <div className={styles.stepContent}>
        <header className={styles.stepHeader}>
          <h1 className={styles.stepTitle}>{titleText}</h1>
          <p className={styles.stepSubtitle}>{subtitleText}</p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formCard}>
            {role === 'vendor' && (
              <>
                <InputRow>
                  <Field label="Vendor Name">
                    <input name="vendorName" type="text" className={styles.input} placeholder="Legal Business Name" value={formData.vendorName} onChange={handleChange} />
                  </Field>
                  <Field label="Business Email">
                    <input name="vendorEmail" type="email" className={styles.input} placeholder="example@company.com" value={formData.vendorEmail} onChange={handleChange} />
                  </Field>
                </InputRow>
                <InputRow>
                  <Field label="Address">
                    <input name="vendorAddress" type="text" className={styles.input} placeholder="Street Address, Building No." value={formData.vendorAddress} onChange={handleChange} />
                  </Field>
                  <Field label="Place / City">
                    <input name="vendorCity" type="text" className={styles.input} placeholder="e.g. New York" value={formData.vendorCity} onChange={handleChange} />
                  </Field>
                </InputRow>
                <InputRow>
                  <Field label="Phone">
                    <div className={styles.inputWrapper}>
                      <input name="vendorPhone" type="tel" className={styles.input} placeholder="+1 (000) 000-0000" value={formData.vendorPhone} onChange={handleChange} />
                      <span className={styles.inputIcon}><Phone size={18} /></span>
                    </div>
                  </Field>
                  <Field label="GST Reg No">
                    <div className={styles.inputWrapper}>
                      <input name="vendorGstNo" type="text" className={styles.input} placeholder="Registration ID" value={formData.vendorGstNo} onChange={handleChange} />
                      <span className={styles.inputIcon}><BadgeCheck size={18} /></span>
                    </div>
                  </Field>
                </InputRow>
                <Field label="Business Credentials">
                  <div className={styles.uploadZone}>
                    <input type="file" className={styles.fileInput} />
                    <div className={styles.uploadInner}>
                      <span className={styles.uploadIcon}><Upload size={28} /></span>
                      <p className={styles.uploadTitle}>Upload License / Certificate — PDF JPG PNG</p>
                      <p className={styles.uploadSub}>Drag and drop or click to browse files</p>
                    </div>
                  </div>
                </Field>
              </>
            )}

            {role === 'manufacturer' && (
              <>
                <InputRow>
                  <Field label="Company Name">
                    <input name="companyName" type="text" className={styles.input} placeholder="e.g. Heritage Manufacturing Ltd" value={formData.companyName} onChange={handleChange} />
                  </Field>
                  <Field label="Company Email">
                    <input name="companyEmail" type="email" className={styles.input} placeholder="corporate@heritage.com" value={formData.companyEmail} onChange={handleChange} />
                  </Field>
                </InputRow>
                <Field label="Registered Company Address">
                  <input name="companyAddress" type="text" className={styles.input} placeholder="Suite 400, Industrial Plaza, London, UK" value={formData.companyAddress} onChange={handleChange} />
                </Field>
                <InputRow>
                  <Field label="Company Phone">
                    <div className={styles.inputWrapper}>
                      <input name="companyPhone" type="tel" className={styles.input} placeholder="+44 20 7946 0000" value={formData.companyPhone} onChange={handleChange} />
                      <span className={styles.inputIcon}><Phone size={18} /></span>
                    </div>
                  </Field>
                  <Field label="GST / Business Reg No.">
                    <div className={styles.inputWrapper}>
                      <input name="companyGstNo" type="text" className={styles.input} placeholder="GB 123 4567 89" value={formData.companyGstNo} onChange={handleChange} />
                      <span className={styles.inputIcon}><BadgeCheck size={18} /></span>
                    </div>
                  </Field>
                </InputRow>
                <Field label="Certification Documents">
                  <div className={styles.uploadZone}>
                    <input type="file" className={styles.fileInput} />
                    <div className={styles.uploadInner}>
                      <span className={styles.uploadIcon}><Upload size={28} /></span>
                      <p className={styles.uploadTitle}>Upload License / Certificate</p>
                      <p className={styles.uploadSub}>PDF, JPG, or PNG (Max 10MB)</p>
                    </div>
                  </div>
                </Field>
              </>
            )}

            {role === 'staff' && (
              <>
                <InputRow>
                  <Field label="Staff ID">
                    <div className={styles.inputWrapper}>
                      <input name="staffId" type="text" className={styles.input} placeholder="Enter ID" value={formData.staffId} onChange={handleChange} />
                      <span className={styles.inputIcon}><BadgeCheck size={18} /></span>
                    </div>
                  </Field>
                  <Field label="Temporary Password">
                    <div className={styles.inputWrapper}>
                      <input name="tempPassword" type="password" className={styles.input} placeholder="••••••••" value={formData.tempPassword} onChange={handleChange} />
                      <span className={styles.inputIcon}><Lock size={18} /></span>
                    </div>
                  </Field>
                </InputRow>
                <div className={styles.infoBox}>
                  <span className={styles.infoIcon}>ℹ</span>
                  <p className={styles.infoText}>
                    Staff accounts are provisioned by your Manufacturer. If you do not have your
                    temporary credentials, please contact your regional administrator.
                  </p>
                </div>
              </>
            )}

            {role === 'customer' && (
              <>
                <InputRow>
                  <Field label="Phone Number">
                    <div className={styles.inputWrapper}>
                      <input name="customerPhone" type="tel" className={styles.input} placeholder="+1 (555) 000-0000" value={formData.customerPhone} onChange={handleChange} />
                      <span className={styles.inputIcon}><Phone size={18} /></span>
                    </div>
                  </Field>
                  <Field label="Date of Birth">
                    <div className={styles.inputWrapper}>
                      <input name="customerDob" type="date" className={styles.input} value={formData.customerDob} onChange={handleChange} />
                      <span className={styles.inputIcon}><Calendar size={18} /></span>
                    </div>
                  </Field>
                </InputRow>
                <Field label="Shipping Address">
                  <div className={styles.inputWrapper}>
                    <textarea
                      name="shippingAddress"
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Enter full street address, apartment, suite, etc."
                      rows={3}
                      value={formData.shippingAddress}
                      onChange={handleChange}
                    />
                    <span className={`${styles.inputIcon} ${styles.inputIconTop}`}><MapPin size={18} /></span>
                  </div>
                </Field>
                <Field label="Primary Contact Number">
                  <div className={styles.inputWrapper}>
                    <input
                      name="primaryContactNumber"
                      type="tel"
                      className={styles.input}
                      placeholder="+1 (555) 000-0000"
                      value={formData.primaryContactNumber}
                      onChange={handleChange}
                    />
                    <span className={styles.inputIcon}><Phone size={18} /></span>
                  </div>
                </Field>
              </>
            )}
          </div>

          <footer className={styles.stepFooter}>
            <button type="button" className={styles.backTextBtn} onClick={handlePrev}>
              <ArrowLeft size={16} /> Back
            </button>
            <div className={styles.footerRight}>
              <button type="submit" className={styles.btnPrimary}>
                Create Account
              </button>
            </div>
          </footer>
        </form>
      </div>
    );
  };

  return (
    <main className={styles.registerPage}>
      {/* ── Left Sidebar ── */}
      <aside className={styles.sidebar}>
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

          {/* Step Tracker */}
          <nav className={styles.stepTracker}>
            <div className={styles.trackerLine} />
            {STEPS.map((s, i) => {
              const isDone = i < step;
              const isActive = i === step;
              return (
                <div key={i} className={styles.trackerItem}>
                  <div className={`${styles.trackerDot} ${isDone ? styles.trackerDotDone : ''} ${isActive ? styles.trackerDotActive : ''}`}>
                    {isDone ? <Check size={12} strokeWidth={3} /> : <span className={styles.trackerNum}>{i + 1}</span>}
                  </div>
                  <div>
                    <p className={`${styles.trackerStepLabel} ${isActive ? styles.trackerStepLabelActive : ''}`}>
                      {s.sub}
                    </p>
                    <p className={`${styles.trackerStepName} ${isActive ? styles.trackerStepNameActive : isDone ? styles.trackerStepNameDone : ''}`}>
                      {s.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Branding footer */}
        <div className={styles.brandingFooter}>
          <div className={styles.goldDivider} />
          <p className={styles.brandingTagline}>
            Refining the digital archive for global institutions.
          </p>
        </div>
      </aside>

      {/* ── Right: Form Panel ── */}
      <section className={styles.formPanel}>
        {/* Progress bar */}
        <header className={styles.progressHeader}>
          <div className={styles.progressMeta}>
            <span className={styles.progressStep}>Step {step + 1} of {STEPS.length}</span>
            <span className={styles.progressPct}>{progressPct}% Complete</span>
          </div>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
          </div>
        </header>

        {/* Animated content */}
        <div className={styles.panelContent} key={step}>
          {step === 0 && renderBasicInfo()}
          {step === 1 && renderSelectRole()}
          {step === 2 && renderRoleDetails()}
        </div>
      </section>
    </main>
  );
};

export default Register;
