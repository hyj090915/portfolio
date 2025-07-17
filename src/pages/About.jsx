import React from 'react';
import AboutSection from '../components/organisms/AboutSection';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <AboutSection />
    </div>
  );
};

export default About; 