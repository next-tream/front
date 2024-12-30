'use client';

import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid';
import { signIn } from 'next-auth/react';

export default function KakaoLoginButton() {
	const onClickKakaoLoginHandler = async () => {
		try {
			await signIn('kakao');
			const response = await fetch(`/api/cookie`, {
				credentials: 'include',
			});

			if (!response.ok) new Error('카카오 로그인 후 쿠키 요청 실패!');
		} catch (error) {
			alert(`카카오 로그인 오류 발생: ${error}`);
		}
	};

	return (
		<button className="center size-12 rounded-full bg-[#FEE500]">
			<ChatBubbleOvalLeftIcon
				className="size-6 text-[#000000]"
				onClick={onClickKakaoLoginHandler}
			/>
		</button>
	);
}
