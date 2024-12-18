import Image from 'next/image';
import { formatWatchingCount } from '@/common/utils/formatWatchingCount';
import { ICategoryContainerProps } from '@/common/types/container.interface';

export default function CategoryContainer({
	title,
	image,
	watchingCount,
}: ICategoryContainerProps) {
	const viewCount = formatWatchingCount(watchingCount);
	return (
		<div className="relative flex w-full flex-col gap-2">
			<div className="group">
				<div className="bg-mainBlack center absolute left-2 top-2 z-10 gap-1 rounded-md px-1 py-0.5 transition-transform group-hover:scale-110">
					<div className="bg-mainRed size-2 rounded-full" />
					<p className="text-mainWhite font-bold lg:text-xs 2xl:text-lg">{viewCount}</p>
				</div>
				<Image
					src={image}
					alt={`${image}_image`}
					width={0}
					height={0}
					sizes="100vw"
					className={
						'group-hover:border-main aspect-2/3 w-full cursor-pointer rounded-xl object-cover transition-transform group-hover:scale-105 group-hover:border-2'
					}
				/>
			</div>
			<p className="text-lightGray font-semibold lg:text-base 2xl:text-2xl">{title}</p>
		</div>
	);
}
