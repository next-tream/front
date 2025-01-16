import { tags } from '../constants/themeSelectionButton.const';

export const formatRoomTags = (roomTags: number[] | undefined) => {
	const formatRoomTags = roomTags?.map((el) => tags[el - 1].name);

	return formatRoomTags?.join('/');
};
