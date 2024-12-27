import NextAuth, { AuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';
import { setCookieAction } from '@/common/actions/setCookieAction';

const authOptions: AuthOptions = {
	providers: [
		KakaoProvider({
			clientId: process.env.KAKAO_CLIENT_ID ?? '',
			clientSecret: process.env.KAKAO_CLIENT_SECRET ?? '',
		}),
		NaverProvider({
			clientId: process.env.NAVER_CLIENT_ID ?? '',
			clientSecret: process.env.NAVER_CLIENT_SECRET ?? '',
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24 * 7,
	},
	callbacks: {
		// 로그인 할 때마다 호출됨.
		async signIn({ account }) {
			if (account) {
				const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/social/kakao`, {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${account.access_token}`,
						'Content-Type': 'application/json',
					},
					credentials: 'include',
				});

				const data = await response.json();
				setCookieAction(data.accessToken);

				if (response.ok) {
					// alert('로그인 성공');
					account.accessToken = data.accessToken;
					return true;
				}

				alert('로그인 실패');
				return false;
			}

			return false;
		},

		// 콜백 URL로 리다이렉트될 때마다 호출됨.
		async redirect({ baseUrl }) {
			return baseUrl;
		},

		// jwt 토큰이 생성되거나 업데이트될 때마다 호출됨.
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.accessToken;
			}
			return token;
		},

		// 세션이 체크될 때 마다 실행된다.
		async session({ session, token }) {
			if (typeof token.accessToken === 'string') {
				session.accessToken = token.accessToken;
			}
			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
