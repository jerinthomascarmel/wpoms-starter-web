import React from 'react';
import styles from './Services.module.css';
import { Factory, Store, Users } from 'lucide-react';

const services = [
  {
    title: "Manufacturers",
    description: "Centralize your production output and warranty issuance with blockchain-grade traceability.",
    icon: Factory,
    color: "gold"
  },
  {
    title: "Vendors",
    description: "Manage complex procurement cycles and inventory distribution with real-time analytics.",
    icon: Store,
    color: "navy"
  },
  {
    title: "Customers",
    description: "A unified digital vault for all your high-value purchase records and active warranties.",
    icon: Users,
    color: "gold"
  }
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Orchestrated Roles</h2>
          <p className={styles.subtitle}>A unified ecosystem designed for every stakeholder in the procurement lifecycle.</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.card} animate-scale-in`}>
              <div className={`${styles.iconWrapper} ${service.color === 'gold' ? styles.goldIcon : styles.navyIcon}`}>
                <service.icon size={32} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <button className={styles.learnMore}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
