import { ITimerProps } from '@/common/types/modal.interface';
import { formatSecondsToMinutes } from '@/common/utils/formatSecondsToMinutes';

export default function Timer({ time }: ITimerProps) {
	const formattedTime = formatSecondsToMinutes(time);
	const minutes = formattedTime[0];
	const seconds = formattedTime[1];

	return (
		<p className="text-sm font-semibold text-mainRed">
			{minutes}:{seconds}
		</p>
	);
}
