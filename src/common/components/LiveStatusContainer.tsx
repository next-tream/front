import { UserIcon } from '@heroicons/react/24/solid';
import { ILiveStatusContainerProps } from '../types/container.interface';

export default function LiveStatusContainer({ watchingCount }: ILiveStatusContainerProps) {
	return (
		<div className={`absolute left-2 top-2 flex gap-2 lg:text-sm 2xl:text-xl`}>
			<div className="center bg-mainRed rounded-lg p-1 font-semibold">LIVE</div>
			<div className="bg-mainBlack text-mainWhite center gap-1 rounded-lg p-1 font-semibold">
				<UserIcon className="size-5" />
				{watchingCount}
			</div>
		</div>
	);
}
