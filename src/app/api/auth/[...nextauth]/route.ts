import NextAuth, { AuthOptions } from 'next-auth';

import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';
import { setCookieAction } from '@/common/actions/setCookieAction';
import { jwtDecode } from 'jwt-decode';
import validateType from '@/common/utils/validateType';
import { JwtPayloadSchema } from '@/common/types/jwt.interface';

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
			if (!account) return false;

			if (account.provider === 'credentials') {
				return true;
			}

			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login?social=${account.provider}`,
					{
						headers: {
							Authorization: `Bearer ${account.access_token}`,
							'Content-Type': 'application/json',
						},
						credentials: 'include',
					},
				);

				const data = await response.json();

				if (response.ok && data.accessToken) {
					setCookieAction(data.accessToken);
					account.accessToken = data.accessToken;
					return true;
				}

				console.log('로그인 실패', data);
				return false;
			} catch (error) {
				console.log('로그인 실패', error);
				return false;
			}
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
				const payload = jwtDecode(token.accessToken);
				session.accessToken = token.accessToken;
				if (validateType(JwtPayloadSchema, payload)) {
					session.user = payload;
				}
			}
			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
