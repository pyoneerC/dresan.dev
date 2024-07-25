import Link from "next/link"
import { Button } from "~/components/Ui/Button"
import { Footer404 } from "~/components/Footer404"
import styles from "./not-found.module.css"
import { useTranslations } from "next-intl"

export const metadata = {
	title: "Maximo Comperatore - 404",
}

export default function NotFound() {
	const t = useTranslations("404")
	return (
		<>
			<main className={styles.wrapper}>
				<h1 className={styles.title}>{t("title")}</h1>
				<p className={styles.description}>{t("description")}</p>
				<Button asChild>
					<Link href="/">{t("goHome")}</Link>
				</Button>
			</main>
			<Footer404 />
		</>
	)
}
