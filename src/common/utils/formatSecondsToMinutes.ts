export const formatSecondsToMinutes = (count: number) => {
	const minutes = String(Math.floor((count % 3600) / 60)).padStart(2, '0');
	const seconds = String(Math.floor(count % 60)).padStart(2, '0');

	return { minutes, seconds };
};
