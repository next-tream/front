'use client';

import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid';
import { signIn } from 'next-auth/react';

export default function KakaoLoginButton() {
	return (
		<button className="center size-12 rounded-full bg-[#FEE500]">
			<ChatBubbleOvalLeftIcon
				className="size-6 text-[#000000]"
				onClick={async () => await signIn('kakao')}
			/>
		</button>
	);
}
