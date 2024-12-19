import { Context, useContext } from 'react';

interface IPaymentSummaryContainerProps {
	context: Context<{
		point: number;
		amount: number;
	}>;
}

export default function PaymentSummaryContainer({ context }: IPaymentSummaryContainerProps) {
	const { point, amount } = useContext(context);

	return (
		<div className="flexCol border-lightGray gap-2 rounded-xl border px-4 py-3">
			<div className="flex justify-between">
				<p className="text-main text-base font-semibold">최종 결제 금액</p>
				<p className="text-main text-lg font-bold">{point.toLocaleString()} 원</p>
			</div>
			<div className="flexCol gap-1">
				<div className="flex justify-between">
					<p className="text-darkGray text-sm font-medium">결제 전 포인트</p>
					<p className="text-darkGray text-sm font-medium">{amount.toLocaleString()}</p>
				</div>
				<div className="flex justify-between">
					<p className="text-subBlack text-sm font-medium">결제 후 포인트</p>
					<p className="text-subBlack text-sm font-semibold">
						+ {(point + amount).toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	);
}
