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
			main: '#FC6B2D',
			mainBlack: '#111111',
			subBlack: '#282828',
			mainRed: '#D32F2F',
			lightGray: '#D0D1D3',
			darkGray: '#787878',
			mainWhite: '#E2E4E9',
		},
	},
	plugins: [],
};
export default config;
