'use client';
import { useEffect, useRef, useState } from 'react';

import Hls from 'hls.js';
import Screen from '@/app/profile/start-streaming/_components/Screen';

export default function LivePlayer() {
	const source = process.env.NEXT_PUBLIC_HLS_URL!;
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isOffline, setIsOffline] = useState(false);

	useEffect(() => {
		if (!videoRef.current) return;

		const hls = new Hls();
		hls.loadSource(source);
		hls.attachMedia(videoRef.current);

		hls.on(Hls.Events.ERROR, (_, data) => {
			if (data.fatal) setIsOffline(true);
		});

		hls.on(Hls.Events.MANIFEST_PARSED, () => {
			videoRef.current?.play().catch((err) => {
				console.warn('라이브 플레이어 자동 실행 실패:', err);
			});
		});

		console.log('라이브 플레이어 실행됨!');
		setIsOffline(false);

		return () => {
			hls.destroy();
		};
	}, []);

	if (isOffline) return <Screen isLive={false} />;

	return (
		<video
			controls
			autoPlay
			src={source}
			ref={videoRef}
			className="center aspect-video w-full bg-subBlack lg:text-xl 2xl:text-3xl"
		></video>
	);
}
