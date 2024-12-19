import './globals.css';

import { IChildrenProps } from '@/common/types/children.interface';
import Layout from '@/common/layouts';

export default function RootLayout({ children }: IChildrenProps) {
	return (
		<html lang="ko">
			<body className="m-0 box-border h-screen w-screen bg-mainBlack px-5 text-mainWhite">
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
