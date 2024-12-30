import { EmailAuthModal } from '@/common/components/Modals/EmailAuthModal';

export default function EmailAuthPage({ searchParams }: { searchParams: { email?: string } }) {
	const email = searchParams.email || '';
	return <EmailAuthModal authenticationTime={300} email={email} />;
}
