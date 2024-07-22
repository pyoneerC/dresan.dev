import { SVGProps } from "react"

export const AWSLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={55}
		height={55}
		viewBox="0 0 25 25"
		fill="none"
		{...props}
	>
		<g clipPath="url(#a)">
			<path
				fill="currentColor"
				d="m12.248 6.685c-.656 2.694-.614 2.55-1.209 5.014-.013.227-.201.406-.43.406-.025 0-.05-.002-.074-.006h.003-.675c-.02.004-.044.006-.067.006-.203 0-.37-.151-.396-.346v-.002c-.577-1.846-1.35-4.41-1.87-6.125-.192-.633-.066-.618.436-.605.174.005.342 0 .515 0 .012-.001.026-.002.041-.002.196 0 .358.145.385.333v.002c.169.605.281 1.069 1.246 4.88.018.075.042.146.066.215h.051c.023-.094.051-.182.075-.277q.548-2.313 1.092-4.63c.113-.48.314-.525.8-.525h.356c.32.005.422.07.502.389.281 1.097 1.102 4.77 1.251 5.174.24-.858-.084.37 1.336-5.108.098-.379.192-.454.577-.454h.591c.253.005.328.084.267.333-.113.446-.136.464-1.935 6.228-.146.464-.197.506-.684.506h-.497c-.342 0-.431-.061-.515-.394-.202-.759-1.092-4.485-1.238-5.01zm-6.364 5.211c.068.139.208.233.37.233.114 0 .216-.046.291-.121l.295-.197c.32-.211.342-.295.169-.633-.186-.354-.296-.773-.296-1.218 0-.015 0-.03 0-.045v.002c0-.146.028-2.61-.042-3.13-.062-.87-.665-1.584-1.471-1.811l-.014-.003c-.353-.098-.758-.154-1.177-.154-.126 0-.252.005-.375.015l.016-.001c-.736.029-1.42.224-2.025.547l.025-.012c-.091.049-.159.13-.191.227l-.001.003c-.026.118-.041.254-.041.393 0 .061.003.122.008.182l-.001-.008c.028.277.122.328.384.24.24-.08.469-.182.708-.253.345-.128.743-.202 1.159-.202.323 0 .635.045.931.128l-.024-.006c.317.095.564.334.668.639l.002.007c.077.258.122.554.122.861 0 .094-.004.188-.012.28l.001-.012c0 .258-.005.258-.258.211-.43-.107-.923-.169-1.431-.169-.187 0-.373.008-.556.025l.024-.002c-.726.053-1.36.406-1.787.933l-.004.005c-.26.36-.416.811-.416 1.298 0 .197.025.387.073.569l-.003-.016c.104.682.588 1.228 1.225 1.422l.012.003c.28.1.603.158.94.158.667 0 1.282-.227 1.77-.608l-.006.005c.178-.131.338-.29.52-.446.146.234.272.454.417.656zm-.72-2.887h.005c.111 0 .201.09.201.201 0 .014-.001.027-.004.041v-.001c-.01.178.005.356-.014.534-.05.523-.377.959-.83 1.164l-.009.004c-.294.154-.641.245-1.01.245-.075 0-.149-.004-.222-.011l.009.001c-.529-.031-.946-.467-.946-1.001 0-.082.01-.162.029-.239l-.001.007c.026-.548.46-.987 1.004-1.021h.003c.21-.034.452-.053.698-.053.388 0 .766.048 1.126.138l-.032-.007zm16.346 3.051c.825-.277 1.408-1.043 1.408-1.945 0-.141-.014-.279-.041-.412l.002.013c-.107-.653-.564-1.177-1.169-1.379l-.012-.004c-.912-.286-1.659-.575-2.383-.905l.129.053c-.209-.105-.351-.315-.356-.559v-.001c-.006-.037-.009-.079-.009-.122 0-.419.318-.763.726-.805h.003c.211-.05.453-.078.702-.078.217 0 .43.022.635.063l-.02-.003c.342.066.67.197 1.003.295.131.042.277.098.366-.075.046-.097.073-.211.073-.33 0-.298-.166-.557-.411-.689l-.004-.002c-.494-.236-1.074-.373-1.686-.373-.546 0-1.066.11-1.54.308l.026-.01c-.725.288-1.228.984-1.228 1.797 0 .779.462 1.451 1.127 1.755l.012.005c.361.174.754.277 1.134.417s.759.272 1.13.426c.256.142.427.411.427.72 0 .286-.146.537-.368.684l-.003.002c-1.298.72-3.04-.113-3.243-.178-.154-.051-.248.01-.295.174-.038.089-.06.193-.06.302 0 .369.255.679.599.761l.005.001c.531.213 1.146.336 1.79.336.546 0 1.072-.089 1.563-.253l-.035.01zm-7.634 7.625c2.498-.268 4.766-1.052 6.763-2.244l-.076.042c.375-.22.726-.48 1.082-.736.342-.24.15-.862-.53-.572-2.344 1.029-5.066 1.687-7.925 1.821l-.051.002c-.3.015-.651.023-1.004.023-1.152 0-2.284-.088-3.389-.258l.123.016c-3.117-.449-5.924-1.458-8.429-2.927l.109.059c-.088-.059-.189-.107-.297-.139l-.008-.002c-.23-.051-.361.22-.113.454 3.069 2.838 7.189 4.578 11.716 4.578h.014-.001c.675-.038 1.35-.042 2.015-.117zm8.187-4.32c.694.038.909.277.736.946-.178.694-.436 1.369-.651 2.053-.042.136-.197.295-.038.413.174.122.305-.047.422-.154.455-.433.813-.962 1.044-1.555l.01-.029c.258-.564.408-1.224.408-1.919 0-.016 0-.031 0-.047v.002c-.01-.29-.084-.413-.366-.492-.224-.069-.487-.122-.757-.148l-.016-.001c-.183-.023-.394-.036-.609-.036-.836 0-1.626.197-2.327.546l.03-.014c-.155.084-.289.176-.412.28l.004-.003c-.051.042-.15.248.113.286.024.002.053.003.081.003.069 0 .137-.006.202-.018l-.007.001c.526-.075 1.134-.118 1.751-.118.134 0 .267.002.4.006h-.019z"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="currentColor" d="M0 0h50v50H0z" />
			</clipPath>
		</defs>
	</svg>
)