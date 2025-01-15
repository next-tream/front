import { useSession } from 'next-auth/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IMessage, SocketErrorMessages } from '../type';
import { io, Socket } from 'socket.io-client';

const useChat = ({ roomId }: { roomId?: string }) => {
	const { data: session } = useSession();
	const [message, setMessage] = useState('');
	const [messageList, setMessageList] = useState<IMessage[]>([]);
	const maxMessages = 50;
	const [socket, setSocket] = useState<Socket | null>(null);

	const connectToChat = () => {
		const _socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
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
		setMessage('');
	};

	const receiveMessage = ({ createdAt, nickname, message, color }: IMessage) => {
		setMessageList((prev) => {
			const updatedMessages = [
				...prev,
				{
					createdAt,
					nickname,
					message,
					color,
				},
			];

			if (updatedMessages.length > maxMessages) {
				return updatedMessages.slice(1);
			}
			return updatedMessages;
		});
	};

	const getErrorMessage = (errorCode: number) => {
		return SocketErrorMessages[errorCode] ?? '채팅 서버 접속 실패, 알 수 없는 오류입니다.';
	};

	return {
		session,
		socket,
		messageList,
		message,
		connectToChat,
		joinToChat,
		sendMessage,
		receiveMessage,
		disconnectToChat,
		onChangeChatMessageHandler,
		getErrorMessage,
	};
};

export default useChat;
