import NextAuth, { AuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';
import { api } from '@/common/configs/axios.config';
import { setCookieAction } from '@/common/actions/setCookieAction';

const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'email@example.com' },
				password: { label: 'Password', type: 'password' },
			},
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			async authorize(credentials): Promise<any> {
				if (!credentials) return null;

				const { email, password } = credentials;

				try {
					// axios
					const data = await api.post('/auth/login', { email, password });

					if (data.data.accessToken) {
						return true;
					}

					return false;
				} catch (error) {
					console.error('Login Error:', error);
					return null;
				}
			},
		}),
		KakaoProvider({
			clientId: process.env.KAKAO_CLIENT_ID!,
			clientSecret: process.env.KAKAO_CLIENT_SECRET!,
		}),
		NaverProvider({
			clientId: process.env.NAVER_CLIENT_ID!,
			clientSecret: process.env.NAVER_CLIENT_SECRET!,
		}),
	],

	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24 * 7,
	},

	callbacks: {
		async signIn({ account }) {
			if (account) {
				if (account.provider === 'credentials') {
					return true;
				}
				try {
					const response = await api.get(
						`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login?social=${account.provider}`,
						{
							headers: {
								Authorization: `bearer ${account.access_token}`,
							},
						},
					);

					if (response.data.accessToken) {
						setCookieAction(response.data.accessToken);
						account.accessToken = response.data.accessToken;
						return true;
					}
				} catch (error) {
					console.log('로그인 실패', error);
					return false;
				}
			}

			return false;
		},

		async redirect({ baseUrl }) {
			return baseUrl;
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
