import { toast } from '@/hooks/use-toast';
import { signOut, useSession } from 'next-auth/react';

const useLogout = () => {
	const { data: session } = useSession();

	const logout = async () => {
		try {
			await signOut({ callbackUrl: '/' });
			const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${session?.accessToken ?? ''}`,
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			});

			console.log(response);

			if (response.status >= 200 && response.status < 300) {
				console.log('로그아웃 성공!');
				toast({
					title: '로그아웃 알림 🤡',
					description: '로그아웃 되었습니다, 감사합니다. 😊',
				});
				return true;
			}
		} catch (error) {
			console.log(`로그아웃 실패: ${error}`);
		}
	};

	return {
		logout,
	};
};

export default useLogout;
