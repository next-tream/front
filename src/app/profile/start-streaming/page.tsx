'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';

import { useToggle } from '@/common/hooks/useToggle';

import Chat from './_components/Chat';
import PageTitle from '@/common/components/PageTitle';
import StartStreamingButton from '@/app/profile/start-streaming/_components/StartStreamingButton';
import SubInput from '@/app/profile/start-streaming/_components/SubInput';
import LivePlayer from '@/common/components/LivePlayer';

export default function StartStreamingPage() {
	const { isToggle, onClickToggle } = useToggle(true);
	const [roomId, setRoomId] = useState('');
	const { data: session, update } = useSession();

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

			const data = await response.json();
			setRoomId(data.roomId);

			if (response.status === 401) {
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

				console.log('리프레쉬 토큰 후 다시 시도', response);
			}
		} catch (error) {}
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
