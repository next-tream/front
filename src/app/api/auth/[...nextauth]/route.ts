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
				// axios 쓰기로 했으니 axios에서 처리하면 될 듯
				// 여기 로직은 try catch로 묶어서 에러 전체에서 처리하기 !
				/**
				 * headers: {
						Authorization: `Bearer ${account.access_token}`,
						'Content-Type': 'application/json',
					},
					credentials: 'include',

					try catch를 사용하지 않으니깐 에러를 아에 못잡네 ㅠㅠ try catch + toast 조합!
				 */
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_BASE_URL}/api/social/kakao`,
					{
						headers: {
							Authorization: `Bearer ${account.access_token}`,
							'Content-Type': 'application/json',
						},
						credentials: 'include',
					},
				);

				const data = await response.json();
				// 그럼 여기 로직까지 한꺼번에 처리할 수 있습니다.

				// 여기서는 response.ok && data.accessToken이 존재하면 ? 해야할 것들 해놓는 게 좋을 듯 합니다.
				// 이렇게 했으니깐 백엔드에서는 cookie에 access token 안 넘겨줄게용

				setCookieAction(data.accessToken);

				if (response.ok) {
					account.accessToken = data.accessToken;
					return true;
				}

				// alert -> toast
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
		// 여기서는 제가 user 개인정보 넘겨줄 것들 넘겨주겠습니다.
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
