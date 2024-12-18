import { UserIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface ILiveStatusContainerProps {
	textSize?: boolean;
	watchingCount: number;
}

export default function LiveStatusContainer({
	textSize,
	watchingCount,
}: ILiveStatusContainerProps) {
	return (
		<div className={`absolute left-2 top-2 flex gap-2 ${textSize ? 'text-xl' : 'text-sm'}`}>
			<div className="aline-center bg-mainRed rounded-lg p-1 font-semibold">LIVE</div>
			<div className="bg-mainBlack text-mainWhite flex items-center justify-center gap-1 rounded-lg p-1 font-semibold">
				<UserIcon className="size-5" />
				{watchingCount}
			</div>
		</div>
	);
}
