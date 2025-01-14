'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';

import { useToggle } from '@/common/hooks/useToggle';

import Chat from './_components/Chat';
import PageTitle from '@/common/components/PageTitle';
import StartStreamingButton from '@/app/profile/start-streaming/_components/StartStreamingButton';
import SubInput from '@/app/profile/start-streaming/_components/SubInput';
import LivePlayer from '@/common/components/LivePlayer';
import { useToast } from '@/hooks/use-toast';

export default function StartStreamingPage() {
	const { isToggle, onClickToggle } = useToggle(true);
	const [roomId, setRoomId] = useState('');
	const { data: session, update } = useSession();
	const { toast } = useToast();

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
				toast({
					title: '스트리밍 시작 알림',
					description: `스트리밍을 시작합니다. ${roomId}`,
				});
				return;
			}

			const data = await response.json();
			setRoomId(data.roomId);
			toast({ title: '스트리밍 시작 알림', description: `스트리밍을 시작합니다. ${roomId}` });
		} catch (error) {
			toast({ title: '스트리밍 시작 오류', description: `${error}` });
		}
	};

	return (
		<div className="flex h-full w-full gap-2">
			<div className={`${isToggle ? 'w-2/3' : 'w-[96%]'} flex flex-col gap-2`}>
				<PageTitle title="LIVE STREAM" />
				<LivePlayer />
				<SubInput placeholder="스트리밍 제목" />
				<div>방송 주제 태그 선택</div>
				{/* <TagSelectionButtonsWrapper isTag={true} /> */}
				<SubInput placeholder="스트리밍 설명" />
				<StartStreamingButton onClick={onClickStartStreamingButtonHandler} />
			</div>
			<Chat roomId={roomId} isToggle={isToggle} onClickToggle={onClickToggle} />
		</div>
	);
}
