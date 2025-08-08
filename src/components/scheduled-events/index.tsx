import React                  from 'react';
import Image                  from 'next/image';
import { Card, CardContent }  from '@Components/ui/card';
import { Calendar, Users }    from 'lucide-react';
import styles                 from './styles.module.css';


function ScheduledEvents() {
  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <header className={styles['header']}>
          <h2 className={styles['title']}>
            <span className={styles['gradientText']}>Scheduled Data Streams</span>
          </h2>
        </header>
        <div className={styles['grid']}>
          <Card className={`${styles['card']} ${styles['cardCyan']}`}>
            <CardContent className={styles['cardContent']}>
              <figure className={styles['imageWrapper']}>
                <Image
                  src="/ai-workshop-coding.png"
                  alt="Workshop session"
                  width={400}
                  height={200}
                  className={styles['image']}
                />
                <div className={styles['imageOverlay']}></div>
              </figure>
              <div className={styles['cardBody']}>
                <h3 className={`${styles['cardTitle']} ${styles['cardTitleCyan']}`}>AI Agent Architecture</h3>
                <p className={styles['cardSubtitle']}>Building autonomous AI systems</p>
                <div className={styles['metaRow']}>
                  <div className={styles['metaItem']}>
                    <Calendar size={16} />
                    <span>Nov 15, 2025</span>
                  </div>
                  <div className={styles['metaItem']}>
                    <Users size={16} />
                    <span>50 attendees</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className={`${styles['card']} ${styles['cardPurple']}`}>
            <CardContent className={styles['cardContent']}>
              <figure className={styles['imageWrapper']}>
                <Image
                  src="/ai-conference-networking.png"
                  alt="Networking session"
                  width={400}
                  height={200}
                  className={styles['image']}
                />
                <div className={styles['imageOverlay']}></div>
              </figure>
              <div className={styles['cardBody']}>
                <h3 className={`${styles['cardTitle']} ${styles['cardTitlePurple']}`}>LLM Production Patterns</h3>
                <p className={styles['cardSubtitle']}>Scaling AI applications</p>
                <div className={styles['metaRow']}>
                  <div className={styles['metaItem']}>
                    <Calendar size={16} />
                    <span>Nov 16, 2025</span>
                  </div>
                  <div className={styles['metaItem']}>
                    <Users size={16} />
                    <span>75 attendees</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


export default ScheduledEvents;
