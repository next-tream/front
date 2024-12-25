import { TrophyIcon } from 'lucide-react';
import { IRankingProps } from '../type';

export default function Ranking({ isFirst, color, name, sponsorshipAmount }: IRankingProps) {
	return (
		<div className={`${isFirst ? 'center w-1/3' : 'betweenCenter w-full'} gap-2`}>
			<TrophyIcon className={`text-${color} size-${isFirst ? '8' : '5'}`} />
			<div className={`${!isFirst && 'betweenCenter w-full'}`}>
				<p className={`font-${isFirst ? 'medium' : 'base'} text-${isFirst ? 'xl' : 'sm'}`}>
					{name}
				</p>
				<p className={`text-gold text-${isFirst ? 'sm' : 'xs'}`}>
					₩{sponsorshipAmount.toLocaleString()}
				</p>
			</div>
		</div>
	);
}
