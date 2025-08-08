import React                from 'react';
import { Badge }            from '@Components/ui/badge';
import { Button }           from '@Components/ui/button';
import { Code, Brain, Zap } from 'lucide-react';
import styles               from './styles.module.css';


function Hero() {
  const features = [
    { icon: '🤖', title: 'AI Integration Deep Dives', desc: 'Learn to build AI chats, implement agents, and integrate MCP into your full-stack applications.' },
    { icon: '⚡', title: 'AI-Powered Workflows', desc: 'Discover how to use AI for coding, designing, project management, and streamlining your development process.' },
    { icon: '🔮', title: 'Hands-On Workshops', desc: 'Build real AI-powered applications with guided labs covering frontend, backend, databases, and agents.' },
    { icon: '🌐', title: 'Community & Networking', desc: "Connect with Austin's AI developers and build relationships that extend beyond the conference." }
  ];

  return (
    <section className={styles['heroSection']}>
      <div className={styles['container']}>
        <header className={styles['header']}>
          <h1 className={styles['heading']}>
            <span className={styles['gradientTextPrimary']}>FULL-STACK</span>
            <br />
            <span className={styles['gradientTextSecondary']}>AI</span>
            <span aria-hidden="true" className={styles['headingGlow']}></span>
          </h1>
        </header>

        <div className={styles['divider']}>
          <span className={styles['dividerLine']} />
          <Code className={styles['dividerIcon']} />
          <span className={styles['dividerLine']} />
        </div>

        <h2 className={styles['subheading']}>
          Austin's community-driven conference for full-stack AI builders
        </h2>

        <p className={styles['description']}>
          Connect with local developers, learn practical AI integration techniques,
          <br />
          and build lasting relationships in Austin's thriving tech community.
        </p>

        <div className={styles['badgeWrapper']}>
          <Badge variant="outline" className={styles['badge']}>Austin · November 7, 2025</Badge>
        </div>

        <ul className={styles['features']}>
          {features.map((feature, index) => (
            <li key={index} className={styles['featureItem']}>
              <span aria-hidden="true" className={styles['featureGlow']} />
              <article className={styles['featureCard']}>
                <div className={styles['featureIcon']}>{feature.icon}</div>
                <div className={styles['featureContent']}>
                  <h3 className={styles['featureTitle']}>{feature.title}</h3>
                  <p className={styles['featureDesc']}>{feature.desc}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <section className={styles['cta']} aria-label="Call to action">
          <Button size="lg" className={styles['primaryButton']}>
            <Zap className={styles['buttonIcon']} />
            Register Now
          </Button>
          <Button size="lg" variant="outline" className={styles['secondaryButton']}>
            <Brain className={styles['buttonIcon']} />
            View Schedule
          </Button>
        </section>
      </div>
    </section>
  );
}


export default Hero;
