import NextLink from "next/link";
import { Button } from "~/components/Ui/Button";
import { ContactDialog } from "~/components/ContactDialog";
import { CopyEmailSmallButton } from "~/components/CopyEmailSmallButton";
import styles from "./HeroSection.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import Clock from "~/components/Clock/Clock";
import ArgentinaFlag from "~/components/Svg/ArgentinaFlag"
import { useTranslations } from 'next-intl';

export const HeroSection = () => {
  const t = useTranslations('HeroSection');

  return (
    <section aria-labelledby="hero-title" className={styles.section}>
      <h1 id="hero-title" className={`text-gradient ${styles.title}`}>
        Max Comperatore
      </h1>
      <h2 className={styles.subtitle}>
        {t('position')}
      </h2>
      <div className={styles.intro}>
        <p className={styles.introSubtitle}>
          {t('subtitle')}
        </p>
        <p className={styles.introSubtitle}>
          {t('location')}
          <ArgentinaFlag className={styles.flag} />
           <br />
          {/*<TimeDifference />*/}
          <Clock className={styles.clock} />
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Button rounded="full" size="small" asChild className={styles.button}>
          <NextLink
            href="https://www.linkedin.com/in/maximo-comperatore-74399b278"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.availableCircle}></span>
            {t('availability')}
          </NextLink>
        </Button>
      </div>
      <div className={styles.actions}>
        <Button className={styles.actionBtn} variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="icon icon-tabler icons-tabler-outline icon-tabler-file-download">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M12 17v-6" />
            <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
          </svg>
          <NextLink
            href="/assets/files/maximocomperatoreresume.pdf"
            target="_blank"
            prefetch={false}
          >
            {t('download')}
          </NextLink>
        </Button>
        <ContactDialog
          trigger={
            <Button className={styles.actionBtn} type="button">
              {t('contact')}
            </Button>
          }
        />
        <CopyEmailSmallButton className={styles.copyEmailButton} />
        <ScrollToTopButton />
      </div>
    </section>
  );
};
