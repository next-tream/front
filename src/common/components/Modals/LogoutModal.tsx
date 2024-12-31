'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import requestLogout from '@/common/services/requestLogout';
import { useRouter } from 'next/navigation';

export default function LogoutModal() {
	const router = useRouter();

	return (
		<BaseModal
			type="logout"
			onSubButtonClick={() => router.back()}
			onMainButtonClick={() => requestLogout()}
		>
			<div className="center h-full items-center">
				<p className="text-xl font-medium text-mainBlack">로그아웃 하시겠습니까?</p>
			</div>
		</BaseModal>
	);
}
