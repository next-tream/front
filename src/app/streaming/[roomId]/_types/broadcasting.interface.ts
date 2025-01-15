export interface IBroadcastingProps {
	roomName: string;
	roomTags: number[];
	isLive: boolean;
	participantsLength: number;
	nickname: string;
	streamerImage: string;
	createdAt: string;
	roomId: string;
	roomImage: string;
	roomContent: string;
}

export interface IStreamerCardProps {
	broadcasting: IBroadcastingProps;
}
