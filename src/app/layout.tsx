import './globals.css';

import Layout from '@/common/layouts';
import SessionProviderWrapper from '@/common/components/AuthContext';
import { IAuthContextProps } from '@/common/types/provider.interface';

export default function RootLayout({ children, session }: IAuthContextProps) {
	return (
		<html lang="ko">
			<body className="m-0 box-border h-screen w-screen bg-mainBlack px-5 text-mainWhite">
				<SessionProviderWrapper session={session}>
					<Layout>{children}</Layout>
				</SessionProviderWrapper>
			</body>
		</html>
	);
}
