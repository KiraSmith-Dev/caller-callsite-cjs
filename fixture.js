import callerCallsite from './index.js';

function foo({depth = 0, recentFirst = false} = {}) {
	return callerCallsite({depth, recentFirst});
}

export default function fixture({depth = 0, recentFirst = false} = {}) {
	return foo({depth, recentFirst});
}
