import { EmailAuthModal } from '@/common/components/Modals/EmailAuthModal';
import { FindPasswordModal } from '@/common/components/Modals/FindPasswordModal';
import LoginModal from '@/common/components/Modals/LoginModal';
import LogoutModal from '@/common/components/Modals/LogoutModal';
import PasswordChangeModal from '@/common/components/Modals/PasswordChangeModal';
import SignUpModal from '@/common/components/Modals/SignUpModal';
import React from 'react';

export default function ModalPage({
	searchParams,
}: {
	searchParams: { modal?: string; email?: string };
}) {
	const modal = searchParams.modal || '';
	const email = searchParams.email || '';

	switch (modal) {
		case 'login':
			return <LoginModal />;
		case 'signup':
			return <SignUpModal />;
		case 'logout':
			return <LogoutModal />;
		case 'passwordChange':
			return <PasswordChangeModal email={email} />;
		case 'findPassword':
			return <FindPasswordModal authenticationTime={300} />;
		case 'emailAuth':
			return <EmailAuthModal authenticationTime={300} email={email} />;
		default:
			return null;
	}
}
