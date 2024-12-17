import Layout from '@/common/layouts';
import './globals.css';

import { IChildrenProps } from '@/common/types/children.interface';

export default function RootLayout({ children }: IChildrenProps) {
	return (
		<html lang="ko">
			<body className="bg-mainBlack text-mainWhite m-0 box-border">
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
