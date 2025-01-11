export interface IMessage {
	createdAt?: Date;
	nickname?: string;
	message: string;
	color?: string;
}

export interface IRankingProps {
	isFirst: boolean;
	color: string;
	name: string;
	sponsorshipAmount: number;
}

export interface IChatProps {
	isToggle: boolean;
	roomId: string;
	onClickToggle: () => void;
}
