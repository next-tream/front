import { TModal } from '@/common/types/modal.interface';

export const MODAL_CONSTANTS = {
	login: {
		title: 'Nextream',
		description: '',
		mainButtonLabel: '',
		subButtonLabel: '',
		inputs: [
			{ title: '', placeholder: '이메일을 입력해 주세요.', type: 'text', name: 'email' },
			{
				title: '',
				placeholder: '비밀번호를 입력해 주세요.',
				type: 'password',
				name: 'password',
			},
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
			{
				name: 'email',
				title: '이메일',
				placeholder: '이메일 형식을 맞춰주세요.',
				type: 'text',
			},
			{
				name: 'nickname',
				title: '닉네임',
				placeholder: '2~8자를 입력해 주세요. ',
				type: 'text',
			},
			{
				name: 'password',
				title: '비밀번호',
				placeholder: '8~16자 영문, 숫자, 특수문자 1자리를 포함해 주세요.',
				type: 'password',
			},
			{
				name: 'checkPassword',
				title: '비밀번호 확인',
				placeholder: '비밀번호를 한 번 더 입력해 주세요.',
				type: 'password',
			},
		],
	},
	sendAuthCode: {
		title: '비밀번호 찾기',
		description: '인증 번호를 받으실 이메일을 입력해 주세요.',
		mainButtonLabel: '인증 번호 전송',
		subButtonLabel: '이전',
		inputs: [
			{ name: 'email', title: '이메일', placeholder: '@를 포함해 주세요.', type: 'text' },
		],
	},
	inputAuthCode: {
		title: '비밀번호 찾기',
		description: '인증 번호를 입력해 주세요. 인증번호 6자리는 이메일로 전송됩니다.',
		mainButtonLabel: '인증',
		subButtonLabel: '이전',
		inputs: [
			{ name: 'email', title: '이메일', placeholder: '@를 포함해 주세요.', type: 'text' },
		],
	},
	passwordChange: {
		title: '새 비밀번호 입력',
		description: '새로운 비밀번호를 입력해 주세요.',
		mainButtonLabel: '변경',
		subButtonLabel: '이전',
		inputs: [
			{
				name: 'password',
				title: '새 비밀번호',
				placeholder: '8~16자 영문, 숫자, 특수문자 1자리를 포함해 주세요.',
				type: 'password',
			},
			{
				name: 'checkPassword',
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
	emailAuth: {
		title: '인증하기',
		description: '인증 번호를 입력해 주세요. 인증번호 6자리는 이메일로 전송됩니다.',
		mainButtonLabel: '다음',
		inputs: [],
	},
	tagSelection: {
		title: '관심 테마 선택하기',
		description: '좋아하는 테마 5개를 선택해 주세요.',
		mainButtonLabel: '다음',
		subButtonLabel: '',
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
