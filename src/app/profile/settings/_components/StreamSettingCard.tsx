import BaseButton from '@/common/components/Buttons/BaseButton';
import PasswordInput from '@/common/components/Inputs/PasswordInput';
import SettingCard from './SettingCard';

export default function StreamSettingCard() {
	return (
		<SettingCard title="스트림 설정">
			<div className="flex w-full items-center gap-8">
				<p className="w-1/12 text-lg font-semibold text-mainBlack">스트림 서버</p>
				<div className="flex gap-4">
					<p className="flex items-center text-mainBlack">rtmp://52.79.89.195/live</p>
					<BaseButton className="baseSubBtn h-10 text-nowrap px-2 text-lg font-medium">
						복사
					</BaseButton>
				</div>
			</div>
			<div className="flex w-full items-center gap-8">
				<p className="w-1/12 text-lg font-semibold text-mainBlack">스트림 키</p>
				<div className="flex w-full items-center gap-2">
					<PasswordInput defaultValue={'test'} />
					<BaseButton className="baseSubBtn h-12 text-nowrap px-2 text-lg font-medium">
						복사
					</BaseButton>
					<BaseButton className="basePrimaryBtn h-12 text-nowrap px-2 text-lg font-medium">
						재발급
					</BaseButton>
				</div>
			</div>
		</SettingCard>
	);
}
