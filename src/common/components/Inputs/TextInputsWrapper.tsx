import { ITextInputsWrapperProps } from '@/common/types/textInput.interface';
import TextInput from '@/common/components/Inputs/TextInput';
import MODAL_CONFIG from '@/common/constants/modal.const';

export default function TextInputsWrapper({ type, errors }: ITextInputsWrapperProps) {
	const { inputs } = MODAL_CONFIG[type];

	return (
		<div className="flexCol gap-4">
			{inputs.map((element, index) => (
				<TextInput
					name={element.name}
					key={index}
					type={element.type}
					title={element.title}
					placeholder={element.placeholder}
					errors={errors}
				/>
			))}
		</div>
	);
}
