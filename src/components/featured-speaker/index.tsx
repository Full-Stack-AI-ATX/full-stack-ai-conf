import React        from 'react';
import Image        from 'next/image';
import { Button }   from '@Components/ui/button';
import { Calendar } from 'lucide-react';
import styles       from './styles.module.css';


function FeaturedSpeaker() {
  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <div className={styles['grid']}>

          <figure className={styles['figure']}>
            <div className={styles['imageGlow']}></div>
            <Image
              src="/douglas-alvarado-headshot.png"
              alt="Douglas Alvarado"
              width={400}
              height={500}
              className={styles['speakerImage']}
            />
          </figure>

          <div className={styles['content']}>
            <h3 className={styles['name']}>Douglas Alvarado</h3>
            <p className={styles['role']}>Senior AI Systems Architect</p>
            <p className={styles['bio']}>
              Douglas is a seasoned AI systems architect with over 10 years of experience building scalable AI
              networks and autonomous agents. He specializes in LLM deployment, vector databases, and production AI
              systems, having worked with Fortune 500 companies to deliver cutting-edge AI solutions.
            </p>
            <div className={styles['ctaRow']}>
              <Button variant="outline" className={styles['ctaButton']}>
                View Profile
              </Button>
              <div className={styles['timeMeta']} aria-label="Featured session time">
                <Calendar size={16} />
                <span>2:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default FeaturedSpeaker;
