import IconLeadingButton from '@/common/components/Buttons/IconLeadingButton';
import { HeartIcon } from '@heroicons/react/24/outline';

export default function LikeButton() {
	return (
		<IconLeadingButton
			icon={<HeartIcon className="size-7" />}
			className="iconLeadingPrimaryBtn h-10"
		>
			좋아요
		</IconLeadingButton>
	);
}
