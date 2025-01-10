import BaseButton from '@/common/components/Buttons/BaseButton';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PointChargeContainer() {
	return (
		<div className="center gap-5">
			<div className="center gap-3">
				<div className="center gap-1">
					<CurrencyDollarIcon className="size-8 text-mainWhite" />
					<p className="text-xl font-medium text-mainWhite">내 포인트</p>
				</div>

				<p className="text-2xl font-medium text-main">1000 P</p>
			</div>
			<Link href="/profile/point/charge">
				<BaseButton className="basePrimaryBtn px-4 py-2 text-xl font-medium">
					충전하기
				</BaseButton>
			</Link>
		</div>
	);
}
