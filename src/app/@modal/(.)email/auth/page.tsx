import { EmailAuthModal } from '@/common/components/Modals/EmailAuthModal';

export default function EmailAuthInterceptPage({
	searchParams,
}: {
	searchParams: { email?: string };
}) {
	const email = searchParams.email || '';
	return <EmailAuthModal authenticationTime={300} email={email} />;
}
