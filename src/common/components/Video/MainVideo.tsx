'use client';

import Image from 'next/image';
import LiveStatusContainer from '@/common/components/LiveStatusContainer';
import { requestBroadcastingRoomInformation } from '@/common/services/requestBroadcastingRoomInformation';
import { useEffect, useState } from 'react';
import { IBroadcastingProps } from '@/app/streaming/[roomId]/_types/broadcasting.interface';
import StreamerInfoContainer from '../StreamerInfoContainers/StreamerInfoContainer';
import { formatRoomTags } from '@/common/utils/formatRoomTags';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { toast } from '@/hooks/use-toast';

export default function MainVideo() {
	const router = useRouter();
	const { data: session } = useSession();
	const [result, setResult] = useState<IBroadcastingProps>();
	const roomTags = formatRoomTags(result?.roomTags);

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

	useEffect(() => {
		async function result() {
			const result = await requestBroadcastingRoomInformation('67875d27db452996f1683f84');
			setResult(result);
		}
		result();
	}, []);

	return (
		<div className="flexCol h-full w-1/2 gap-3">
			<button className="relative h-full w-full rounded-2xl" onClick={onClickMoveRoomHandler}>
				{result?.roomImage && <Image src={result?.roomImage} alt="main" fill />}
				<div className="absolute left-3 top-3 flex">
					<LiveStatusContainer watchingCount={result?.participantsLength} />
				</div>
			</button>
			<div>
				<StreamerInfoContainer
					title={result?.roomName}
					name={result?.nickname}
					category={roomTags}
					isLive={result?.isLive}
				/>
			</div>
		</div>
	);
}
