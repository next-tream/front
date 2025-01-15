import './globals.css';

import AuthContext from '@/common/components/AuthContext';
import { ILayoutProps } from '@/common/types/children.interface';
import Layout from '@/common/layouts';
import { Toaster } from '@/components/ui/toaster';

export default function RootLayout({ children, session, modal }: ILayoutProps) {
	return (
		<html lang="ko">
			<head>
				<link rel="icon" href="https://mlklrorozog6.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://nextreme.games/wp-content/uploads/2024/03/logo-mark.svg" />
			</head>
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
