import IconLeadingButton from '@/common/components/Buttons/IconLeadingButton';
import { PlusSquareIcon } from 'lucide-react';

export default function FollowingButton() {
	return (
		<IconLeadingButton
			icon={<PlusSquareIcon className="size-7" />}
			className="iconLeadingSubBtn h-10"
		>
			팔로잉
		</IconLeadingButton>
	);
}
