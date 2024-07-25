import { coverProjects } from "~/data/projects"
import { ProjectCard } from "~/components/ProjectCard"
import styles from "./ProjectsSection.module.css"
import { useTranslations } from "next-intl"

export const ProjectsSection = () => {
	const t = useTranslations('ProjectsSection')
	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>{t('title')}</h2>
			<div className={styles.projectsWrapper}>
				{coverProjects.map((project) => (
					<ProjectCard key={project.name} {...project} />
				))}
			</div>
		</section>
	)
}
