import React from 'react';
import TagContainer from '@/common/components/Tags/TagContainer';
import { ITagWrapperProps } from '@/common/types/tag.interface';

export default function TagsWrapper({ tags }: ITagWrapperProps) {
	return (
		<div className="flex gap-2">
			{tags.map((element, index) => (
				<TagContainer key={index} name={element} />
			))}
		</div>
	);
}
