import React from 'react';
import styles from './AboutSection.module.css';
import { useTranslations } from 'next-intl';

export const AboutSection = () => {
  const t = useTranslations('AboutSection');
  return (
    <section className="section-wrapper">
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.aboutMeContainer}>
        <div className={styles.photoWrapper}>
          <img
            src="/assets/images/maximo_comperatore.webp"
            alt="Maximo Comperatore"
            className={styles.photo}
            loading="lazy"
            width={300}
            height={300}
          />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.paragraph}>
            {t('paragraphs.0')}
          </p>
          <p className={styles.paragraph}>
            {t('paragraphs.1')}
          </p>
          <p className={styles.paragraph}>
            {t('paragraphs.2')}
          </p>
          <p className={styles.paragraph}>
            {t('paragraphs.3')}
          </p>
        </div>
      </div>
    </section>
  );
};
