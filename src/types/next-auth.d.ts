// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { TJwtPayload } from '@/common/types/jwt.interface';

declare module 'next-auth' {
	interface Session {
		user: TJwtPayload;
		accessToken?: string | null;
		expires: ISODateString;
	}
}
