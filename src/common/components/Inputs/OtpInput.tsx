import { IOtpInputProps } from '@/common/types/input.interface';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

export default function OtpInput({ onChangeOtpHandle, otpCode, name }: IOtpInputProps) {
	return (
		<InputOTP maxLength={6} onChange={onChangeOtpHandle} value={otpCode} name={name}>
			<InputOTPGroup>
				{new Array(6).fill('').map((_, index) => (
					<InputOTPSlot key={index} index={index} className="size-14" />
				))}
			</InputOTPGroup>
		</InputOTP>
	);
}
