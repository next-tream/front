import PasswordChangeModal from '@/common/components/Modals/PasswordChangeModal';

export default function PasswordChangePage({ searchParams }: { searchParams: { email?: string } }) {
	const email = searchParams.email || '';
	return <PasswordChangeModal email={email} />;
}
