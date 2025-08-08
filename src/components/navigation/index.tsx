import React      from 'react';
import Link       from 'next/link';
import { Zap }    from 'lucide-react';

import { Button } from '@Components/ui/button';
import styles     from './styles.module.css';


function NavigationBar() {
  return (
    <nav className={styles['nav']}>
      <div className={styles['container']}>
        <Link href="/" className={styles['brand']}>
          <div className={styles['logo-wrapper']}>
            <div className={styles['logo-box']}></div>
            <div className={styles['logo-glow']}></div>
          </div>
          <span className={styles['brand-text']}>
            FULL-STACK AI
          </span>
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
