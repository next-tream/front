import { formatSecondsToMinutes } from '@/common/utils/formatSecondsToMinutes';
import { useEffect, useState } from 'react';

const useTimer = (time: number) => {
	const [count, setCount] = useState<number>(time);
	const { minutes, seconds } = formatSecondsToMinutes(count);

	useEffect(() => {
		const timer = setInterval(() => {
			setCount((prev) => prev - 1);
		}, 1000);

		if (count === 0) clearInterval(timer);

		return () => clearInterval(timer);
	}, [count]);

	return { minutes, seconds };
};

export default useTimer;
