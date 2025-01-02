import React, { MouseEvent } from 'react';
import TextInput from './TextInput';
import { ITextInputProps } from '@/common/types/input.interface';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useToggle } from '@/common/hooks/useToggle';

export default function PasswordInput({
	title,
	errors = {},
	isWhiteTitle,
	...rest
}: ITextInputProps) {
	const { isToggle, onClickToggle } = useToggle(true);
	const onClickTrailingIconHandler = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		onClickToggle();
	};

	const icon = isToggle ? (
		<EyeIcon className="absolute right-3 top-3 size-6 text-lightGray" />
	) : (
		<EyeSlashIcon className="absolute right-3 top-3 size-6 text-lightGray" />
	);

	const type = isToggle ? 'password' : 'text';

	return (
		<TextInput
			name={rest.name}
			type={type}
			title={title}
			placeholder={rest.placeholder}
			trailingIcon={icon}
			onClickTrailingIconHandler={onClickTrailingIconHandler}
		/>
	);
}
