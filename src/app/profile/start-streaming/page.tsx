'use client';

import Chat from './_components/Chat';
import PageTitle from '@/common/components/PageTitle';
import StartStreamingButton from '@/app/profile/start-streaming/_components/StartStreamingButton';
import SubInput from '@/app/profile/start-streaming/_components/SubInput';
import LivePlayer from '@/common/components/LivePlayer';
import useStartStreaming from './hook';
import TextTagButtonsWrapper from '@/common/components/Buttons/TextTagButtonsWrapper';

import { useToggle } from '@/common/hooks/useToggle';
import { useStreamingStateStore } from './_store/useStreamingStateStore';

export default function StartStreamingPage() {
	const { isToggle, onClickToggle } = useToggle(true);
	const { isStreaming } = useStreamingStateStore();
	const {
		roomId,
		selectedTags,
		onChangeNameHandler,
		onChangeContentHandler,
		onClickStartStreamingButtonHandler,
		onClickStopStreamingButtonHandler,
		onChangeTagHandler,
	} = useStartStreaming();

	const onClickButtonHandler = isStreaming
		? onClickStopStreamingButtonHandler
		: onClickStartStreamingButtonHandler;

	return (
		<div className="flex h-full w-full gap-2">
			<div
				className={`${isToggle ? 'w-2/3' : 'w-full'} scrollbar-none flexCol max-h-[calc(100vh-140px)] gap-3 overflow-scroll`}
			>
				<PageTitle title="LIVE STREAM" />
				<LivePlayer />
				<div className="flex items-center gap-6">
					<p className="text-nowrap text-xl font-bold">방송 제목</p>
					<SubInput placeholder="제목을 입력해 주세요." onChange={onChangeNameHandler} />
				</div>

				<div className="flex items-center gap-6">
					<p className="text-nowrap text-xl font-bold">방송 설명</p>
					<SubInput
						placeholder="설명을 입력해 주세요."
						onChange={onChangeContentHandler}
					/>
				</div>
				<div className="mt-3 text-nowrap text-xl font-bold">스트리밍 카테고리 선택</div>
				<TextTagButtonsWrapper
					selectedTags={selectedTags}
					onChangeTagHandler={onChangeTagHandler}
				/>
				<div className="mt-3 h-14">
					<StartStreamingButton
						title={`스트리밍 ${isStreaming ? '종료' : '시작'}`}
						onClick={onClickButtonHandler}
					/>
				</div>
			</div>
			<Chat roomId={roomId} isToggle={isToggle} onClickToggle={onClickToggle} />
		</div>
	);
}
