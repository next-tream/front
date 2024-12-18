export const formatSecondsToMinutes = (seconds: number): [string, string] => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;

	const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

	return [String(minutes), formattedSeconds];
};
