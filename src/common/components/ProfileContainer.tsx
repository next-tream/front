import CircleImage from './CircleImage';
import { PencilIcon } from '@heroicons/react/24/outline';
import ProfileEditButton from './Buttons/ProfileEditButton';
import ThemeSelectionButtonsWrapper from './Buttons/ThemeSelectionButtonWrapper';
import { IProfileContainerProps } from '@/common/types/profile.interface';

export default function ProfileContainer({ nickName, introduceYourself }: IProfileContainerProps) {
	return (
		<div className="bg-subBlack flex items-center justify-between rounded-lg p-5">
			<div className="flex gap-5">
				<div className="relative size-44">
					<CircleImage src="/images/sample.jpg" />
					<PencilIcon className="absolute right-1 top-1 size-5 border-b" />
				</div>
				<div className="flexCol justify-center gap-2">
					<div className="text-4xl font-bold underline decoration-1 underline-offset-8">
						{nickName}
					</div>
					<div className="flex items-center text-base font-normal underline decoration-1 underline-offset-8">
						<PencilIcon className="mt-[0.4rem] size-6 border-b-[0.09rem] pb-1" />
						&ensp;<p>{introduceYourself}</p>
					</div>
					<div>
						<ThemeSelectionButtonsWrapper isTag={true} />
					</div>
				</div>
			</div>
			<div>
				<ProfileEditButton className="profileEditPrimaryBtn">프로필 수정</ProfileEditButton>
			</div>
		</div>
	);
}
