'use client';

import Chat from '@/app/profile/start-streaming/_components/Chat';
import { useToggle } from '@/common/hooks/useToggle';
import { useParams } from 'next/navigation';
import React from 'react';

export default function StreamingPage() {
	const { isToggle, onClickToggle } = useToggle(true);
	const { roomId } = useParams();

	return (
		<div>
			<Chat roomId={roomId.toString()} isToggle={isToggle} onClickToggle={onClickToggle} />
		</div>
	);
}
