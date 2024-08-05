export interface CoverProject {
	slug: string
	name: string
	imageUrl: string
	description: string
}

export interface Post {
	slug: string
	title: string
	description: string
	emoji: string
	publishedOn: string
}

export interface CoverProjectOther extends CoverProject {
	tags?: string[]
	link?: string
}
