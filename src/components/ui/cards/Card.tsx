import Link from "next/link";
import { CardInfo } from "./CardInfo";

interface CardProps {
	title: string;
	tag: string;
	readingTime: string;
	backgroundImage: string;
	isPrincipal: boolean;
	postLink: string;
}
export const Card = ({
	title,
	tag,
	readingTime,
	backgroundImage,
	isPrincipal,
	postLink,
}: CardProps) => {
	return (
		<Link href={`/${postLink}`}>
			<article
				className={`flex flex-1 items-end bg-cover bg-no-repeat p-6`}
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}
			>
				<CardInfo
					isPrincipal={isPrincipal}
					title={title}
					readingTime={readingTime}
					tag={tag}
				/>
			</article>
		</Link>
	);
};
