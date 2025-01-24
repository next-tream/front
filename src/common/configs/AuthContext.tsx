'use client';

import { SessionProvider } from 'next-auth/react';
import { IAuthContextProps } from '@/common/types/provider.interface';

export default function AuthContext({ session, children }: IAuthContextProps) {
	return <SessionProvider session={session}>{children}</SessionProvider>;
}
