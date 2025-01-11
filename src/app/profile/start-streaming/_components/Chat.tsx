'use client';

import { io, Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import { ChevronLeftIcon, ChevronRightIcon, EllipsisVerticalIcon } from 'lucide-react';

import SubInput from './SubInput';
import Divider from '@/common/components/Divider';
import SponsorshipRanking from './SponsorshipRanking';

import { IChatProps } from '../type';

export default function Chat({ isToggle, roomId, onClickToggle }: IChatProps) {
	const { data: session } = useSession();
	const [isConnect, setIsConnect] = useState(false);
	const [socket, setSocket] = useState<Socket | null>(null);

	const connectToChat = () => {
		const _socket = io('http://api-nextream.store', {
			reconnection: true,
			reconnectionAttempts: 5,
			reconnectionDelay: 1000,
			autoConnect: false,
			extraHeaders: {
				Authorization: `Bearer ${session?.accessToken ?? ''}`,
			},
		});
		_socket.connect();
		setSocket(_socket);
	};

	const joinToChat = () => {
		console.log('채팅방에 입장했습니다.', roomId);
		socket?.emit('join', { roomId: '6780fbe7365fe9a9022bb78c' });
	};

	const disconnectToChat = () => {
		console.log('채팅 서버와 연결이 끊어졌습니다.');
		socket?.disconnect();
	};

	// const socket = io('ws://api-nextream.store', {
	// 	extraHeaders: {
	// 		Authorization: `Bearer ${session?.accessToken ?? ''}`,
	// 	},
	// });

	const sendMessage = () => {
		console.log('메세지 보내요!');
		socket?.emit('chat', { roomId, message: '방가방가방가' });
	};

	useEffect(() => {
		if (!socket) {
			connectToChat();
		}

		console.log('socket 존재하니?', socket);

		socket?.emit('join', { roomId: '6780fbe7365fe9a9022bb78c' });

		socket?.on('connect', () => {
			console.log('채팅 서버와 연결되었습니다.');
			joinToChat();
		});

		socket?.on('chat', ({ message, payload, userCount }) => {
			console.log('socket.io - chat:', message, payload, userCount);
		});

		socket?.on('disconnect', () => {
			disconnectToChat();
		});

		return () => {
			console.log('Chat - Clean Up Function Called!');
			disconnectToChat();
		};
	}, [socket]);

	return (
		<>
			{isToggle ? (
				<div className="flexCol h-full w-1/3 justify-between gap-3 rounded-md bg-subBlack p-3">
					<div className="h-full w-full">
						<div className="flex justify-between">
							<ChevronRightIcon className="size-6" onClick={onClickToggle} />
							<p>채팅</p>
							<EllipsisVerticalIcon className="size-6" />
						</div>
						<Divider color="lightGray" />
						<div>
							<SponsorshipRanking />
						</div>
						<Divider color="lightGray" />
						<div className="flexCol gap-1 px-3 pt-3">
							{Array.from({ length: 17 }).map((_, index) => (
								<div key={index} className="flex gap-2">
									<p className="text-main">예슬콩</p>안녕하세요. 채팅을
									시작합니다~~~
								</div>
							))}
						</div>
					</div>
					<SubInput onClick={sendMessage} placeholder="채팅을 입력해주세요." />
				</div>
			) : (
				<div className="flexCol w-[4%] items-center">
					<ChevronLeftIcon className="size-6" onClick={onClickToggle} />
				</div>
			)}
		</>
	);
}
