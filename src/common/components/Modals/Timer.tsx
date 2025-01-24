import { ITimerProps } from '@/common/types/modal.interface';
import useTimer from '@/common/hooks/useTImer';

export default function Timer({ time }: ITimerProps) {
	const { minutes, seconds } = useTimer(time);

	return <p className="text-sm font-semibold text-mainRed">{`${minutes}:${seconds}`}</p>;
}
