import './globals.css';

import Layout from '@/common/layouts';
import AuthContext from '@/common/components/AuthContext';
import { ILayoutProps } from '@/common/types/children.interface';
import { Toaster } from '@/components/ui/toaster';

export default function RootLayout({ children, session, modal }: ILayoutProps) {
	return (
		<html lang="ko">
			<body className="m-0 box-border h-screen w-screen bg-mainBlack px-5 text-mainWhite">
				<AuthContext session={session}>
					{modal}
					<Layout>
						{children}
						<Toaster />
					</Layout>
				</AuthContext>
			</body>
		</html>
	);
}
