'use client';

import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

export default function LivePlayer() {
	const source = 'http://43.203.221.60/hls/test.m3u8';
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (!videoRef.current) return;

		const hls = new Hls();
		hls.loadSource(source);
		hls.attachMedia(videoRef.current);

		hls.on(Hls.Events.MANIFEST_PARSED, () => {
			videoRef.current?.play().catch((err) => {
				console.warn('라이브 플레이어 자동 실행 실패:', err);
			});
		});

		console.log('라이브 플레이어 실행됨!');
	}, []);
	return (
		<video
			controls
			src={source}
			ref={videoRef}
			className="center aspect-video bg-subBlack lg:text-xl 2xl:text-3xl"
		></video>
	);
}
