'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function NaverLoginButton() {
	const onClickNaverLoginHandler = async () => {
		const result = await signIn('naver');
		console.log('NAVER 로그인 :', result);
	};
	return (
		<button onClick={onClickNaverLoginHandler}>
			<Image
				src="/images/naver_login_button.png"
				alt="naver_login_icon"
				width={48}
				height={48}
			/>
		</button>
	);
}
