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
import PageTitle from '@/common/components/PageTitle';
import MenuContainer from '@/common/components/MenuContainer';
import { recommendVideo } from '@/common/constants/data';

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
			<div className="scrollbar-none flexCol max-h-[calc(100vh-140px)] w-full gap-4 overflow-scroll">
				<LivePlayer />

				{result && <StreamerCard broadcasting={result} />}
				<Divider color="mainWhite" />
				<PageTitle id="recommendation" title="추천 스트리밍" index={0} />
				<MenuContainer data={recommendVideo} />
			</div>

			<Chat roomId={roomId.toString()} isToggle={isToggle} onClickToggle={onClickToggle} />
		</div>
	);
}
