'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import api from '@/common/configs/axios.config';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LogoutModal() {
	const router = useRouter();
	const onClickLogoutHandler = async () => {
		try {
			await signOut({ callbackUrl: '/' });
			const response = await api.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`);

			if (response.status === 204) {
				console.log('로그아웃 완료됐을껄?');
			}
		} catch (error) {
			console.log(`로그아웃 실패: ${error}`);
		}
	};

	return (
		<BaseModal
			type="logout"
			onSubButtonClick={() => router.back()}
			onMainButtonClick={onClickLogoutHandler}
		>
			<div className="center h-full items-center">
				<p className="text-xl font-medium text-mainBlack">로그아웃 하시겠습니까?</p>
			</div>
		</BaseModal>
	);
}
