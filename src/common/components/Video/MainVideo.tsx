'use client';

import { useEffect, useState } from 'react';

import { IBroadcastingProps } from '@/app/streaming/[roomId]/_types/broadcasting.interface';
import Image from 'next/image';
import Link from 'next/link';
import LiveStatusContainer from '@/common/components/LiveStatusContainer';
import StreamerInfoContainer from '../StreamerInfoContainers/StreamerInfoContainer';
import { formatRoomTags } from '@/common/utils/formatRoomTags';
import { requestBroadcastingRoomInformation } from '@/common/services/requestBroadcastingRoomInformation';

export default function MainVideo() {
	const [result, setResult] = useState<IBroadcastingProps>();
	console.log(result);
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
					image={result?.streamerImage}
					category={roomTags}
					isLive={result?.isLive}
				/>
			</div>
		</div>
	);
}
