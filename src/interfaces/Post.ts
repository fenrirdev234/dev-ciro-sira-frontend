export interface IPost {
	title: string;
	author: {
		name: string;
		photo: {
			url: string;
			alt: string;
		};
	};
	readingTime: string;
	createdAt: string;
	category: string[];
	postId: string;
	postImage: {
		url: string;
		alt: string;
	};
}
