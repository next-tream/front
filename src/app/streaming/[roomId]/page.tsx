'use client';
import { useParams } from 'next/navigation';
import { useToggle } from '@/common/hooks/useToggle';
import Chat from '@/app/profile/start-streaming/_components/Chat';
import LivePlayer from '@/common/components/LivePlayer';

export default function StreamingPage() {
	const { isToggle, onClickToggle } = useToggle(true);
	const { roomId } = useParams();

	return (
		<div className="w-min-[40rem] h-min-[40rem]">
			<div className="flex h-full w-full gap-2">
				<LivePlayer />
				<Chat
					roomId={roomId.toString()}
					isToggle={isToggle}
					onClickToggle={onClickToggle}
				/>
			</div>
		</div>
	);
}
