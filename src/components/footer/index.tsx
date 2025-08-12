import React  from 'react';
import Link   from 'next/link';
import Image  from 'next/image';
import styles from './styles.module.css';


function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['container']}>

        <div className={styles['brandRow']}>
          <Link href="/" className={styles['brand']}>
            <div className={styles['logoWrap']}>
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
        </div>

        <div className={styles['grid']}>
          <nav aria-label="AI Network" className={styles['col']}>
            <h5 className={styles['colTitleCyan']}>AI Network</h5>
            <ul className={styles['linkList']}>
              <li>
                <Link href="/about" className={styles['linkCyan']}>About Conference</Link>
              </li>
              <li>
                <Link href="/speakers" className={styles['linkCyan']}>Speakers</Link>
              </li>
              <li>
                <Link href="/sessions" className={styles['linkCyan']}>Sessions</Link>
              </li>
              <li>
                <Link href="/venue" className={styles['linkCyan']}>Venue</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Access Levels" className={styles['col']}>
            <h5 className={styles['colTitlePurple']}>Access Levels</h5>
            <ul className={styles['linkList']}>
              <li>
                <Link href="/pricing" className={styles['linkPurple']}>Conference Pricing</Link>
              </li>
              <li>
                <Link href="/group-passes" className={styles['linkPurple']}>Group Passes</Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className={styles['linkPurple']}>Cancellation Policy</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="System Support" className={styles['col']}>
            <h5 className={styles['colTitleCyan']}>System Support</h5>
            <ul className={styles['linkList']}>
              <li>
                <Link href="/contact" className={styles['linkCyan']}>Contact Us</Link>
              </li>
              <li>
                <Link href="/queries" className={styles['linkCyan']}>Query Database</Link>
              </li>
              <li>
                <Link href="/help" className={styles['linkCyan']}>Help Center</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Connect" className={styles['col']}>
            <h5 className={styles['colTitlePurple']}>Connect</h5>
            <ul className={styles['linkList']}>
              <li>
                <a href="#" className={styles['linkPurple']}>Twitter</a>
              </li>
              <li>
                <a href="#" className={styles['linkPurple']}>LinkedIn</a>
              </li>
              <li>
                <a href="#" className={styles['linkPurple']}>YouTube</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles['bottomBar']}>
          <p>&copy; 2025 Full-Stack AI Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
