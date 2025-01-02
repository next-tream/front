export const parseCookie = (cookieString: string) => {
	const cookieParts = cookieString.split(';');
	const cookie: Record<string, string> = {};

	cookieParts.forEach((part) => {
		const [key, value] = part.split('=').map((v) => v.trim());
		if (key && value) {
			cookie[key] = value;
		}
	});

	return cookie;
};
