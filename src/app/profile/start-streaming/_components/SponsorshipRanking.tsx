import RankingContain from './RankingContain';
import Divider from '@/common/components/Divider';
import { useToggle } from '@/common/hooks/useToggle';

export default function SponsorshipRanking() {
	const { isToggle, onClickToggle } = useToggle(true);

	return (
		<div className="flexColCenter w-full gap-3 py-3">
			{isToggle && <RankingContain />}
			<button className="h-2" onClick={onClickToggle}>
				<div className="center w-20 rounded-md border">
					<Divider color="lightGray" />
				</div>
			</button>
		</div>
	);
}
