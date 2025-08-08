import React  from 'react';
import styles from './styles.module.css';


function CommunityStats() {
  const stats = [
    { number: '200+', label: 'Local Developers' },
    { number: '50+', label: 'Austin Speakers' },
    { number: '15+', label: 'Hands-On Sessions' },
    { number: '∞', label: 'New Connections' }
  ];

  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <header className={styles['header']}>
          <h3 className={styles['heading']}>
            <span className={styles['gradientHeading']}>Community Stats</span>
          </h3>
        </header>
        <div className={styles['grid']}>
          {stats.map((stat, index) => (
            <article key={index} className={styles['statWrap']}>
              <div className={styles['statGlow']} aria-hidden="true"></div>
              <div className={styles['statCard']}>
                <div className={styles['statNumber']}>{stat.number}</div>
                <div className={styles['statLabel']}>{stat.label}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


export default CommunityStats;
