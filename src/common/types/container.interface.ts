import { IChildrenProps } from './children.interface';

export interface ICategoryContainerProps {
	title: string;
	image: string;
	watchingCount: number;
}

export interface IStreamerInfoContainerProps {
	title?: string;
	image?: string;
	name?: string;
	category?: string;
	isLive?: boolean;
}

export interface ILiveStatusContainerProps {
	watchingCount: number | undefined;
}
