import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/common/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
		colors: {
			primary: '#FC6B2D',
			gray: '#6B6B6B',
			lightGray: '#E2E4E9',
			white: '#FFFFFF',
			black: '#000000',
		},
	},
	plugins: [],
};
export default config;
