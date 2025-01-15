import { FormEvent, InputHTMLAttributes } from 'react';

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

export interface ISubInputProps extends InputHTMLAttributes<HTMLInputElement> {
	onClickSubmit?: (event: FormEvent) => void;
}

interface ISocketErrorMessage {
	[key: number]: string;
}

export const SocketErrorMessages: ISocketErrorMessage = {
	0: 'Access Token이 존재하지 않습니다.',
	1: 'Access Token이 이상합니다.',
	2: 'roomId가 ObjectId 형식이 아닙니다.',
	3: 'socket에 user 데이터가 존재하지 않습니다.',
	4: 'room이 정상적으로 생성되지 않았습니다.',
	5: '해당 유저가 이미 방에 존재합니다.',
	6: '해당 유저가 방에 정상적으로 들어가지 못했습니다. (DB 에러)',
	7: '방 나갈 때 해당 유저가 현재 방에 존재하지 않습니다.',
	8: '채팅이 정상적으로 생성되지 않았습니다.(객체)',
	9: '채팅이 정상적으로 저장되지 않았습니다.(DB 에러)',
};
