import BaseButton from '@/common/components/Buttons/BaseButton';
import Divider from '@/common/components/Divider';
import TextInput from '@/common/components/Inputs/TextInput';
import PageTitle from '@/common/components/PageTitle';
import ProfileContainer from '@/common/components/Profile/ProfileContainer';
import ProfileSubMenu from '@/common/components/Profile/ProfileSubMenu';

export default function myProfilePage() {
	return (
		<div className="flexCol gap-4">
			<PageTitle pointText="Nextream" title="프로필" />
			<ProfileContainer
				nickName="미즈하라치즈루"
				introduceYourself="안녕하세요! 저는 치즈루입니다~! 모두 렌타루 카누죠 하세요~ 시간당 만엔입니다^^"
			/>
			<div className="flexCol gap-3">
				<ProfileSubMenu color="subBlack">비밀번호 변경</ProfileSubMenu>
				<ProfileSubMenu color="mainBlack">강예슬 천재</ProfileSubMenu>
			</div>
			<Divider color="lightGray" />
			<div>
				<TextInput title="새 비밀번호" />
				<TextInput title="새 비밀번호 확인" />
			</div>
			<div className="flex w-full justify-end">
				<div className="w-40">
					<BaseButton className="baseDisableBtn">비밀번호 변경</BaseButton>
				</div>
			</div>
		</div>
	);
}
