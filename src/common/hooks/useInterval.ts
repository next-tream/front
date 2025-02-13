import { useEffect, useRef } from 'react';

interface IUseInterval {
	(callback: () => void, delay: number): void;
}

const useInterval: IUseInterval = (callback, delay) => {
	const savedCallback = useRef<(() => void) | null>(null);

	useEffect(() => {
		savedCallback.current = callback;
	});
	useEffect(() => {
		function tick() {
			if (savedCallback.current) {
				savedCallback.current();
			}
		}
		const id = setInterval(tick, delay);
		return () => clearInterval(id);
	}, [delay]);
};

export default useInterval;
