import { SVGProps } from "react";

export const Check = (props: SVGProps<SVGSVGElement>) => {
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
				fillRule='evenodd'
				clipRule='evenodd'
				d='M19.5172 6.45686C19.8172 6.7425 19.8288 7.21723 19.5432 7.5172L9.46084 18.1053L4.4413 12.5003C4.16497 12.1918 4.19109 11.7176 4.49966 11.4413C4.80822 11.165 5.28238 11.1911 5.55871 11.4997L9.49464 15.8947L18.4569 6.4828C18.7425 6.18283 19.2172 6.17122 19.5172 6.45686Z'
				fill='#383837'
			/>
		</svg>
	);
};
