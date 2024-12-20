import PageTitle from '@/common/components/PageTitle';
import TotalIncome from '@/common/components/earnings/TotalIncome';
import DetailsOfSponsorshipContainer from '@/common/components/earnings/DetailsOfSponsorshipContainer';

export default function EarningsPage() {
	return (
		<div className="flexCol w-full gap-8">
			<PageTitle title="수입 대시보드" />
			<TotalIncome />
			<DetailsOfSponsorshipContainer />
		</div>
	);
}
