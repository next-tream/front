import IconLeadingButton from '@/common/components/Buttons/IconLeadingButton';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export default function OtherMenuButton() {
	return (
		<IconLeadingButton
			icon={<EllipsisHorizontalIcon className="size-7" />}
			className="center size-10 rounded-full bg-darkGray"
		></IconLeadingButton>
	);
}
