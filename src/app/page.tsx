'use client';

import increment from './test';
import { useFormState } from 'react-dom';

export default function StatefulForm() {
	const [state, formAction] = useFormState(increment, 0);
	console.log(state);
	return (
		<form action={formAction}>
			<input type="text" name="test" className="border-2" />
			{state}
			<button>Increment</button>
		</form>
	);
}
