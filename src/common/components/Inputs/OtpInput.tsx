import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

export default function OtpInput() {
	return (
		<InputOTP maxLength={6}>
			<InputOTPGroup>
				{new Array(6).fill('').map((_, index) => (
					<InputOTPSlot key={index} index={index} className="size-14" />
				))}
			</InputOTPGroup>
		</InputOTP>
	);
}
