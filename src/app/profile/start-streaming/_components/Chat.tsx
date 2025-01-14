'use client';

import { io, Socket } from 'socket.io-client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import { ChevronLeftIcon, ChevronRightIcon, EllipsisVerticalIcon } from 'lucide-react';

import SubInput from './SubInput';
import Divider from '@/common/components/Divider';
import SponsorshipRanking from './SponsorshipRanking';

import { IChatProps, IMessage } from '../type';

export default function Chat({ isToggle, roomId, onClickToggle }: IChatProps) {
	const { data: session } = useSession();
	const [message, setMessage] = useState('');
	const [messageList, setMessageList] = useState<IMessage[]>([]);
	const [socket, setSocket] = useState<Socket | null>(null);

	const connectToChat = () => {
		const _socket = io('wss://api-nextream.store', {
			reconnection: true,
			reconnectionAttempts: 5,
			reconnectionDelay: 1000,
			auth: {
				token: session?.accessToken,
			},
			query: {
				roomId,
			},
			withCredentials: true,
		});
		setSocket(_socket);
	};

	const joinToChat = () => {
		console.log('채팅방에 입장했습니다.', roomId);
		socket?.emit('join', { roomId });
	};

	const disconnectToChat = () => {
		console.log('채팅 서버와 연결이 끊어졌습니다.');
		socket?.disconnect();
	};

	const onChangeChatMessageHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setMessage(value);
	};

	const sendMessage = (event: FormEvent) => {
		event.preventDefault();
		socket?.emit('chat', { roomId, message });
	};

	socket?.on('connect', () => {
		console.log('채팅 서버와 연결되었습니다.');
		joinToChat();
	});

	socket?.on('chat', ({ createdAt, message, color, nickname }) => {
		console.log('socket.io - chat:', message, color, nickname);
		setMessageList((prev) => [
			...prev,
			{
				createdAt,
				nickname,
				message,
				color,
			},
		]);
	});

	socket?.on('error', (error) => {
		console.log('채팅 서버 오류가 발생했습니다.', error);
	});

	socket?.on('connect_error', (error) => {
		console.log('채팅 서버 접속 오류가 발생했습니다.', error);
	});

	socket?.on('disconnect', disconnectToChat);

	useEffect(() => {
		if (!socket && session) {
			connectToChat();
		}

		return () => {};
	}, [session]);

	return (
		<>
			{isToggle ? (
				<div className="flexCol h-full w-1/3 justify-between gap-3 rounded-md bg-subBlack p-3">
					<div className="h-full w-full">
						<div className="flex justify-between pb-3">
							<ChevronRightIcon className="size-6" onClick={onClickToggle} />
							<p>채팅</p>
							<EllipsisVerticalIcon className="size-6" />
						</div>
						<Divider color="lightGray" />
						<div>
							<SponsorshipRanking />
						</div>
						<Divider color="lightGray" />
						<div className="flexCol gap-4 px-3 pt-3">
							{messageList.map((element, index) => (
								<div key={index} className="flex gap-2">
									<p style={{ color: `${element.color}` }}>{element.nickname}</p>
									<p className="text-mainWhite">{element.message}</p>
								</div>
							))}
						</div>
					</div>
					<SubInput
						onChange={onChangeChatMessageHandler}
						onClickSubmit={sendMessage}
						placeholder="채팅을 입력해주세요."
					/>
				</div>
			) : (
				<div className="flexCol w-[4%] items-center">
					<ChevronLeftIcon className="size-6" onClick={onClickToggle} />
				</div>
			)}
		</>
	);
}
