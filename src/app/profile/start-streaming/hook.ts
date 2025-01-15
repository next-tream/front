import { useToast } from '@/hooks/use-toast';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useStreamingStateStore } from './_store/useStreamingStateStore';

const useStartStreaming = () => {
	const [roomId, setRoomId] = useState('');
	const { data: session, update } = useSession();
	const { toast } = useToast();
	const { setIsSteaming } = useStreamingStateStore();

	const onClickStartStreamingButtonHandler = async () => {
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/room`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${session?.accessToken ?? ''}`,
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify({
					tags: [1, 3],
					name: '방 만들기 테스트!',
				}),
			});

			if (response.status === 401) {
				if (!session?.accessToken) {
					toast({
						title: '스트리밍 시작 실패',
						description: '로그인 후 다시 시도해 주세요.',
						duration: 1000,
					});
					return;
				}

				const refreshResponse = await fetch('/api/auth/reissue', { method: 'POST' });
				const refreshResponseData = await refreshResponse.json();
				await update({ ...session, accessToken: refreshResponseData.accessToken });

				const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/room`, {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${session?.accessToken ?? ''}`,
						'Content-Type': 'application/json',
					},
					credentials: 'include',
					body: JSON.stringify({
						tags: [1, 3],
						name: '방 만들기 테스트!',
					}),
				});

				const data = await response.json();
				setRoomId(data.roomId);
				setIsSteaming(true);
				toast({
					title: '스트리밍 시작 알림',
					description: `스트리밍을 시작합니다. ${roomId}`,
					duration: 1000,
				});
				return;
			}

			const data = await response.json();
			setRoomId(data.roomId);
			setIsSteaming(true);
			toast({
				title: '스트리밍 시작 알림',
				description: `스트리밍을 시작합니다. ${roomId}`,
				duration: 1000,
			});
		} catch (error) {
			toast({ title: '스트리밍 시작 오류', description: `${error}`, duration: 1000 });
		}
	};

	const onClickStopStreamingButtonHandler = async () => {
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/room/${roomId}`, {
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${session?.accessToken ?? ''}`,
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			});

			if (response.status === 200) {
				setIsSteaming(false);
				toast({
					title: '스트리밍 종료 알림',
					description: `스트리밍을 종료합니다. ${roomId}`,
				});
				return;
			}

			toast({
				title: '스트리밍 종료 오류',
				description: `스트리밍이 정상적으로 종료되지 않았습니다. 다시 시도해 주세요.`,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return {
		roomId,
		onClickStartStreamingButtonHandler,
		onClickStopStreamingButtonHandler,
	};
};

export default useStartStreaming;
