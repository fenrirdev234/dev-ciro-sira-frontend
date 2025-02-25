import { SVGProps } from "react";

export const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={24}
			height={25}
			viewBox='0 0 24 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M15 18.5L9 12.5L15 6.5'
				stroke='white'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
