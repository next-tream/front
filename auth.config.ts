import Credentials from 'next-auth/providers/credentials';
import Kakao from 'next-auth/providers/kakao';
import Naver from 'next-auth/providers/naver';
import type { NextAuthConfig } from 'next-auth';

const authConfig: NextAuthConfig = {
	providers: [
		Kakao({
			clientId: process.env.AUTH_KAKAO_ID!,
			clientSecret: process.env.AUTH_KAKAO_SECRET!,
		}),
		Naver({
			clientId: process.env.AUTH_NAVER_ID!,
			clientSecret: process.env.AUTH_NAVER_SECRET!,
		}),
		Credentials({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'email@example.com' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials) return null;

				// 예제: 백엔드 API 호출로 로그인 확인
				const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(credentials),
				});

				if (response.ok) {
					const user = await response.json();
					return user; // user 객체 반환
				}

				return null;
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	secret: process.env.AUTH_SECRET,
};

export default authConfig;
