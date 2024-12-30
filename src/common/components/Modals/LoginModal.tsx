'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import BaseButton from '@/common/components/Buttons/BaseButton';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';
import KakaoLoginButton from '../Buttons/KakaoLoginButton';
import NaverLoginButton from '../Buttons/NaverLoginButton';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { submitAction } from '@/common/validation/loginFormValidation';

export default function LoginModal() {
	const [formData, setFormData] = useFormState(submitAction, {
		password: '',
		email: '',
		errors: {},
	});

	console.log(formData);

	return (
		<BaseModal type="login">
			<div className="flexCol gap-16">
				<div className="flexCol gap-6">
					<form action={setFormData} className="flexCol gap-6">
						<TextInputsWrapper type="login" errors={formData.errors} />
						<BaseButton className="basePrimaryBtn">로그인</BaseButton>
					</form>
					<div className="flex w-full items-center gap-2">
						<div className="h-0 w-1/2 border border-lightGray" />
						<p className="text-nowrap font-medium text-lightGray">또는</p>
						<div className="h-0 w-1/2 border border-lightGray" />
					</div>
					<div className="center gap-4">
						<NaverLoginButton />
						<KakaoLoginButton />
					</div>
				</div>
				<div className="center gap-3">
					<Link href="/signup">
						<p className="cursor-pointer text-nowrap text-xs font-semibold text-lightGray">
							가입하기
						</p>
					</Link>
					<div className="h-6 w-0 border border-lightGray" />
					<Link href="/findPassword">
					<p className="cursor-pointer text-nowrap text-xs font-semibold text-lightGray">
						비밀번호 찾기
					</p>
					</Link>
				</div>
			</div>
		</BaseModal>
	);
}
