'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function NaverLoginButton() {
	const onClickNaverLoginHandler = async () => {
		try {
			const result = await signIn('naver');
			console.log('client', result);
		} catch (error) {
			console.error(error);
		}
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
