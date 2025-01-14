'use client';

import { useToggle } from '@/common/hooks/useToggle';

import Chat from './_components/Chat';
import PageTitle from '@/common/components/PageTitle';
import StartStreamingButton from '@/app/profile/start-streaming/_components/StartStreamingButton';
import SubInput from '@/app/profile/start-streaming/_components/SubInput';
import LivePlayer from '@/common/components/LivePlayer';
import useStartStreaming from './hook';
import { useStreamingStateStore } from './_store/useStreamingStateStore';

export default function StartStreamingPage() {
	const { isToggle, onClickToggle } = useToggle(true);
	const { isStreaming } = useStreamingStateStore();
	const { roomId, onClickStartStreamingButtonHandler, onClickStopStreamingButtonHandler } =
		useStartStreaming();

	const onClickButtonHandler = isStreaming
		? onClickStopStreamingButtonHandler
		: onClickStartStreamingButtonHandler;

	return (
		<div className="flex h-full w-full gap-2">
			<div className={`${isToggle ? 'w-2/3' : 'w-[96%]'} flex flex-col gap-2`}>
				<PageTitle title="LIVE STREAM" />
				<LivePlayer />
				<SubInput placeholder="스트리밍 제목" />
				<div>방송 주제 태그 선택</div>
				{/* <TagSelectionButtonsWrapper isTag={true} /> */}
				<SubInput placeholder="스트리밍 설명" />
				<StartStreamingButton
					title={`스트리밍 ${isStreaming ? '종료' : '시작'}`}
					onClick={onClickButtonHandler}
				/>
			</div>
			<Chat roomId={roomId} isToggle={isToggle} onClickToggle={onClickToggle} />
		</div>
	);
}
