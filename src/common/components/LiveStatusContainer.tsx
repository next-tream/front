import { UserIcon } from '@heroicons/react/24/solid';
import { ILiveStatusContainerProps } from '@/common/types/container.interface';

export default function LiveStatusContainer({ watchingCount }: ILiveStatusContainerProps) {
	return (
		<div className={`viewCountHover absolute left-2 top-2 flex gap-2 lg:text-sm 2xl:text-xl`}>
			<div className="center rounded-lg bg-mainRed p-1 font-semibold">LIVE</div>
			<div className="center gap-1 rounded-lg bg-mainBlack p-1 font-semibold text-mainWhite">
				<UserIcon className="size-5" />
				{watchingCount}
			</div>
		</div>
	);
}
