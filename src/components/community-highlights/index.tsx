import React  from 'react';
import Image  from 'next/image';
import styles from './styles.module.css';


function CommunityHighlights() {
  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <header className={styles['header']}>
          <h3 className={styles['heading']}>
            <span className={styles['gradientHeading']}>Community Highlights</span>
          </h3>
        </header>
        <div className={styles['grid']}>
          {[...Array(4)].map((_, index) => (
            <figure key={index} className={styles['item']}>
              <div className={styles['itemGlow']} aria-hidden="true"></div>
              <Image
                src="/ai-conference-networking.png"
                alt={`archive image ${index + 1}`}
                width={300}
                height={300}
                className={styles['itemImg']}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


export default CommunityHighlights;
