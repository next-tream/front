import Credentials from 'next-auth/providers/credentials';
import Kakao from 'next-auth/providers/kakao';
import Naver from 'next-auth/providers/naver';
import NextAuth from 'next-auth';
import api from '@/common/configs/axios.config';

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	providers: [
		Kakao({
			clientId: process.env.AUTH_KAKAO_ID,
			clientSecret: process.env.AUTH_KAKAO_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
				},
			},
		}),
		Naver({
			clientId: process.env.AUTH_NAVER_ID,
			clientSecret: process.env.AUTH_NAVER_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
				},
			},
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24 * 7,
	},
	callbacks: {
		async signIn({ account }) {
			if (!account) return false;

			if (account.provider === 'credentials') return true;

			try {
				const response = await api.get(
					`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login?social=${account.provider}`,
					{
						headers: {
							Authorization: `Bearer ${account.access_token}`,
						},
					},
				);

				if (response.data.accessToken) {
					account.accessToken = response.data.accessToken;
					return true;
				}
			} catch (error) {
				console.error('Social login error:', error);
				return false;
			}

			return false;
		},
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.accessToken;
			}
			return token;
		},
		async session({ session, token }) {
			if (typeof token.accessToken === 'string') {
				session.accessToken = token.accessToken;
			}
			return session;
		},
	},
	secret: process.env.AUTH_SECRET,
});
