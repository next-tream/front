export const formatTimeToSeconds = (time: string[] | number[]) => {
	let result = 0;

	time.forEach((el, i) => {
		result += (typeof el === 'string' ? parseInt(el) : el) * Math.pow(60, 2 - i);
	});

	return result;
};
