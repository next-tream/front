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
				<div className="center bg-mainBlack absolute left-2 top-2 z-10 gap-1 rounded-md px-1 py-0.5 transition-transform duration-500 group-hover:scale-110">
					<div className="bg-mainRed size-2 rounded-full" />
					<p className="text-mainWhite text-xs font-bold lg:text-xs 2xl:text-lg">
						{viewCount}
					</p>
				</div>
				<Image
					src={image}
					alt={`${image}_image`}
					width={0}
					height={0}
					sizes="100vw"
					className={
						'aspect-2/3 group-hover:border-main w-full cursor-pointer rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 group-hover:border-2'
					}
				/>
			</div>
			<p className="text-lightGray text-base font-semibold">{title}</p>
		</div>
	);
}
