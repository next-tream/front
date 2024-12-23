import NextAuth, { AuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

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
			console.log(account);
			if (account) {
				const result = await fetch('http://172.31.99.179:3000/social/kakao', {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${account.access_token}`,
						'Content-Type': 'application/json',
					},
					credentials: 'include',
				});
				console.log('서버 응답::::::', result);
			}

			return true;
		},

		// 콜백 URL로 리다이렉트될 때마다 호출됨.
		async redirect({ baseUrl }) {
			return baseUrl;
		},

		// 세션이 체크될 때 마다 실행된다.
		async session({ session }) {
			return session;
		},

		// jwt 토큰이 생성되거나 업데이트될 때마다 호출됨.
		async jwt({ token }) {
			return token;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
