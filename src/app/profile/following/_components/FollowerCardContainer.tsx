import Image from 'next/image';
import BaseButton from '@/common/components/Buttons/BaseButton';
import TagsWrapper from '@/common/components/Tags/TagsWrapper';
import { IFollowerCardContainerProps } from '../type';
import { formatRoomTags } from '@/common/utils/formatRoomTags';

export default function FollowerCardContainer({
	name,
	description,
	tags,
	src,
}: IFollowerCardContainerProps) {
	const roomTags = formatRoomTags(tags);

	return (
		<div className="w-full rounded-md bg-subBlack py-5 pl-6 pr-10">
			<div className="betweenCenter">
				<div className="flex w-full items-center gap-4">
					<Image
						src={src}
						alt={name}
						width={130}
						height={130}
						className="aspect-[1/1] rounded-full"
					/>

					<div className="flexCol gap-2">
						<p className="text-4xl text-mainWhite">{name}</p>
						<p className="text-xl font-extralight">{description}</p>
						{roomTags && <TagsWrapper tags={roomTags} />}
					</div>
				</div>
				<BaseButton className="basePrimaryBtn text-nowrap p-2">팔로우 취소</BaseButton>
			</div>
		</div>
	);
}
