import { AuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import { TJwtPayload } from '@/common/types/jwt.interface';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';
import { api } from '@/common/configs/axios.config';
import { jwtDecode } from 'jwt-decode';
import { setCookieAction } from '@/common/actions/setCookieAction';
import { parseCookie } from '@/common/utils/parseCookie';

export const authOptions: AuthOptions = {
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
					const data = await api.post('/auth/login', { email, password });

					if (data.data.accessToken) {
						if (data.headers['set-cookie']) {
							const sessionId = parseCookie(data.headers['set-cookie'][0]).sessionId;
							setCookieAction(data.data.accessToken, sessionId);

							return {
								backendAccessToken: data.data.accessToken,
								sessionId: sessionId,
							};
						}
					}

					return null;
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
	secret: process.env.AUTH_SECRET,
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24 * 7,
	},

	callbacks: {
		async signIn({ account }) {
			if (!account) return false;

			if (account.provider === 'credentials') {
				return true;
			}

			try {
				const response = await api.get(`/auth/login?social=${account.provider}`, {
					headers: {
						Authorization: `Bearer ${account.access_token}`,
					},
				});

				if (response.data.accessToken) {
					const backendAccessToken = response.data.accessToken;
					account.backendAccessToken = backendAccessToken;

					if (response.headers['set-cookie']) {
						const sessionId = parseCookie(response.headers['set-cookie'][0]).sessionId;
						setCookieAction(backendAccessToken, sessionId);
						account.sessionId = sessionId;
						return true;
					}

					return false;
				}

				console.log('로그인 실패 :', response);
				return false;

				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (error) {
				console.log(error);
				return false;
			}
		},

		async redirect({ baseUrl, url }) {
			console.log(baseUrl);
			return baseUrl;
		},

		async jwt({ token, account, user }) {
			if (account?.backendAccessToken) {
				token.accessToken = account.backendAccessToken;
				token.sessionId = account.sessionId;
			}
			if (user?.backendAccessToken) {
				console.log('user', user);
				token.accessToken = user.backendAccessToken;
				console.log('jwt', token);
			}
			return token;
		},

		async session({ session, token }) {
			console.log('session', token);
			if (token.accessToken) {
				try {
					const payload = jwtDecode<TJwtPayload>(token.accessToken);
					session.accessToken = token.accessToken;
					session.sessionId = token.sessionId;
					session.user = payload;
				} catch (error) {
					console.error('JWT Decode Error:', error);
				}
			}
			return session;
		},
	},
};
