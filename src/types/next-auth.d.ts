// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { TJwtPayload } from '@/common/types/jwt.interface';
import { DefaultJWT } from 'next-auth/jwt';
import { DefaultUser, Account as NextAuthAccount } from 'next-auth';

declare module 'next-auth' {
	interface Session {
		sessionId: string;
		user: TJwtPayload;
		accessToken?: string;
		expires: ISODateString;
		isTag: boolean;
	}
}

declare module 'next-auth/jwt' {
	interface JWT extends DefaultJWT {
		sessionId: string;
		accessToken?: string;
		isTag: boolean;
	}
}

declare module 'next-auth' {
	interface Account extends NextAuthAccount {
		backendAccessToken?: string;
		sessionId: string;
		isTag: boolean;
	}
}

declare module 'next-auth' {
	interface User extends DefaultUser {
		backendAccessToken?: string;
		isTag: boolean;
	}
}
