import React                  from 'react';
import { Card, CardContent }  from '@Components/ui/card';
import { ChevronDown }        from 'lucide-react';
import styles                 from './styles.module.css';


function FAQ() {
  const questions = [
    'What topics will be covered at the Full Stack AI Conference?',
    'Are there networking opportunities for AI professionals and developers?',
    'Will session recordings and materials be available after the conference?',
    'How do I upgrade or transfer my conference pass?'
  ];

  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <header className={styles['header']}>
          <h3 className={styles['heading']}>
            <span className={styles['gradientHeading']}>Frequently Asked Questions</span>
          </h3>
        </header>
        <div className={styles['qaList']}>
          {questions.map((question, index) => (
            <Card key={index} className={styles['qaCard']}>
              <CardContent className={styles['qaContent']}>
                <div className={styles['qaHeader']}>
                  <h4 className={styles['qaTitle']}>{question}</h4>
                  <ChevronDown className={styles['qaIcon']} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


export default FAQ;
