import React      from 'react';
import Image      from 'next/image';
import { Button } from '@Components/ui/button';
import { Play }   from 'lucide-react';
import styles     from './styles.module.css';


function SynaptoWSO2() {
  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <header className={styles['titleRow']}>
          <h2 className={styles['title']}>
            <span className={styles['brand']}>Synapto</span>
            <span className={styles['product']}>
              WSO<sub>2</sub>
            </span>
          </h2>
        </header>
        <figure className={styles['mediaWrapper']}>
          <div className={styles['media']}>
            <Image
              src="/ai-conference-presentation.png"
              alt="Conference presentation"
              width={800}
              height={400}
              className={styles['mediaImage']}
            />
            <div className={styles['overlay']}>
              <Button size="lg" className={styles['playButton']}>
                <Play className={styles['playIcon']} />
              </Button>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};


export default SynaptoWSO2;
