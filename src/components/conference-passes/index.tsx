import React                  from 'react';
import { Button }             from '@Components/ui/button';
import { Card, CardContent }  from '@Components/ui/card';
import styles                 from './styles.module.css';


function ConferencePasses() {
  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <header className={styles['header']}>
          <h3 className={styles['heading']}>
            <span className={styles['gradientHeading']}>Conference Passes</span>
          </h3>
        </header>
        <div className={styles['grid']}>
          <Card className={styles['cardCyan']}>
            <CardContent className={styles['cardContent']}>
              <h4 className={styles['titleCyan']}>Dev Pass</h4>
              <div className={styles['priceCyan']}>$299</div>
              <ul className={styles['featureList']}>
                <li>Full-day access</li>
                <li>All AI sessions</li>
                <li>Cyber-social events</li>
                <li>Digital materials</li>
              </ul>
              <Button className={styles['buttonCyan']}>Initialize Link</Button>
            </CardContent>
          </Card>
          <Card className={styles['cardPurple']}>
            <CardContent className={styles['cardContent']}>
              <h4 className={styles['titlePurple']}>Pro Pass</h4>
              <div className={styles['pricePurple']}>$399</div>
              <ul className={styles['featureList']}>
                <li>Full-day access</li>
                <li>All AI sessions</li>
                <li>Cyber-social events</li>
                <li>Digital materials</li>
                <li>Workshop access</li>
              </ul>
              <Button className={styles['buttonPurple']}>Upgrade Protocol</Button>
            </CardContent>
          </Card>
          <Card className={styles['cardPink']}>
            <CardContent className={styles['cardContent']}>
              <h4 className={styles['titlePink']}>Premium Pass</h4>
              <div className={styles['pricePink']}>$599</div>
              <ul className={styles['featureList']}>
                <li>Full-day access</li>
                <li>All AI sessions</li>
                <li>Cyber-social events</li>
                <li>Digital materials</li>
                <li>Workshop access</li>
                <li>VIP AI dinner</li>
              </ul>
              <Button className={styles['buttonPink']}>Enter Matrix</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


export default ConferencePasses;
