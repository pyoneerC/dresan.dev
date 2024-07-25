import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "next-themes"
import { HOST_URL } from "~/constants"
import { SvgMasks } from "~/components/Svg/SvgMasks"
import { Header } from "~/components/Header"

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

import "~/styles/reset.css"
import "~/styles/globals.css"
import "~/styles/utils.css"

export const metadata: Metadata = {
	metadataBase: new URL(HOST_URL),
	title: "Max Comperatore - Backend & Game Developer",
	description:
		"Descubre los proyectos de Max Comperatore.",
	authors: [{ name: "Maximo Comperatore" }],
	creator: "Maximo Comperatore",
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const messages = await getMessages();

	return (
		<html lang="es" suppressHydrationWarning>
			<body className={`${GeistSans.className} ${GeistSans.variable}`}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider>
						<SvgMasks />
						<div className="__next">
							<Header />
							{children}
						</div>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
