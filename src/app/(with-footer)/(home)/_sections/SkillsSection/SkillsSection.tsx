import { skills } from "~/data/skills";
import { SkillCard } from "~/components/SkillCard";
import styles from "./SkillsSection.module.css";
import { useTranslations } from "next-intl";

export const SkillsSection = () => {
	const t = useTranslations('SkillsSection');
	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>{t('title')}</h2>
			<div className={styles.skillWrapper}>
				{skills.map((skill) => (
					<SkillCard key={skill.name} {...skill} />
				))}
			</div>
		</section>
	);
}
