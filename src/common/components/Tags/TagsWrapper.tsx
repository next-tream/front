import React from 'react';
import TagContainer from '@/common/components/Tags/TagContainer';

export default function TagsWrapper({ tags }: { tags: string }) {
	const tagsArray = tags.split('/');
	return (
		<div className="flex gap-2">
			{tagsArray.map((element, index) => (
				<TagContainer key={index} name={element} />
			))}
		</div>
	);
}
