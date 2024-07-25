import { localFormatDate } from "~/helpers/local-format-date"
import { Link } from "~/components/Ui/Link"
import styles from "./ArticleHeader.module.css"
import { useTranslations } from "next-intl"

interface Props {
	title: string
	date: string
}

export const ArticleHeader: React.FC<Props> = ({ title, date }) => {
	const t = useTranslations("ArticleHeader")

	const formattedDate = localFormatDate(date)

	return (
		<div className={styles.wrapper}>
			<Link className={styles.goHomeLink} href="/blog">
				{t("goHome")}
			</Link>
			<h1 className={styles.title}>{title}</h1>
			<span className={styles.date}>{formattedDate}</span>
		</div>
	)
}
