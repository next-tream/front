import BaseModal from '@/common/components/Modals/BaseModal';
import TextInput from '@/common/components/Inputs/TextInput';

const SIGNUP_FORM_LIST = [
	{ title: '이메일', placeholder: '이메일을 입력해 주세요.', type: 'text' },
	{ title: '닉네임', placeholder: '닉네임을 입력해 주세요.', type: 'text' },
	{ title: '비밀번호', placeholder: '비밀번호를 입력해 주세요.', type: 'password' },
	{ title: '전화번호', placeholder: '전화번호를 입력해 주세요.', type: 'tel' },
];

export default function SignUpModal() {
	return (
		<BaseModal title="회원가입" mainButtonLabel="다음" subButtonLabel="이전">
			<div className="flex flex-col gap-4">
				{SIGNUP_FORM_LIST.map((el) => (
					<TextInput
						key={el.title}
						type={el.type}
						title={el.title}
						placeholder={el.placeholder}
					/>
				))}
			</div>
		</BaseModal>
	);
}
