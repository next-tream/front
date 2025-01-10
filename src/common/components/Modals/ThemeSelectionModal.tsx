'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import BaseModal from '@/common/components/Modals/BaseModal';
import TagSelectionButtonsWrapper from '@/common/components/Buttons/TagSelectionButtonsWrapper';
import useTagSelectionButton from '@/common/hooks/useThemeSelectionButton';

export default function ThemeSelectionModal() {
	const router = useRouter();
	const { data: session, update } = useSession();
	const { onChangeTagHandler, selectedTags } = useTagSelectionButton();

	const onClickMainButtonHandler = async () => {
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/tag`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${session?.accessToken ?? ''}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					tags: selectedTags,
				}),
			});

			if (response.ok && session) {
				await update({ ...session, isTag: true });
				router.push('/');
			}

			if (response.status === 401) {
				await fetch('/api/auth/reissue', { method: 'POST' });

				const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/tag`, {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${session?.accessToken ?? ''}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						tags: selectedTags,
					}),
				});

				if (response.ok && session) {
					await update({ ...session, isTag: true });
					router.push('/');
				}
			}
		} catch (error) {
			alert(`태그 선택 오류 발생: ${error}`);
		}
	};

	return (
		<BaseModal type="tagSelection" onMainButtonClick={onClickMainButtonHandler}>
			<TagSelectionButtonsWrapper
				selectedTags={selectedTags}
				onChangeTagHandler={onChangeTagHandler}
			/>
		</BaseModal>
	);
}
