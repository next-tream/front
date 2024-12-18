import Image from 'next/image';
import LiveStatusContainer from '@/common/components/LiveStatusContainer';

export default function MainVideo() {
	return (
		<div className="relative h-[500px] w-full rounded-2xl">
			<Image src="/images/main.png" alt="main" fill />
			<div className="absolute left-3 top-3 flex">
				<LiveStatusContainer textSize={true} watchingCount={986} />
			</div>
		</div>
	);
}
