import KakaoAuthModal from '@/common/components/Modals/KakaoAuthModal';

export default function KakaoAuthPage({ searchParams }: { searchParams: { email?: string } }) {
	const email = searchParams.email || '';
	return <KakaoAuthModal authenticationTime={300} email={email} />;
}
