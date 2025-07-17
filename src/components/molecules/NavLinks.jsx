import React from 'react';
import styles from './NavLinks.module.css';

const NavLinks = ({ links, activeLink, onLinkClick }) => {
  return (
    <nav className={styles.navLinks}>
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`${styles.navLink} ${activeLink === link.id ? styles.active : ''}`}
          onClick={() => onLinkClick(link.id)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks; 