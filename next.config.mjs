/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	trailingSlash: true,
	env: {
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
		NEXT_PUBLIC_HLS_URL: process.env.NEXT_PUBLIC_HLS_URL,
	},
};

export default nextConfig;
