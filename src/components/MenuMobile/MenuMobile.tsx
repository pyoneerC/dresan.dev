"use client"

import { useState } from "react"
import clsx from "clsx"
import { APP_ROUTES } from "~/constants"
import { toggleBodyOverflow } from "~/utils"
import { useOnPathnameChange } from "~/hooks/use-on-pathname-change"
import { Link } from "~/components/Ui/Link"
import { Button } from "~/components/Ui/Button"
import { LanguageSwitcher } from "~/components/LanguageSwitcher"
import { ContactDialog } from "~/components/ContactDialog"
import styles from "./MenuMobile.module.css"
import { useTranslations } from "next-intl"

export const MenuMobile = () => {
	const t = useTranslations("MenuMobile")

	const [open, setOpen] = useState(false)

	useOnPathnameChange(() => {
		setOpen(false)
		toggleBodyOverflow(false)
	})

	const handleOnClick = () => {
		setOpen(!open)
		toggleBodyOverflow(!open)
	}

	return (
		<>
			<button
				className={clsx(styles.button, { [styles.open]: open })}
				aria-label={open ? t("close") : t("open")}
				type="button"
				onClick={handleOnClick}
			>
				<span className={styles.buttonLine}></span>
				<span className={styles.buttonLine}></span>
			</button>
			<div className={clsx(styles.menu, { [styles.open]: open })}>
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						{APP_ROUTES.map(({ href, label }) => (
							<li key={href}>
								<Link className={styles.navLink} href={href}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.optionsWrapper}>
					<ContactDialog
						trigger={
							<Button className={styles.contactButton} size="medium" type="button">
								{t("contact")}
							</Button>
						}
					/>
					<div className={styles.themeWrapper}>
						<span>{t("language")} </span> <LanguageSwitcher />
					</div>
				</div>
			</div>
		</>
	)
}
