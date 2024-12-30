// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { TJwtPayload } from '@/common/types/jwt.interface';

declare module 'next-auth' {
	interface User {
		accessToken: string;
	}
	interface Session {
		user: TJwtPayload;
		accessToken: string;
		expires: ISODateString;
	}
}

export declare module '@auth/core/jwt' {
	interface JWT {
		accessToken: string;
	}
}
