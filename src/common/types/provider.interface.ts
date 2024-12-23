import { Session } from 'next-auth';
import { IChildrenProps } from './children.interface';

export interface IAuthContextProps extends IChildrenProps {
	session: Session;
}
