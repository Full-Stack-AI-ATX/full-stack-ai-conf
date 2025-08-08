import React                  from 'react';
import { Card, CardContent }  from '@Components/ui/card';
import styles                 from './styles.module.css';


function ConferenceUpdates() {
  const newsItems = [
    { title: 'AI Architect Lineup Confirmed', date: 'March 15, 2025' },
    { title: 'Early Access Available', date: 'March 10, 2025' },
    { title: 'Cyber Venue Secured', date: 'March 5, 2025' }
  ];

  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <header className={styles['header']}>
          <h3 className={styles['heading']}>
            <span className={styles['gradientHeading']}>Conference Updates</span>
          </h3>
        </header>
        <div className={styles['grid']}>
          {newsItems.map((news, index) => (
            <Card key={index} className={styles['newsCard']}>
              <CardContent className={styles['newsContent']}>
                <h4 className={styles['newsTitle']}>{news.title}</h4>
                <p className={styles['newsDate']}>{news.date}</p>
                <p className={styles['newsText']}>Stay synchronized with the latest conference updates and announcements.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


export default ConferenceUpdates;
