import SponsorshipItem from './SponsorshipItem';

export default function SponsorshipItemList() {
	return (
		<div className="flexCol gap-2">
			{Array.from({ length: 10 }).map((_, index) => (
				<SponsorshipItem key={index} date="2024-12-12" name="예슬대장님" amount={3000000} />
			))}
		</div>
	);
}
