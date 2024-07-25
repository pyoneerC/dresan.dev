import Link from "next/link"
import styles from "./layout.module.css"
import { useTranslations } from "next-intl"

export default function PostsLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const t = useTranslations("PostsLayout")
	return (
		<main>
			<article className={styles.article}>
				{children}
				<div className={styles.greetings}>{t("greetings")}</div>
				<Link className={styles.goHomeLink} href="/blog">
					{t("goHome")}
				</Link>
			</article>
		</main>
	)
}