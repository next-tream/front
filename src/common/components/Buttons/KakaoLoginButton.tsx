'use client';

import { signIn } from 'next-auth/react';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid';

export default function KakaoLoginButton() {
	const onClickKakaoLoginHandler = async () => {
		const result = await signIn('kakao');
		console.log('KAKAO 로그인:', result);
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
