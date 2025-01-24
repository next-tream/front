'use client';

import { useEffect, useState } from 'react';

import Chat from '@/app/profile/start-streaming/_components/Chat';
import Divider from '@/common/components/Divider';
import { IBroadcastingProps } from './_types/broadcasting.interface';
import LivePlayer from '@/common/components/LivePlayer';
import MenuWrapper from '@/common/components/MenuWrapper';
import PageTitle from '@/common/components/PageTitle';
import StreamerCard from './_components/StreamerCard';
import { recommendVideo } from '@/common/constants/data';
import { requestBroadcastingRoomInformation } from '@/common/services/requestBroadcastingRoomInformation';
import { useParams } from 'next/navigation';
import { useToggle } from '@/common/hooks/useToggle';

export default function StreamingPage() {
	const { roomId } = useParams();
	const { isToggle, onClickToggle } = useToggle(true);

	const [result, setResult] = useState<IBroadcastingProps>();

	useEffect(() => {
		async function result() {
			const result = await requestBroadcastingRoomInformation(roomId as string);
			setResult(result);
		}
		result();
	}, []);

	return (
		<div className="flex h-full w-full gap-2">
			<div className="flexCol max-h-[calc(100vh-140px)] w-full gap-4 overflow-scroll scrollbar-none">
				<LivePlayer />

				{result && <StreamerCard broadcasting={result} />}
				<Divider color="mainWhite" />
				<PageTitle id="recommendation" title="추천 스트리밍" index={0} />
				<MenuWrapper data={recommendVideo} />
			</div>

			<Chat roomId={roomId.toString()} isToggle={isToggle} onClickToggle={onClickToggle} />
		</div>
	);
}
