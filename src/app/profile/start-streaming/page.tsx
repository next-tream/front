'use client';

import Chat from './_components/Chat';
import PageTitle from '@/common/components/PageTitle';
import Screen from '@/app/profile/start-streaming/_components/Screen';
import StartStreamingButton from '@/app/profile/start-streaming/_components/StartStreamingButton';
import SubInput from '@/app/profile/start-streaming/_components/SubInput';
import { useToggle } from '@/common/hooks/useToggle';
import LivePlayer from '@/common/components/LivePlayer';

export default function StartStreamingPage() {
	const { isToggle, onClickToggle } = useToggle(true);

	return (
		<div className="flex h-full w-full gap-2">
			<div className={`${isToggle ? 'w-2/3' : 'w-[96%]'} flex flex-col gap-2`}>
				<PageTitle title="LIVE STREAM" />
				{/* <Screen isLive={false} /> */}
				<LivePlayer />
				<SubInput placeholder="스트리밍 제목" />
				<div>방송 주제 태그 선택</div>
				{/* <TagSelectionButtonsWrapper isTag={true} /> */}
				<SubInput placeholder="스트리밍 설명" />
				<StartStreamingButton />
			</div>
			<Chat isToggle={isToggle} onClickToggle={onClickToggle} />
		</div>
	);
}
