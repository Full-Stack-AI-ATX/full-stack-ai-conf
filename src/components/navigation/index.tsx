import React      from 'react';
import Link       from 'next/link';
import Image      from 'next/image';
import { Zap }    from 'lucide-react';

import { Button } from '@Components/ui/button';
import styles     from './styles.module.css';


function NavigationBar() {
  return (
    <nav className={styles['nav']}>
      <div className={styles['container']}>
        <Link href="/" className={styles['brand']}>
          <div className={styles['logo-wrapper']}>
            <Image
              src="/rider-ai-bull.png"
              alt="Rider on AI bull"
              width={170}
              height={85}
              priority
              className={styles['logo-image-1']}
            />
            <Image
              src="/full-stack-type-logo.png"
              alt="Full-Stack AI Rodeo"
              width={360}
              height={45}
              priority
              className={styles['logo-image-2']}
            />
          </div>
        </Link>

        <div className={styles['links']}>
          <Link href="/" className={styles['link']}>
            Home
            <div className={styles['underline']}></div>
          </Link>
          <Link href="/speakers" className={styles['link']}>
            Speakers
            <div className={styles['underline']}></div>
          </Link>
          <Link href="/schedule" className={styles['link']}>
            Schedule
            <div className={styles['underline']}></div>
          </Link>
          <Link href="/tickets" className={styles['link']}>
            Tickets
            <div className={styles['underline']}></div>
          </Link>
        </div>

        <Button className={styles['cta-button']}>
          <Zap className={styles['cta-icon']} />
          Register Now
        </Button>
      </div>
    </nav>
  );
}


export default NavigationBar;
