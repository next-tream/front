import { getServerSession } from 'next-auth';
import { authOptions } from '@/common/configs/nextAuth.config';

import BaseButton from '@/common/components/Buttons/BaseButton';
import Divider from '@/common/components/Divider';
import PageTitle from '@/common/components/PageTitle';
import ProfileContainer from '@/app/profile/my-profile/_components/ProfileContainer';
import ProfileSubMenu from '@/app/profile/my-profile/_components/ProfileSubMenu';
import PasswordInput from '@/common/components/Inputs/PasswordInput';

export default async function myProfilePage() {
	const session = await getServerSession(authOptions);

	return (
		<div className="flexCol gap-4">
			<PageTitle pointText="Nextream" title="프로필" />
			<ProfileContainer
				nickName={session?.user.nickname ?? ''}
				introduceYourself="한 줄 소개를 작성해 보세요."
			/>
			<div className="flexCol gap-3">
				<ProfileSubMenu color="subBlack">비밀번호 변경</ProfileSubMenu>
				<ProfileSubMenu color="mainBlack">강예슬 천재</ProfileSubMenu>
			</div>
			<Divider color="lightGray" />
			<div className="flexCol gap-4">
				<PasswordInput title="새 비밀번호" isWhiteTitle={true} />
				<PasswordInput title="새 비밀번호 확인" isWhiteTitle={true} />
			</div>
			<div className="flex w-full justify-end">
				<div className="w-40">
					<BaseButton className="baseDisableBtn">비밀번호 변경</BaseButton>
				</div>
			</div>
		</div>
	);
}
