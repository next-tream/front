import LineChart from './LineChart';
import MonthlyMenu from './MonthlyMenu';
import PageTitle from '@/common/components/PageTitle';

export default function ChartContainer() {
	return (
		<div className="flexCol w-full gap-10 rounded-md border border-mainWhite lg:h-[400px] lg:p-7 2xl:h-[600px] 2xl:p-9">
			<div className="betweenCenter">
				<PageTitle title="일별 수입 및 누적 수입" />
				<MonthlyMenu />
			</div>
			<LineChart />
		</div>
	);
}
