'use client';

import LivePlayer from '@/common/components/LivePlayer';
import StreamerCard from './_components/StreamerCard';
import Divider from '@/common/components/Divider';
import Chat from '@/app/profile/start-streaming/_components/Chat';

import { useParams } from 'next/navigation';
import { useToggle } from '@/common/hooks/useToggle';

export default function StreamingPage() {
	const { isToggle, onClickToggle } = useToggle(true);
	const { roomId } = useParams();

	return (
		<div className="w-min-[40rem] h-min-[40rem]">
			<div className="flex h-full w-full gap-2">
				<div className="flexCol w-full gap-4">
					<LivePlayer />

					<StreamerCard />
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
