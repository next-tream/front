import Divider from '@/common/components/Divider';
import { ISponsorshipItemProps } from '../type';

export default function SponsorshipItem({ date, name, amount }: ISponsorshipItemProps) {
	return (
		<>
			<div className="between px-3 py-2 lg:text-base 2xl:text-xl">
				<p>{date}</p>
				<p>{name}</p>
				<p>{amount.toLocaleString()}원</p>
			</div>
			<Divider color="mainWhite" />
		</>
	);
}
