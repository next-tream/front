import { Session } from 'next-auth';

export interface IChildrenProps {
	children: React.ReactNode;
}

export interface ILayoutProps extends IChildrenProps {
	session: Session;
	modal?: React.ReactNode;
}
