import { getPosts } from "~/helpers/get-posts"
import { sortPostsByDate } from "~/helpers/sort-posts"
import { PostCard } from "~/components/PostCard"
import styles from "./page.module.css"
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton"
import Link from "next/link"
import { getTranslations } from "next-intl/server"

export const metadata = {
	title: "Max Comperatore - Blog",
	description: "Tutoriales sobre desarrollo de software y videojuegos.",
}

export default async function Blog() {
	const posts = await getPosts()
	const sortedPosts = sortPostsByDate({ posts })

	const t = await getTranslations("Blog")

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>{t("title")}</h1>
			<Link className={styles.goHomeLink} href="/">
				{t("goHome")}
			</Link>
			<div className={styles.postsWrapper}>
				{sortedPosts.map((post) => (
					<PostCard key={post.slug} {...post} />
				))}
			</div>
			<ScrollToTopButton />
		</main>
	)
}
