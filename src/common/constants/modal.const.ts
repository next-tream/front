import { TModal } from '@/common/types/modal.interface';

export const MODAL_CONSTANTS = {
	login: {
		title: 'Nextream',
		description: '',
		mainButtonLabel: '',
		subButtonLabel: '',
		inputs: [
			{ title: '', placeholder: '이메일을 입력해 주세요.', type: 'text' },
			{ title: '', placeholder: '비밀번호를 입력해 주세요.', type: 'password' },
		],
	},
	logout: {
		title: '로그아웃',
		description: '',
		mainButtonLabel: '확인',
		subButtonLabel: '취소',
		inputs: [],
	},
	signUp: {
		title: '회원가입',
		description: '',
		mainButtonLabel: '다음',
		subButtonLabel: '이전',
		inputs: [
			{ title: '이메일', placeholder: '@를 포함해 주세요.', type: 'text' },
			{ title: '닉네임', placeholder: '2~8자를 입력해 주세요. ', type: 'text' },
			{
				title: '비밀번호',
				placeholder: '8~16자 영문, 숫자, 특수문자 1자리를 포함해 주세요.',
				type: 'password',
			},
			{
				title: '전화번호',
				placeholder: '전화번호를 입력해 주세요.',
				type: 'tel',
			},
		],
	},
	passwordChange: {
		title: '새 비밀번호 입력',
		description: '새로운 비밀번호를 입력해 주세요.',
		mainButtonLabel: '변경',
		subButtonLabel: '이전',
		inputs: [
			{
				title: '새 비밀번호',
				placeholder: '8~16자 영문, 숫자, 특수문자 1자리를 포함해 주세요.',
				type: 'password',
			},
			{
				title: '새 비밀번호 확인',
				placeholder: '비밀번호를 다시 한 번 입력해 주세요.',
				type: 'password',
			},
		],
	},
	phoneVerification: {
		title: '비밀번호 변경',
		description:
			'전화번호를 입력해 주세요. 비밀번호 변경을 위한 인증번호는 카카오톡으로 전송됩니다.',
		mainButtonLabel: '다음',
		subButtonLabel: '이전',
		inputs: [],
	},
	kakaoAuth: {
		title: '인증하기',
		description: '인증 번호를 입력해 주세요. 인증번호 6자리는 카카오톡으로 전송됩니다.',
		mainButtonLabel: '다음',
		subButtonLabel: '이전',
		inputs: [],
	},
	themeSelection: {
		title: '관심 테마 선택하기',
		description: '좋아하는 테마 5개를 선택해 주세요.',
		mainButtonLabel: '다음',
		subButtonLabel: '이전',
		inputs: [],
	},
	pointCharge: {
		title: '충전하기',
		description: '충전할 포인트를 선택해 주세요.',
		mainButtonLabel: '충전하기',
		subButtonLabel: '',
		inputs: [],
	},
	donation: {
		title: '후원하기',
		description: '후원할 포인트를 선택해 주세요.',
		mainButtonLabel: '후원하기',
		subButtonLabel: '',
		inputs: [],
	},
} as const;

const MODAL_CONFIG: TModal = MODAL_CONSTANTS;

export default MODAL_CONFIG;

export const CHARGE_POINT_OPTIONS = [1000, 5000, 10000, 50000];
