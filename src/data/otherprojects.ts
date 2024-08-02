import { CoverProjectOther } from "~/types"
import { Tag } from "./tags"

export const projectMetadata = {
	unrealengineprojectcleaner: {
		slug: "mercadolibrepricechart",
		name: "Unreal Engine Project Cleaner",
	},
	arrayutils: {
		slug: "arrayutils",
		name: "Array Utils",
	},
	hangman: {
		slug: "hangman",
		name: "Hangman",
	},
	calculadorarendimientosmercadopago: {
		slug: "calculadorarendimientosmercadopago",
		name: "Calculadora de Rendimientos MercadoPago",
	},
	pixelateddrift: {
		slug: "pixelateddrift",
		name: "Pixelated Drift",
	},
	portfolio: {
		slug: "portfolio",
		name: "Portfolio",
	},
	HillClimbRacing: {
		slug: "thedungeon",
		name: "Hill Climb Racing",
	},
	thegreatchocolatecaper: {
		slug: "thegreatchocolatecaper",
		name: "The Great Chocolate Caper",
	},
}

export const coverProjects: CoverProjectOther[] = [
	{
		...projectMetadata.HillClimbRacing,
		imageUrl: `/assets/images/projects/otherprojectscover/hcr.avif`,
		description:
			"Reimplementación de Hill Climb Racing en Unity, optimizando la experiencia original con mejoras en física, interfaz, y efectos sonoros para una jugabilidad más desafiante y envolvente.",
		tags: [Tag.unity, Tag.cSharp],
		link: "https://github.com/pyoneerC/Hill-Climb-Racing"
	},
	{
		...projectMetadata.arrayutils,
		imageUrl: `/assets/images/projects/otherprojectscover/arrayutils.avif`,
		description:
			"Colección de funciones adaptadas de la Biblioteca de Plantillas Estándar (STL) de C++, diseñadas para interoperar con el lenguaje de scripting de Unreal Engine.",
		tags: [Tag.unrealEngine, Tag.cPlusPlus, Tag.blueprints],
		link: "https://github.com/pyoneerC/Array-Utils"
	},
	{
		...projectMetadata.portfolio,
		imageUrl: `/assets/images/projects/otherprojectscover/portfolio.avif`,
		description:
			"Sitio web con diseño oscuro y backend robusto, optimizado para alto rendimiento, accesibilidad y SEO. Incorpora APIs avanzadas, gestión de datos y validación de formularios, con despliegue automático vía CI/CD.",
		tags: [Tag.typescript, Tag.nextjs, Tag.css, Tag.postgreSQL],
		link: "https://github.com/pyoneerC/maxcomperatore.com"
	},
	{
		...projectMetadata.thegreatchocolatecaper,
		imageUrl: `/assets/images/projects/otherprojectscover/thegreatchocolatecaper.avif`,
		description:
			"Simulador interactivo donde el jugador asume el papel de una bola de chocolate intentando escapar de una casa laberíntica llena de robots hambrientos.",
		tags: [Tag.unrealEngine, Tag.cPlusPlus, Tag.blueprints],
		link: "https://github.com/pyoneerC/The-Great-Chocolate-Caper"
	},
	{
		...projectMetadata.pixelateddrift,
		imageUrl: `/assets/images/projects/otherprojectscover/pixelateddrift.avif`,
		description:
			"Simulador de manejo ambientado en una ciudad gótica con gráficos al estilo de la PlayStation 2.",
		tags: [Tag.unrealEngine, Tag.cPlusPlus, Tag.blueprints],
		link: "https://pyoneerc1.itch.io/pixelateddrift"
	},
	{
		...projectMetadata.calculadorarendimientosmercadopago,
		imageUrl: `/assets/images/projects/otherprojectscover/calculadorarendimientosmercadopago.avif`,
		description:
			"Herramienta web diseñada para calcular la ganancia de inversiones a lo largo del tiempo, ofreciendo una interfaz intuitiva y respuestas inmediatas.",
		tags: [Tag.javascript, Tag.html, Tag.css],
		link: "https://pyoneerc.github.io/rendimientos-mercado-pago/"
	},
	{
		...projectMetadata.unrealengineprojectcleaner,
		imageUrl: `/assets/images/projects/otherprojectscover/unrealengineprojectcleaner.avif`,
		description: "Script de línea de comandos que optimiza el mantenimiento de proyectos de Unreal Engine eliminando carpetas temporales de forma efectiva, segura y rápida.",
		tags: [Tag.powershell, Tag.cli],
		link: "https://github.com/pyoneerC/Unreal-Engine-Project-Cleaner"
	},
	{
		...projectMetadata.hangman,
		imageUrl: `/assets/images/projects/otherprojectscover/hangman.avif`,
		description:
			"Implementación del juego clásico \"El Ahorcado\" en 333 líneas de código, disponible para jugar en línea.",
		tags: [Tag.cPlusPlus, Tag.cli],
		link: "https://github.com/pyoneerC/hangman"
	},
]