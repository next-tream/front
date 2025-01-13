/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	trailingSlash: true,
	env: {
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
		KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
		NAVER_CLIENT_ID: process.env.NAVER_CLIENT_ID,
		NAVER_CLIENT_SECRET: process.env.NAVER_CLIENT_SECRET,
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
		NEXT_PUBLIC_HLS_URL: process.env.NEXT_PUBLIC_HLS_URL,
		NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
	},
};

export default nextConfig;
