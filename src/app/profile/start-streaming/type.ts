export interface IRankingProps {
	isFirst: boolean;
	color: string;
	name: string;
	sponsorshipAmount: number;
}

export interface IChatProps {
	isToggle: boolean;
	onClickToggle: () => void;
}
