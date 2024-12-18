import { ITextInputsWrapperProps } from '@/common/types/textInput.interface';
import TextInput from '@/common/components/Inputs/TextInput';
import { modalConfig } from '@/common/constants/modal.const';

export default function TextInputsWrapper({ type }: ITextInputsWrapperProps) {
	const { inputs } = modalConfig[type];

	return (
		<div className="flex flex-col gap-4">
			{inputs.map((element, index) => (
				<TextInput
					key={index}
					type={element.type}
					title={element.title}
					placeholder={element.placeholder}
				/>
			))}
		</div>
	);
}
