import Divider from '@/common/components/Divider';
import PageTitle from '@/common/components/PageTitle';
import SponsorshipItemList from './SponsorshipItemList';

export default function DetailsOfSponsorshipContainer() {
	return (
		<div className="flexCol gap-6 rounded-md border border-mainWhite lg:p-7 2xl:p-9">
			<PageTitle title="후원 내역" />
			<div className="flexCol gap-2 rounded-md border border-mainWhite lg:p-5 2xl:p-7">
				<div className="between px-9 py-4 lg:text-base 2xl:text-xl">
					<p>날짜</p>
					<p>후원자</p>
					<p>금액</p>
				</div>
				<Divider color="mainWhite" />
				<SponsorshipItemList />
			</div>
		</div>
	);
}
