'use client';

import { ChevronLeftIcon, ChevronRightIcon, EllipsisVerticalIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

import ChatMessageList from './ChatMessageList';
import Divider from '@/common/components/Divider';
import { IChatProps } from '../type';
import SponsorshipRanking from './SponsorshipRanking';
import SubInput from './SubInput';
import { toast } from '@/common/hooks/useToast';
import useChat from '../hooks/useChatHook';
import useRefreshToken from '@/common/utils/refreshToken';
import { useRouter } from 'next/navigation';

export default function Chat({ isToggle, roomId, onClickToggle }: IChatProps) {
	const {
		session,
		socket,
		chatMessageList,
		chatMessage,
		connectToChat,
		joinToChat,
		sendMessage,
		receiveMessage,
		disconnectToChat,
		onChangeChatMessageHandler,
		getErrorMessage,
	} = useChat({ roomId });
	const { refreshToken } = useRefreshToken();
	const router = useRouter();
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [chatMessageList]);

	useEffect(() => {
		if (!roomId) return;

		if (!socket && session) {
			connectToChat();
		}

		const handleConnectError = async (error: Error) => {
			console.log('채팅 서버 접속 오류가 발생했습니다.', error);
			const errorCode = Number(error.toString().split(':')[1].trim());

			console.log('오류 코드가 뭐냐고;;;', errorCode);

			if (errorCode === 1) {
				console.log('오류 코드 1번이라서 채팅방에 다시 연결할거야.');
				await refreshToken();
				socket?.connect();
				toast({
					title: '채팅 재접속 요청 😭',
					description: `페이지 새로 고침 부탁 드립니다. (F5 키를 눌러주세요.) 😵‍💫😵‍💫😵‍💫`,
				});
				return;
			}

			const errorMessage = getErrorMessage(errorCode);
			toast({
				title: '채팅 접속 오류 😭',
				description: `${errorMessage} 😵‍💫😵‍💫😵‍💫`,
			});
		};

		if (socket) {
			socket.on('connect', () => {
				console.log('채팅 서버와 연결되었습니다.');
				joinToChat();
			});

			socket.on('chat', receiveMessage);

			socket.on('error', (errorCode, sessionId) => {
				if (sessionId === session?.user.id) {
					const errorMessage = getErrorMessage(errorCode);
					console.log('채팅 서버 오류가 발생했습니다.', errorCode, errorMessage);

					if (errorCode === '5') {
						console.log('응, 메인 페이지로 돌아가!');
						router.push('/');

						toast({
							title: '채팅 접속 오류 😭',
							description: `${errorMessage} 😵‍💫😵‍💫😵‍💫`,
						});
						return;
					}
				}
			});

			socket.on('connect_error', handleConnectError);

			socket.on('disconnect', disconnectToChat);
		}

		return () => {
			if (socket) {
				socket.off('connect');
				socket.off('join');
				socket.off('chat', receiveMessage);
				socket.off('error');
				socket.off('connect_error', handleConnectError);
				socket.off('disconnect', disconnectToChat);

				socket.disconnect();
			}
		};
	}, [socket, session, roomId]);

	return (
		<>
			{isToggle ? (
				<div className="flexCol relative h-[calc(100vh-140px)] bg-subBlack pt-0">
					<div className="flexCol w-1/3 min-w-[353px] flex-1 justify-between gap-3 overflow-hidden rounded-md bg-subBlack px-3 pt-3">
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
						<ChatMessageList chatMessageList={chatMessageList} />

						<div className="h-12 w-full bg-subBlack" />
						<div className="absolute bottom-3 left-4 w-11/12">
							<SubInput
								onChange={onChangeChatMessageHandler}
								onClickSubmit={sendMessage}
								placeholder="채팅을 입력해주세요."
								value={chatMessage}
							/>
						</div>
					</div>
				</div>
			) : (
				<div className="flexCol w-[4%] items-center">
					<ChevronLeftIcon className="size-6" onClick={onClickToggle} />
				</div>
			)}
		</>
	);
}
