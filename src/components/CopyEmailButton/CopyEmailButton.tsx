"use client"

import { useState } from "react"
import clsx from "clsx"
import { DRESAN_EMAIL } from "~/constants"
import { copyToClipboard } from "~/utils"
import { useTimeout } from "~/hooks/use-timeout"
import styles from "./CopyEmailButton.module.css"
import { useTranslations } from "next-intl"

const RESET_FEEDBACK_TIME = 5000

export const CopyEmailButton = () => {
	const t = useTranslations("CopyEmailButton")

	const [displayFeedback, setDisplayFeedback] = useState(false)

	const hideFeedback = () => setDisplayFeedback(false)

	useTimeout(hideFeedback, RESET_FEEDBACK_TIME)

	const handleOnClick = async () => {
		const isCopied = await copyToClipboard(DRESAN_EMAIL)
		setDisplayFeedback(isCopied)
	}

	return (
		<div className={styles.wrapper}>
			<div className={clsx(styles.toast, { [styles.enterToast]: displayFeedback })}>
				{t("toast")}
			</div>
			<button className={styles.button} type="button" onClick={handleOnClick}>
				{DRESAN_EMAIL}
			</button>
			<div className={styles.hintMessage}>{t("hint")}</div>
		</div>
	)
}
