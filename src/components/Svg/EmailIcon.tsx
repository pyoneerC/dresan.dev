import { SVGProps } from "react";

export const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={16}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" />
		<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
		<path d="m3 7 9 6 9-6" />
	</svg>
);

export default EmailIcon;
