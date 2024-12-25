import { IChildrenProps } from './children.interface';

export interface ICategoryContainerProps {
	title: string;
	image: string;
	watchingCount: number;
}

export interface IStreamerInfoContainerProps {
	title?: string;
	name: string;
	category: string;
}

export interface ILiveStatusContainerProps {
	watchingCount: number;
}

export interface IMenuContainerProps extends IChildrenProps {
	menu?: string;
}
