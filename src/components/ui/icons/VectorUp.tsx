import { SVGProps } from "react";

export const VectorUp = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={20}
			height={20}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M10 19V1M10 1L18.5 9.5M10 1L1.5 9.5'
				stroke='black'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
