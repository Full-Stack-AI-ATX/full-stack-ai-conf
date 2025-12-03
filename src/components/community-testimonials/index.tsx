import React    from 'react';
import Image    from 'next/image';
import { Star } from 'lucide-react';
import styles   from './styles.module.css';


function CommunityTestimonials() {
  const testimonials = [
    { name: 'John Doe', role: 'CTO', company: 'TechCorp', avatar: '/placeholder.svg' },
    { name: 'Jane Smith', role: 'Lead Developer', company: 'DevStudio', avatar: '/placeholder.svg' },
    {
      name: 'Bob Wilson',
      role: 'Engineering Manager',
      company: 'CodeLab',
      avatar: '/placeholder.svg'
    }
  ];

  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <header className={styles['header']}>
          <h3 className={styles['heading']}>
            <span className={styles['gradientHeading']}>Community Testimonials</span>
          </h3>
        </header>
        <div className={styles['avatarsRow']}>
          {testimonials.map((person, index) => (
            <figure key={index} className={styles['avatarWrap']}>
              <div className={styles['avatarGlow']} aria-hidden="true"></div>
              <div className={styles['avatar']}>
                <Image
                  src={person.avatar || '/placeholder.svg'}
                  alt={person.name}
                  width={50}
                  height={50}
                  className={styles['avatarImg']}
                />
              </div>
            </figure>
          ))}
        </div>
        <div className={styles['testimonial']}>
          <p className={styles['quote']}>
            "Full-Stack AI Conference brings together Austin's most passionate developers in an environment that
            fosters real learning and lasting professional relationships. The community connections I made
            here have been invaluable to my AI development journey."
          </p>
          <div className={styles['stars']}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={styles['starIcon']} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default CommunityTestimonials;
