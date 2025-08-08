import React  from 'react';
import Image  from 'next/image';
import styles from './styles.module.css';


function FullstackAI() {
  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <div className={styles['grid']}>

          <header className={styles['intro']}>
            <h2 className={styles['heading']}>
              <span className={styles['gradientText']}>Full-Stack AI</span>
              <br />
              <span className={styles['subheading']}>Austin 2025</span>
            </h2>
            <p className={styles['description']}>What you'll learn at the conference:</p>
            <ul className={styles['featureList']}>
              <li className={styles['featureItem']}>
                <span className={[styles['dot'], styles['dotCyan']].join(' ')}></span>
                <span>AI chat integration (frontend to backend)</span>
              </li>
              <li className={styles['featureItem']}>
                <span className={[styles['dot'], styles['dotPurple']].join(' ')}></span>
                <span>MCP (Model Context Protocol) implementation</span>
              </li>
              <li className={styles['featureItem']}>
                <span className={[styles['dot'], styles['dotPink']].join(' ')}></span>
                <span>AI agents and autonomous workflows</span>
              </li>
              <li className={styles['featureItem']}>
                <span className={[styles['dot'], styles['dotCyan']].join(' ')}></span>
                <span>AI-enhanced development workflows</span>
              </li>
            </ul>
          </header>

          <figure className={styles['imageWrapper']}>
            <div className={styles['imageOverlay']}></div>
            <Image
              src="/ai-conference.png"
              alt="Conference highlights"
              width={400}
              height={400}
              className={styles['image']}
            />
          </figure>

        </div>
      </div>
    </section>
  );
}


export default FullstackAI;
