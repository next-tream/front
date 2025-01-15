'use client';

import BaseButton from '@/common/components/Buttons/BaseButton';
import BaseModal from '@/common/components/Modals/BaseModal';
import KakaoLoginButton from '../Buttons/KakaoLoginButton';
import Link from 'next/link';
import NaverLoginButton from '../Buttons/NaverLoginButton';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';
import { submitAction } from '@/common/actions/loginFormAction';
import { useFormState } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginModal() {
	const { toast } = useToast();
	const router = useRouter();
	const { data: session } = useSession();
	const [formData, setFormData] = useFormState(submitAction, {
		password: '',
		email: '',
		errors: {},
	});

	const { email, password, errors } = formData;

	useEffect(() => {
		async function signinFuc() {
			const result = await signIn('credentials', {
				redirect: false,
				email,
				password,
			});

			if (result?.error) {
				toast({ title: `${result?.error}... 😱`, duration: 2000 });
			} else {
				toast({ title: '로그인 성공!! 🎊', duration: 1000 });

				setTimeout(() => {
					window.location.replace('/');
				}, 1000);
			}
		}
		if (email && password && Object.keys(errors).length === 0) {
			signinFuc();
		}
	}, [formData]);

	useEffect(() => {
		if (session && !session.isTag) router.push('/theme-select');
	}, [session]);

	return (
		<BaseModal type="login">
			<div className="flexCol h-full gap-9">
				<div className="flexCol h-4/5 gap-6">
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
				<div className="center h-1/5 gap-3">
					<Link href="/?modal=signup">
						<p className="cursor-pointer text-nowrap text-xs font-semibold text-lightGray">
							가입하기
						</p>
					</Link>
					<div className="h-6 w-0 border border-lightGray" />
					<Link href="/?modal=findPassword">
						<p className="cursor-pointer text-nowrap text-xs font-semibold text-lightGray">
							비밀번호 찾기
						</p>
					</Link>
				</div>
			</div>
		</BaseModal>
	);
}
