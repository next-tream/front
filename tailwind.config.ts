import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/common/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			aspectRatio: {
				'2/3': '2 / 3',
			},
		},
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
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				'.center': { '@apply flex items-center justify-center': {} },
				'.btn': { '@apply center py-2 text-xl': {} },
				'.roundBtn': { '@apply btn px-4 rounded-3xl font-semibold': {} },
				'.baseBtn': {
					'@apply center btn w-full rounded-xl font-bold text-mainWhite flex-1': {},
				},
				'.basePrimaryBtn': { '@apply baseBtn bg-main': {} },
				'.baseSubBtn': { '@apply baseBtn bg-subBlack': {} },
				'.iconLeadingBtn': { '@apply center roundBtn gap-1': {} },
				'.iconLeadingPrimaryBtn': { '@apply iconLeadingBtn text-mainWhite bg-main': {} },
				'.iconLeadingSubBtn': { '@apply iconLeadingBtn text-mainBlack bg-lightGray': {} },
				'.profileEditBtn': { '@apply center roundBtn border border-solid border-main': {} },
				'.profileEditPrimaryBtn': { '@apply profileEditBtn text-mainWhite bg-main': {} },
				'.profileEditSubBtn': { '@apply profileEditBtn text-main bg-mainWhite': {} },
			});
		}),
	],
};
export default config;
