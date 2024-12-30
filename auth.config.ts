import Kakao from 'next-auth/providers/kakao';
import Naver from 'next-auth/providers/naver';
import type { NextAuthConfig } from 'next-auth';

export default { providers: [Kakao, Naver] } satisfies NextAuthConfig;
