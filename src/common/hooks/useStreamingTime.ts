import { useState } from 'react';
import useInterval from './useInterval';
import { formatTimeToSeconds } from '../utils/formatTimeToSeconds';
import { formatTime } from '../utils/formatTime';

export const useStreamingTime = (createdAt: string) => {
	const now = new Date();
	const nowSeconde = now.getSeconds();
	const nowMinutes = now.getMinutes();
	const nowHours = now.getHours();
	const nowTime = [nowHours, nowMinutes, nowSeconde];

	const startTime = createdAt.substring(11, 19).split(':');

	const createdAtSeconde = formatTimeToSeconds(startTime);
	const nowTimeToSeconde = formatTimeToSeconds(nowTime);
	const timeDifference = nowTimeToSeconde - createdAtSeconde;

	const [time, setTime] = useState(timeDifference);

	useInterval(() => {
		setTime((prev) => prev + 1);
	}, 1000);

	return formatTime(time);
};
