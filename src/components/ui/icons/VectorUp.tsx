import { SVGProps } from "react";

export const VectorUp = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={24}
			height={24}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M12 21V3M12 3L20.5 11.5M12 3L3.5 11.5'
				stroke='black'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
