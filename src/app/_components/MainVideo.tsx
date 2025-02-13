'use client';

import { useEffect, useState } from 'react';

import { IBroadcastingProps } from '@/app/streaming/[roomId]/_types/broadcasting.interface';
import Image from 'next/image';
import LiveStatusContainer from './MainLiveStatusContainer';
import StreamerInfoContainer from '../../common/components/StreamerInfos/StreamerInfoContainer';
import { toast } from '@/common/hooks/useToast';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function MainVideo() {
	const router = useRouter();
	const { data: session } = useSession();
	const [result, setResult] = useState<IBroadcastingProps>();

	const onClickMoveRoomHandler = () => {
		if (!session) {
			toast({
				title: '방송 접속 실패 ❌ ',
				description: '로그인 후 다시 접속해 주세요. 😲 ',
			});
			router.push('/?modal=login');
			return;
		} else {
			router.push('/streaming/67875d27db452996f1683f84/');
		}
	};

	// mocking 해야하지만 귀찮아서 안 할 예정
	// useEffect(() => {
	// 	async function result() {
	// 		const result = await requestBroadcastingRoomInformation('67875d27db452996f1683f84');
	// 		setResult(result);
	// 	}
	// 	result();
	// }, []);

	return (
		<div className="flexCol h-full w-1/2 gap-3">
			<button
				className="group relative h-full w-full rounded-2xl"
				onClick={onClickMoveRoomHandler}
			>
				{result?.roomImage && (
					<Image
						src={result?.roomImage}
						alt="main"
						fill
						className="videoHover rounded-lg"
					/>
				)}
				<div className="absolute left-3 top-3 flex">
					<LiveStatusContainer watchingCount={result?.participantsLength || 0} />
				</div>
			</button>
			<div>
				<StreamerInfoContainer
					title={result?.roomName}
					name={result?.nickname}
					image={result?.streamerImage}
					category={result?.roomTags}
					isLive={result?.isLive}
				/>
			</div>
		</div>
	);
}
