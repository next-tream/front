'use client';

import { createContext, MouseEvent, useState } from 'react';
import { IPointChargeModalProps } from '@/common/types/modal.interface';
import BaseModal from './BaseModal';
import PointSelectionContainer from '@/common/components/PointSelectionContainer';
import PaymentSummaryContainer from '@/common/components/PaymentSummaryContainer';
import AgreementSection from '@/common/components/AgreementSection';
import { TInputChangeEvent } from '@/common/types/handler.type';

export default function PointChargeModal({ amount }: IPointChargeModalProps) {
	const PointChargeModalContext = createContext({ point: 0, amount: 0 });
	const [point, setPoint] = useState(1000);

	const onChangePointInputHandler = (event: TInputChangeEvent) => {
		const value = event.target.value;
		console.log(value);
	};

	const onClickPointButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
		const value = event.currentTarget.value;
		setPoint(() => Number(value));
	};

	return (
		<PointChargeModalContext.Provider value={{ point, amount }}>
			<BaseModal type="pointCharge">
				<div className="flexCol h-full justify-between">
					<div className="border-lightGray flexCol gap-3 rounded-xl border px-4 py-3">
						<PointSelectionContainer
							title="충전할 포인트"
							context={PointChargeModalContext}
							onChangePointInputHandler={onChangePointInputHandler}
							onClickPointButtonHandler={onClickPointButtonHandler}
						/>
					</div>
					<div className="flexCol gap-2">
						<PaymentSummaryContainer context={PointChargeModalContext} />
						<AgreementSection />
					</div>
				</div>
			</BaseModal>
		</PointChargeModalContext.Provider>
	);
}
