'use client';

import LivePlayer from '@/common/components/LivePlayer';
import StreamerCard from './_components/StreamerCard';
import Divider from '@/common/components/Divider';
import Chat from '@/app/profile/start-streaming/_components/Chat';
import { useParams } from 'next/navigation';
import { useToggle } from '@/common/hooks/useToggle';
import { requestBroadcastingRoomInformation } from '@/common/services/requestBroadcastingRoomInformation';
import { useEffect, useState } from 'react';
import { IBroadcastingProps } from './_types/broadcasting.interface';

export default function StreamingPage() {
	const { isToggle, onClickToggle } = useToggle(true);
	const { roomId } = useParams();
	const [result, setResult] = useState<IBroadcastingProps>();

	useEffect(() => {
		async function result() {
			const result = await requestBroadcastingRoomInformation(roomId as string);
			setResult(result);
		}
		result();
	}, []);

	return (
		<div className="w-min-[40rem] h-min-[40rem]">
			<div className="flex h-full w-full gap-2">
				<div className="flexCol w-full gap-4">
					<LivePlayer />

					{result && <StreamerCard broadcasting={result} />}
					<Divider color="mainWhite" />
				</div>

				<Chat
					roomId={roomId.toString()}
					isToggle={isToggle}
					onClickToggle={onClickToggle}
				/>
			</div>
		</div>
	);
}
