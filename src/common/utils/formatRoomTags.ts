import { tags } from '../constants/themeSelectionButton.const';

// best 코드
export const formatRoomTags = (roomTags: number[] | undefined) => {
	const formatRoomTags = roomTags?.map((el) => tags[el - 1].name);

	return formatRoomTags?.join('/');
};
