import { SVGProps } from "react";

export const Vector = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={10}
		viewBox='0 0 20 10'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M15.25 1.25L19 5M19 5L15.25 8.75M19 5L1 5'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
