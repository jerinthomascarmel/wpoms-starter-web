import React from 'react';
import styles from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';
import FAQ from '../../components/FAQ/FAQ';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
