export const splitByDotAndRenderParagraphs = (text: string) => {
	return text.split('.').map((part, index) => part.trim() && <p key={index}>{part.trim()}.</p>);
};
