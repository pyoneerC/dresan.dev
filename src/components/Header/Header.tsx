import NextLink from "next/link"
import { APP_ROUTES } from "~/constants"
import { HomeLogo } from "~/components/Svg/HomeLogo"
import { LanguageSwitcher } from "~/components/LanguageSwitcher"
import { Button } from "~/components/Ui/Button"
import { Link } from "~/components/Ui/Link"
import { MenuMobile } from "~/components/MenuMobile"
import { ContactDialog } from "~/components/ContactDialog"
import styles from "./Header.module.css"
import { useTranslations } from "next-intl"

export const Header = () => {
	const t = useTranslations("Header")
	return (
		<header className={styles.header}>
			<div className={styles.contentWrapper}>
				<NextLink href="/" aria-label="Ir a la página de inicio">
					<HomeLogo className={styles.homeLogo} />
				</NextLink>
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						{APP_ROUTES.map(({ href, label }) => (
							<li key={href}>
								<Link href={href}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.optionsWrapper}>
					<ContactDialog
						trigger={
							<Button size="small" type="button">
								{t("contact")}
							</Button>
						}
					/>
					< LanguageSwitcher />
				</div>
				<MenuMobile />
			</div>
		</header>
	)
}
