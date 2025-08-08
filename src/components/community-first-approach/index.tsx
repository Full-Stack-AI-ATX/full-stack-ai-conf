import React  from 'react';
import styles from './styles.module.css';


function CommunityFirstApproach() {
  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <header className={styles['header']}>
          <h2 className={styles['title']}>
            <span className={styles['gradientText']}>Community-First</span>{' '}
            <span className={styles['accentText']}>Approach</span>
          </h2>
        </header>
        <p className={styles['strapline']}>
          Local Developers <span className={styles['highlight']}>Building Together</span>
        </p>
        <div className={styles['copyWrapper']}>
          <p className={styles['copy']}>
            Our community-focused conference emphasizes practical AI integration, real-world applications,
            and hands-on workshops designed to help Austin developers build better AI-powered applications
            while fostering lasting professional relationships.
          </p>
        </div>
      </div>
    </section>
  );
}


export default CommunityFirstApproach;
