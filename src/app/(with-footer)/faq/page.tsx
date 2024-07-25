import React from 'react';
import styles from './page.module.css';
import ScrollToTopButton from '~/components/ScrollToTopButton/ScrollToTopButton';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Max Comperatore - FAQ',
  description: 'Frequently Asked Questions about Max Comperatore\'s career, interests, and experiences in programming and game development.',
};

const FAQ = () => {
  const t = useTranslations('FAQ');

  return (
    <div className={styles.container}>
      <ScrollToTopButton />

      <h1 className={styles.title}>{t('title')}</h1>

      <Link className={styles.goHomeLink} href="/">
        {t('goHomeLink')}
      </Link>

      <Link className={styles.goHomeLink} href="/">
        {t('goBlogLink')}
      </Link>

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section1.title')}</h2>
        <p className={styles.paragraph}>
          {t('section1.paragraph1')}
        </p>
        <p className={styles.paragraph}>
          {t('section1.paragraph2')}
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section2.title')}</h2>
        <p className={styles.paragraph}>
          {t('section2.paragraph')}
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section3.title')}</h2>
        <p className={styles.paragraph}>
          {t('section3.paragraph')}
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section4.title')}</h2>
        <p className={styles.paragraph}>
          {t('section4.paragraph')}
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section5.title')}</h2>
        <p className={styles.paragraph}>
          {t('section5.paragraph')}
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section6.title')}</h2>
        <ul>
          <li>
            <h3>{t('section6.list.0.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section6.list.0.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section6.list.0.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section6.list.0.result')}
            </p>
            <p>
              <strong>{t('reflection')}</strong> {t('section6.list.0.reflection')}
            </p>
          </li>
          <li>
            <h3>{t('section6.list.1.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section6.list.1.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section6.list.1.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section6.list.1.result')}
            </p>
            <p>
              <strong>{t('reflection')}</strong> {t('section6.list.1.reflection')}
            </p>
          </li>
          <li>
            <h3>{t('section6.list.2.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section6.list.2.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section6.list.2.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section6.list.2.result')}
            </p>
            <p>
              <strong>{t('reflection')}</strong> {t('section6.list.2.reflection')}
            </p>
          </li>
        </ul>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section7.title')}</h2>
        <ul>
          <li><a href="https://gist.github.com/pyoneerC/423ec3e9371fae255091d703e5dcc86c" target="_blank"
                 rel="noopener noreferrer">{t('section7.list.0')}</a></li>
          <li><a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">{t('section7.list.1')}</a></li>
          <li>{t('section7.list.2')}</li>
          <li>{t('section7.list.3')}</li>
          <li>{t('section7.list.4')}</li>
          <li><a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer">{t('section7.list.5')}</a></li>
          <li><a href="https://www.learncpp.com" target="_blank" rel="noopener noreferrer">{t('section7.list.6')}</a></li>
          <li><a href="https://www.bigocheatsheet.com" target="_blank" rel="noopener noreferrer">{t('section7.list.7')}</a>
          </li>
          <li><a href="https://learn.microsoft.com" target="_blank" rel="noopener noreferrer">{t('section7.list.8')}</a></li>
          <li>{t('section7.list.9')}</li>
          <li>{t('section7.list.10')}</li>
          <li>{t('section7.list.11')}</li>
          <li>{t('section7.list.12')}</li>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">{t('section7.list.13')}</a></li>
          <li><a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer">{t('section7.list.14')}</a></li>
          <li><a href="https://trello.com" target="_blank" rel="noopener noreferrer">{t('section7.list.15')}</a></li>
        </ul>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section8.title')}</h2>
        <p className={styles.paragraph}>
          {t('section8.paragraph')}
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section9.title')}</h2>
        <p className={styles.paragraph}>
          {t('section9.paragraph')}
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section10.title')}</h2>
        <p className={styles.paragraph}>
          {t('section10.paragraph')}
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2>{t('section11.title')}</h2>
        <ul>
          <li>
            <h3>{t('section11.list.0.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section11.list.0.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section11.list.0.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section11.list.0.result')}
            </p>
          </li>
          <li>
            <h3>{t('section11.list.1.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section11.list.1.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section11.list.1.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section11.list.1.result')}
            </p>
          </li>
          <li>
            <h3>{t('section11.list.2.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section11.list.2.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section11.list.2.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section11.list.2.result')}
            </p>
          </li>
        </ul>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section12.title')}</h2>
        <p>
          <strong>{t('situation')}</strong> {t('section12.paragraph')}
        </p>
        <p>
          <strong>{t('result')}</strong> {t('section12.result')}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section13.title')}</h2>
        <p className={styles.paragraph}>
          <strong>Situación:</strong> {t('section13.paragraph')}
        </p>
        <p className={styles.paragraph}>
          <strong>Acción:</strong> {t('section13.action')}
        </p>
        <p className={styles.paragraph}>
          <strong>Resultado:</strong> {t('section13.result')}
        </p>
        <p className={styles.paragraph}>
          <strong>Reflexión:</strong> {t('section13.reflection')}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section14.title')}</h2>
        <p className={styles.paragraph}> {t('section14.paragraph')} </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section15.title')}</h2>
        <ul>
          <li>{t('section15.list.0')}</li>
          <li>{t('section15.list.1')}</li>
          <li>{t('section15.list.2')}</li>
          <li>{t('section15.list.3')}</li>
          <li>{t('section15.list.4')}</li>
          <li>{t('section15.list.5')}</li>
          <li>{t('section15.list.6')}</li>
          <li>{t('section15.list.7')}</li>
        </ul>
      </section>
    </div>
  );
  };

export default FAQ;