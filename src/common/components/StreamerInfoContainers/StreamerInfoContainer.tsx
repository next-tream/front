import CircleImage from '@/common/components/CircleImage';
import { IStreamerInfoContainerProps } from '@/common/types/container.interface';
import { formatRoomTags } from '@/common/utils/formatRoomTags';

export default function StreamerInfoContainer({
	title,
	name,
	category,
	image,
	isLive,
}: IStreamerInfoContainerProps) {
	const roomTags = formatRoomTags(category);
	return (
		<div className="rounded-lg p-1 hover:bg-darkGray hover:bg-opacity-25">
			<div className="flex cursor-pointer gap-2">
				<div className="lg:size-8 2xl:size-14">
					{image && <CircleImage src={image} isStreaming={isLive} />}
				</div>
				<div className="flexCol gap-0.5">
					<p className="font-bold text-mainWhite lg:text-sm 2xl:text-2xl">{title}</p>
					<p className="font-semibold text-mainWhite lg:text-xs 2xl:text-xl">{name}</p>
					<p className="font-medium text-darkGray lg:text-xs 2xl:text-xl">{roomTags}</p>
				</div>
			</div>
		</div>
	);
}
