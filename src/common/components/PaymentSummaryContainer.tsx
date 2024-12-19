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
		<div className="flex flex-col gap-2 rounded-xl border border-lightGray px-4 py-3">
			<div className="flex justify-between">
				<p className="text-base font-semibold text-main">최종 결제 금액</p>
				<p className="text-lg font-bold text-main">{point.toLocaleString()} 원</p>
			</div>
			<div className="flex flex-col gap-1">
				<div className="flex justify-between">
					<p className="text-sm font-medium text-darkGray">결제 전 포인트</p>
					<p className="text-sm font-medium text-darkGray">{amount.toLocaleString()}</p>
				</div>
				<div className="flex justify-between">
					<p className="text-sm font-medium text-subBlack">결제 후 포인트</p>
					<p className="text-sm font-semibold text-subBlack">
						+ {(point + amount).toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	);
}
