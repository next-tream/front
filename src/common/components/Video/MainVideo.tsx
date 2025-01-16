'use client';

import Image from 'next/image';
import LiveStatusContainer from '@/common/components/LiveStatusContainer';
import Link from 'next/link';
import { requestBroadcastingRoomInformation } from '@/common/services/requestBroadcastingRoomInformation';
import { useEffect, useState } from 'react';
import { IBroadcastingProps } from '@/app/streaming/[roomId]/_types/broadcasting.interface';
import StreamerInfoContainer from '../StreamerInfoContainers/StreamerInfoContainer';
import { formatRoomTags } from '@/common/utils/formatRoomTags';

export default function MainVideo() {
	const [result, setResult] = useState<IBroadcastingProps>();
	const roomTags = formatRoomTags(result?.roomTags);

	useEffect(() => {
		async function result() {
			const result = await requestBroadcastingRoomInformation('67875d27db452996f1683f84');
			setResult(result);
		}
		result();
	}, []);

	return (
		<div className="flexCol h-full w-1/2 gap-3">
			<Link
				href="/streaming/67875d27db452996f1683f84/"
				className="relative h-full w-full rounded-2xl"
			>
				{result?.roomImage && <Image src={result?.roomImage} alt="main" fill />}
				<div className="absolute left-3 top-3 flex">
					<LiveStatusContainer watchingCount={result?.participantsLength} />
				</div>
			</Link>
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
