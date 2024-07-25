import clsx from "clsx"
import { CopyEmailButton } from "~/components/CopyEmailButton"
import styles from "./ContactSection.module.css"
import { useTranslations } from "next-intl"

export const ContactSection = () => {
	const t = useTranslations("ContactSection")
	return (
		<section className={clsx("section-wrapper", styles.section)}>
			<h2 className={styles.title}>
				<span>{t("title.0")}</span>
				<span>{t("title.1")}</span>
			</h2>
			<CopyEmailButton />
		</section>
	)
}
