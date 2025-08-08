import React  from 'react';
import styles from './styles.module.css';


function AnimatedBackground() {
  return (
    <div className={styles['container']}>
      <div className={styles['gradientOverlay']}></div>
      <div className={styles['radialOverlay']}></div>
      <div className={styles['dotsContainer']}>
        <div className={`${styles['dot']} ${styles['dot1']}`}></div>
        <div className={`${styles['dot']} ${styles['dot2']}`}></div>
        <div className={`${styles['dot']} ${styles['dot3']}`}></div>
      </div>
    </div>
  );
}


export default AnimatedBackground;
