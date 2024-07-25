import NextLink from "next/link";
import { Button } from "~/components/Ui/Button";
import { ArrowDown } from "~/components/Svg/ArrowDown";
import { ContactDialog } from "~/components/ContactDialog";
import { CopyEmailSmallButton } from "~/components/CopyEmailSmallButton";
import styles from "./HeroSection.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("HeroSection");
  return (
    <section aria-labelledby="hero-title" className={styles.section}>
      <h1 id="hero-title" className={`text-gradient ${styles.title}`}>
        {t("title")}
      </h1>
      <div className={styles.intro}>
        <p className={styles.introSubtitle}>
          {t("subtitle")}
        </p>
        <p className={styles.introSubtitle}>
          {t("location")}
          <img
            className={styles.flag}
            src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
            alt="Argentina Flag"
            width="30"
            height="20"
            loading="lazy"
          />
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
            {t("availability")}
          </NextLink>
        </Button>
      </div>
      <div className={styles.actions}>
        <ContactDialog
          trigger={
            <Button className={styles.actionBtn} type="button">
              {t("contact")}
            </Button>
          }
        />
        <Button className={styles.actionBtn} variant="outlined" asChild>
          <NextLink
            href="/assets/files/maximocomperatoreresume.pdf"
            target="_blank"
            prefetch={false}
          >
            {t("download")} <ArrowDown />
          </NextLink>
        </Button>
        <CopyEmailSmallButton className={styles.copyEmailButton} />
        <ScrollToTopButton />
      </div>
    </section>
  );
};
