import useInterval from '../hooks/useInterval';

export const formatTime = (time: number) => {
	const hours = String(Math.floor(time / 3600)).padStart(2, '0');
	const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
	const seconds = String(Math.floor(time % 60)).padStart(2, '0');
	return `${hours}:${minutes}:${seconds}`;
};
