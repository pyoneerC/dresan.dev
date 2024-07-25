"use client"

import { useRef, useState, useTransition } from "react"
import { sendEmail } from "~/actions/send-message"
import { useTimeout } from "~/hooks/use-timeout"
import { Button } from "~/components/Ui/Button"
import { Label } from "~/components/Ui/Label"
import { Input } from "~/components/Ui/Input"
import { Textarea } from "~/components/Ui/TextArea"
import { MessageCard } from "~/components/MessageCard"
import styles from "./ContactForm.module.css"
import { useTranslations } from "next-intl"

const RESET_MESSAGE_TIME = 6000

export const ContactForm = () => {
	const t = useTranslations("ContactForm")

	const formRef = useRef<HTMLFormElement>(null)
	const [isPending, startTransition] = useTransition()
	const [responseMessage, setResponseMessage] = useState<null | string>(null)
	const [hasError, setHasError] = useState(false)

	useTimeout(() => {
		setResponseMessage(null)
	}, RESET_MESSAGE_TIME)

	const formAction = async (formData: FormData) => {
		startTransition(async () => {
			const response = await sendEmail(formData)

			if (response.error) {
				setResponseMessage(response.error)
				setHasError(true)
				return
			}

			setResponseMessage(t("successMessage"))
			setHasError(false)
			formRef.current?.reset()
		})
	}

	return (
		<form ref={formRef} className={styles.form} action={formAction}>
			<Label>
				<span className={styles.labelWrapper}>{t("labels.name")}</span>
				<Input placeholder="Alfredo Linux" name="name" autoComplete="name" required />
			</Label>
			<Label>
				<span className={styles.labelWrapper}>{t("labels.email")}</span>
				<Input
					placeholder="alfredlinux@gmail.com"
					type="email"
					name="email"
					autoComplete="email"
					required
				/>
			</Label>
			<Label>
				<span className={styles.labelWrapper}>{t("labels.message")}</span>
				<Textarea placeholder={t("placeholder.message")} name="message" required />
			</Label>
			<Button disabled={isPending} size="medium">
				{t("send")}
			</Button>
			{responseMessage && (
				<MessageCard variant={hasError ? "error" : "success"}>{responseMessage}</MessageCard>
			)}
		</form>
	)
}
