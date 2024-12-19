import Image from 'next/image';
import { formatWatchingCount } from '@/common/utils/formatWatchingCount';

interface ICategoryContainerProps {
	title: string;
	image: string;
	watchingCount: number;
}

export default function CategoryContainer({
	title,
	image,
	watchingCount,
}: ICategoryContainerProps) {
	const viewCount = formatWatchingCount(watchingCount);
	return (
		<div className="relative flex max-w-36 flex-col gap-2">
			<div className="group">
				<div className="center absolute left-2 top-2 z-10 gap-1 rounded-md bg-mainBlack px-1 py-0.5 transition-transform duration-500 group-hover:scale-110">
					<div className="size-2 rounded-full bg-mainRed" />
					<p className="text-xs font-bold text-mainWhite">{viewCount}</p>
				</div>
				<Image
					src={image}
					alt={`${image}_image`}
					width={0}
					height={0}
					sizes="100vw"
					className={
						'aspect-2/3 w-full cursor-pointer rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 group-hover:border-2 group-hover:border-main'
					}
				/>
			</div>
			<p className="text-base font-semibold text-lightGray">{title}</p>
		</div>
	);
}
