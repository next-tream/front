import ChartContainer from './_components/ChartContainer';
import DetailsOfSponsorshipContainer from './_components/DetailsOfSponsorshipContainer';
import PageTitle from '@/common/components/PageTitle';
import TotalIncome from './_components/TotalIncome';

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
