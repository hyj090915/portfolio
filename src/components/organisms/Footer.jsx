import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            © 2025 한예준
          </div>
          <div className={styles.description}>
            끈기 있게 성장하는 풀스택 개발자
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 