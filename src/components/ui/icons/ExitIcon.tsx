import { SVGProps } from "react";

export const ExitIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={10}
			height={11}
			viewBox='0 0 10 11'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<line x1={9.35355} y1={1.05375} x2={0.353553} y2={10.0537} stroke='black' />
			<line x1={0.353553} y1={0.946251} x2={9.35355} y2={9.94625} stroke='black' />
		</svg>
	);
};
