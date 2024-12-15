import { IProfileEditButtonProps } from '@/common/types/children.interface';

const buttonPropsObject = {
	primary: {
		style: 'h-10 w-[120px] rounded-3xl text-xl font-semibold text-white flex justify-center items-center bg-main',
	},
	sub: {
		style: 'h-10 w-[120px] border border-solid border-main rounded-3xl text-xl font-semibold text-main flex justify-center items-center bg-white',
	},
};

export default function ProfileEditButton({ style, children }: IProfileEditButtonProps) {
	return <button className={buttonPropsObject[style].style}>{children}</button>;
}
