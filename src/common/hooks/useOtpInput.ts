'use client';

import { useState } from 'react';

export default function useOtpInput() {
	const [otpCode, setOtpCode] = useState('');

	const onChangeOtpHandle = (value: string) => {
		setOtpCode(value);
	};

	return { otpCode, onChangeOtpHandle };
}
