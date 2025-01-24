import { EmailAuthModal } from '@/common/components/Modals/EmailAuthModal';
import { FindPasswordModal } from '@/common/components/Modals/FindPasswordModal';
import LoginModal from '@/common/components/Modals/LoginModal';
import PasswordChangeModal from '@/common/components/Modals/PasswordChangeModal';
import React from 'react';
import SignUpModal from '@/common/components/Modals/SignUpModal';

const MODAL_COMPONENTS: Record<string, React.ElementType | ((props: unknown) => JSX.Element)> = {
	login: LoginModal,
	signup: SignUpModal,
	passwordChange: PasswordChangeModal,
	findPassword: FindPasswordModal,
	emailAuth: EmailAuthModal,
};

export default function ModalPage({
	searchParams,
}: {
	searchParams: { modal?: string; email?: string };
}) {
	const modal = searchParams.modal || '';
	const email = searchParams.email || '';
	const SelectedModal = MODAL_COMPONENTS[modal];

	if (!SelectedModal) return null;

	const modalProps =
		modal === 'passwordChange' || modal === 'emailAuth'
			? { email }
			: modal === 'findPassword'
				? { authenticationTime: 300 }
				: {};

	return <SelectedModal {...modalProps} />;
}
