import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How secure is the digital archive?",
    answer: "Our platform uses enterprise-grade encryption and blockchain-inspired traceability to ensure that every record is immutable and accessible only by authorized stakeholders."
  },
  {
    question: "Can I integrate WPOMS with my existing ERP?",
    answer: "Yes, WPOMS offers a robust API suite that allows for seamless integration with major ERP systems like SAP, Oracle, and Microsoft Dynamics."
  },
  {
    question: "What happens if a vendor goes out of business?",
    answer: "The digital archive is independent of the vendor. Once a warranty is issued and archived, it remains accessible to the customer and manufacturer regardless of the vendor's status."
  },
  {
    question: "Is there a limit to the number of warranties I can store?",
    answer: "No, our cloud-native architecture is designed for infinite scalability, allowing you to archive millions of records with sub-second retrieval speeds."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Everything you need to know about the WPOMS ecosystem.</p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}>
              <button 
                className={styles.questionBtn}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.question}>{faq.question}</span>
                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              <div className={`${styles.answerWrapper} ${activeIndex === index ? styles.show : ''}`}>
                <div className={styles.answer}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
