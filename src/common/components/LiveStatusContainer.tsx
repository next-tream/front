import Image from 'next/image';
import React from 'react';

interface ILiveStatusContainerProps {
	watchingCount: number;
}

export default function LiveStatusContainer({ watchingCount }: ILiveStatusContainerProps) {
	return (
		<div className="absolute left-2 top-2 flex gap-2">
			<div className="aline-center bg-mainRed rounded-lg p-1 font-semibold">LIVE</div>
			<div className="bg-mainBlack text-mainWhite flex gap-1 rounded-lg p-1 text-base font-semibold">
				<Image src="/images/icon.svg" alt="icon" width={20} height={20} />
				{watchingCount}
			</div>
		</div>
	);
}
