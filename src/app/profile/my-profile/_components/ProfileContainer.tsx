import CircleImage from '@/common/components/CircleImage';
import { IProfileContainerProps } from '../type';
import { PencilIcon } from '@heroicons/react/24/outline';
import ProfileEditButton from '@/common/components/Buttons/ProfileEditButton';

export default function ProfileContainer({ nickname, introduceYourself }: IProfileContainerProps) {
	return (
		<div className="betweenCenter rounded-lg bg-subBlack p-5">
			<div className="flex gap-5">
				<div className="relative size-44">
					<CircleImage src="/images/sample.jpg" />
					<PencilIcon className="absolute right-1 top-1 size-5 border-b" />
				</div>
				<div className="flexCol justify-center gap-2">
					<div className="text-4xl font-bold underline decoration-1 underline-offset-8">
						{nickname}
					</div>
					<div className="flex items-center text-base font-normal underline decoration-1 underline-offset-8">
						<PencilIcon className="mt-[0.4rem] size-6 border-b-[0.09rem] pb-1" />
						&ensp;<p>{introduceYourself}</p>
					</div>
					{/* <div>
						<TagSelectionButtonsWrapper isTag={true} />
					</div> */}
				</div>
			</div>
			<div>
				<ProfileEditButton className="profileEditPrimaryBtn">프로필 수정</ProfileEditButton>
			</div>
		</div>
	);
}
