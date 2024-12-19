'use client';

import Screen from '@/common/components/screen';
import Chat from '@/common/components/Chat/Chat';
import { useToggle } from '@/common/hooks/useToggle';
import PageTitle from '@/common/components/PageTitle';
import SubInput from '@/common/components/Inputs/SubInput';
import ThemeSelectionButtonsWrapper from '@/common/components/Buttons/ThemeSelectionButtonWrapper';
import StartStreamingButton from '@/common/components/Buttons/StartStreamingButton';

export default function startStreamingPage() {
	const { isToggle, onClickToggle } = useToggle(true);

	return (
		<div className="flex h-full w-full gap-2">
			<div className={`${isToggle ? 'w-2/3' : 'w-[96%]'} flex flex-col gap-2`}>
				<PageTitle title="LIVE STREAM" />
				<Screen isLive={false} />
				<SubInput placeholder="스트리밍 제목" />
				<div>방송 주제 태그 선택</div>
				<ThemeSelectionButtonsWrapper isTag={true} />
				<SubInput placeholder="스트리밍 설명" />
				<StartStreamingButton />
			</div>
			<Chat isToggle={isToggle} onClickToggle={onClickToggle} />
		</div>
	);
}
