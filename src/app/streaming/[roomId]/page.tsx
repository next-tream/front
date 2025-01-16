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
import Video from '@/common/components/Video/Video';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

export default function StreamingPage() {
	const router = useRouter();
	const { data: session } = useSession();
	const { roomId } = useParams();
	const { isToggle, onClickToggle } = useToggle(true);

	const [result, setResult] = useState<IBroadcastingProps>();

	useEffect(() => {
		async function result() {
			const result = await requestBroadcastingRoomInformation(roomId as string);
			setResult(result);
		}
		result();

		if (!session) {
			toast({
				title: '방송 접속 오류 ❌ ',
				description: '로그인 후 다시 접속해 주세요. 😲 ',
			});
			router.push('/?modal=login');
			return;
		}
	}, []);

	return (
		<div className="flex h-full w-full gap-2">
			<div className="flexCol max-h-[calc(100vh-140px)] w-full gap-4 overflow-scroll scrollbar-none">
				<LivePlayer />

				{result && <StreamerCard broadcasting={result} />}
				<Divider color="mainWhite" />
				<PageTitle id="recommendation" title="추천 스트리밍" index={0} />
				<MenuContainer>
					<Video showLiveStatus={true} />
				</MenuContainer>
			</div>

			<Chat roomId={roomId.toString()} isToggle={isToggle} onClickToggle={onClickToggle} />
		</div>
	);
}
