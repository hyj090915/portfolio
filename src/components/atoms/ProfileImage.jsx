import React from 'react';
import styles from './ProfileImage.module.css';

const ProfileImage = ({ src, alt = 'Profile', size = 'medium', className = '' }) => {
  return (
    <div className={`${styles.profileImage} ${styles[size]} ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ProfileImage; 