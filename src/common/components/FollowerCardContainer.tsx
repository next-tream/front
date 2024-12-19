import Image from 'next/image';
import BaseButton from '@/common/components/Buttons/BaseButton';
import TagsWrapper from '@/common/components/Tags/TagsWrapper';

interface IFollowerCardContainerProps {
	name: string;
	description: string;
	tags: string[];
}

export default function FollowerCardContainer({
	name,
	description,
	tags,
}: IFollowerCardContainerProps) {
	return (
		<div className="bg-subBlack w-full rounded-md py-5 pl-6 pr-10">
			<div className="flex items-center justify-between">
				<div className="flex w-full items-center gap-4">
					<Image
						src="/images/main.png"
						alt="샘플 이미지"
						width={130}
						height={130}
						className="aspect-[1/1] rounded-full"
					/>

					<div className="flexCol gap-2">
						<p className="text-mainWhite text-4xl">{name}</p>
						<p className="text-xl font-extralight">{description}</p>
						<TagsWrapper tags={tags} />
					</div>
				</div>
				<BaseButton className="basePrimaryBtn text-nowrap p-2">팔로우 취소</BaseButton>
			</div>
		</div>
	);
}
