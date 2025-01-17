import { ICategoryContainerProps } from '@/common/types/container.interface';
import Image from 'next/image';
import { formatWatchingCount } from '@/common/utils/formatWatchingCount';

export default function CategoryContainer({
	title,
	image,
	watchingCount,
}: ICategoryContainerProps) {
	const viewCount = formatWatchingCount(watchingCount);
	return (
		<div className="flexCol relative w-full gap-2">
			<div className="group">
				<div className="viewCountHover center absolute left-2 top-2 z-10 gap-1 rounded-md bg-mainBlack px-1 py-0.5">
					<div className="size-2 rounded-full bg-mainRed" />
					<p className="text-xs font-bold text-mainWhite lg:text-xs 2xl:text-lg">
						{viewCount}
					</p>
				</div>
				<Image
					src={image}
					alt={`${image}_image`}
					width={0}
					height={0}
					sizes="100vw"
					className={'videoHover aspect-2/3 rounded-xl'}
				/>
			</div>
			<p className="text-base font-semibold text-lightGray">{title}</p>
		</div>
	);
}
