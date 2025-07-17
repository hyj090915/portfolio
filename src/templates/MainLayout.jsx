import React from 'react';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import styles from './MainLayout.module.css';

const MainLayout = ({ children, toggleTheme, isDark }) => {
  return (
    <div className={styles.layout}>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 