import PasswordChangeModal from '@/common/components/Modals/PasswordChangeModal';

export default function PasswordChangeInterceptPage({
	searchParams,
}: {
	searchParams: { email?: string };
}) {
	const email = searchParams.email || '';
	return <PasswordChangeModal email={email} />;
}
