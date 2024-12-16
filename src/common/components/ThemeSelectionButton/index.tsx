'use client';

import { IThemesProps } from '@/common/types/children.interface';
import { useState } from 'react';

export default function ThemeSelectionButton() {
	const [selectedThemes, setSelectedThemes] = useState<string[]>([]);

	const onChange = (id: string, checked: boolean) => {
		if (checked) {
			if (selectedThemes.length < 5) {
				setSelectedThemes((prev) => [...prev, id]);
			}
		} else {
			setSelectedThemes((prev) => prev.filter((theme) => theme !== id));
		}
	};

	const themes: IThemesProps[] = [
		{ id: 'cook', name: '요리', icon: '🧑🏻‍🍳' },
		{ id: 'game', name: '게임', icon: '🎮' },
		{ id: 'eat', name: '먹방', icon: '🍴' },
		{ id: 'education', name: '교육', icon: '🧑🏻‍🎓' },
		{ id: 'science', name: '과학 기술', icon: '🔭' },
		{ id: 'sports', name: '스포츠', icon: '⚽️' },
		{ id: 'travel', name: '여행', icon: '✈️' },
		{ id: 'coding', name: '코딩', icon: '🧑🏻‍💻' },
		{ id: 'pet', name: '애완 동물', icon: '🐾' },
		{ id: 'beauty', name: '뷰티', icon: '💄' },
		{ id: 'music', name: '음악', icon: '🎵' },
		{ id: 'exercise', name: '운동', icon: '🏋🏻' },
	];

	return (
		<div className="grid w-96 grid-cols-3 gap-x-4 gap-y-3">
			{themes.map((theme) => {
				const isSelected = selectedThemes.includes(theme.id);
				return (
					<label
						key={theme.id}
						className={`flex h-[62px] w-32 flex-col items-center justify-center rounded-xl border border-solid ${
							isSelected
								? 'bg-main border-main text-mainWhite'
								: 'border-lightGray text-subBlack bg-mainWhite'
						}`}
					>
						<input
							className="hidden"
							type="checkbox"
							id={theme.id}
							checked={isSelected}
							onChange={(e) => onChange(theme.id, e.target.checked)}
						/>
						<div className="text-2xl">{theme.icon}</div>
						<p className="text-sm font-semibold">{theme.name}</p>
					</label>
				);
			})}
		</div>
	);
}
