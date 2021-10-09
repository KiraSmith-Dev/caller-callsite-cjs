import callsites from 'callsites';

export default function callerCallsite({depth = 0, recentFirst = false} = {}) {
	const callers = [];
	const callerFileSet = new Set();

	for (const callsite of callsites()) {
		const fileName = callsite.getFileName();
		const hasReceiver = callsite.getTypeName() !== null && fileName !== null;

		if (recentFirst) {
			callers.push(callsite);
		} else if (!callerFileSet.has(fileName)) {
			callerFileSet.add(fileName);
			callers.unshift(callsite);
		}

		if (hasReceiver) {
			return callers[depth + (recentFirst ? 1 : 0)];
		}
	}
}
