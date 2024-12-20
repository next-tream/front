export interface IGuideContainerProps {
	title: string;
	items: string[];
}

export interface INavigationContainerProps {
	isUsageView: boolean;
	onClickMenuHandler: () => void;
}
