import React  from 'react';
import Image  from 'next/image';
import styles from './styles.module.css';


function CommunitySpeakers() {
  const speakers = [
    { name: 'Sarah Johnson', image: '/placeholder.svg' },
    { name: 'Mike Chen', image: '/placeholder.svg' },
    { name: 'Emily Davis', image: '/placeholder.svg' },
    { name: 'Alex Rodriguez', image: '/placeholder.svg' },
    { name: 'Lisa Thompson', image: '/placeholder.svg' }
  ];

  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <header className={styles['header']}>
          <h3 className={styles['heading']}>
            <span className={styles['gradientText']}>Community Speakers</span>
          </h3>
        </header>
        <ul className={styles['grid']}>
          {speakers.map((speaker, index) => (
            <li key={index} className={styles['item']}>
              <figure className={styles['figure']}>
                <div className={styles['figureMedia']}>
                  <div className={styles['glow']}></div>
                  <div className={styles['avatar']}>
                    <Image
                      src="/diverse-ai-speaker-headshot.png"
                      alt={speaker.name}
                      width={200}
                      height={200}
                      className={styles['image']}
                    />
                  </div>
                </div>
                <figcaption className={styles['name']}>{speaker.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


export default CommunitySpeakers;
