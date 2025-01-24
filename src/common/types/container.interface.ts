export interface ICategoryContainerProps {
	title: string;
	image: string;
	watchingCount: number;
}

export interface IStreamerInfoContainerProps {
	title?: string;
	image?: string;
	name?: string;
	category?: number[];
	isLive?: boolean;
}

export interface ILiveStatusContainerProps {
	watchingCount: number | undefined;
}
