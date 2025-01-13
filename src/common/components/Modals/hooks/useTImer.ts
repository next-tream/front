import { useEffect, useState } from 'react';

const useTimer = (time: number) => {
	const [count, setCount] = useState<number>(time);
	const minutes = String(Math.floor((count % 3600) / 60)).padStart(2, '0');
	const seconds = String(Math.floor(count % 60)).padStart(2, '0');

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
