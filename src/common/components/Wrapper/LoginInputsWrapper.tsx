import { LOGIN_INPUTS } from '@/common/constants/input.const';
import TextInput from '@/common/components/Inputs/TextInput';

export default function LoginInputsWrapper() {
	return (
		<div className="flex flex-col gap-4">
			{LOGIN_INPUTS.map((el, index) => (
				<TextInput
					key={index}
					type={el.type}
					title={el.title}
					placeholder={el.placeholder}
				/>
			))}
		</div>
	);
}
