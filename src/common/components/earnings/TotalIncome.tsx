import Earnings from './Earnings';

export default function TotalIncome() {
	return (
		<div className="border-mainWhite flexCol gap-4 rounded-md border lg:p-9 2xl:p-12">
			<p className="font-medium lg:text-2xl 2xl:text-3xl">총 수입</p>
			<div className="flexCol gap-1">
				<Earnings earnings={180000} />
				<p className="text-darkGray lg:text-lg 2xl:text-2xl">이번 달</p>
			</div>
		</div>
	);
}
