export interface IVideo {
	title: string;
	name: string;
	category: number[];
	isLive: boolean;
	src: string;
	watchingCount: number;
	streamerImg: string;
}

export interface ICategory {
	title: string;
	image: string;
	watchingCount: number;
}

export interface IFollowerCard {
	name: string;
	description: string;
	tags: number[];
	src: string;
}
