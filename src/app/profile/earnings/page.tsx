import PageTitle from '@/common/components/PageTitle';
import TotalIncome from '@/common/components/earnings/TotalIncome';
import ChartContainer from '@/common/components/earnings/ChartContainer';
import DetailsOfSponsorshipContainer from '@/common/components/earnings/DetailsOfSponsorshipContainer';

export default function EarningsPage() {
	return (
		<div className="flexCol h-full w-full gap-8">
			<PageTitle title="수입 대시보드" />
			<TotalIncome />
			<ChartContainer />
			<DetailsOfSponsorshipContainer />
		</div>
	);
}
