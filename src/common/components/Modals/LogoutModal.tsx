import BaseModal from '@/common/components/Modals/BaseModal';

export default function LogoutModal() {
	return (
		<BaseModal type="logout">
			<div className="center h-full items-center">
				<p className="text-xl font-medium text-mainBlack">로그아웃 하시겠습니까?</p>
			</div>
		</BaseModal>
	);
}
