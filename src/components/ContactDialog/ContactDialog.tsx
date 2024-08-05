import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "~/components/Ui/Dialog"
import { useTranslations } from "next-intl"
import ContactForm from "../ContactForm/ContactForm"


interface Props {
	trigger: React.ReactNode
}

export const ContactDialog: React.FC<Props> = ({ trigger }) => {
	const t = useTranslations("ContactDialog")

	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogTitle>{t("title")}</DialogTitle>
				<ContactForm />
			</DialogContent>
		</Dialog>
	)
}
