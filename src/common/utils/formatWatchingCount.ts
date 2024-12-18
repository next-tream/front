export const formatWatchingCount = (watchingCount: number) => {
	const formatCount = String(watchingCount).slice(0, -3);
	const result =
		formatCount.slice(0, formatCount.length - 1) +
		',' +
		formatCount.slice(formatCount.length - 1);
	return watchingCount > 10000 ? result + '만명' : watchingCount + '명';
};
