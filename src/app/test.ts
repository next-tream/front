'use server';
export default async function increment(previousState, formData) {
	const test = formData.get('test');
	console.log(`test: ${test}`);
	return previousState + 1;
}
