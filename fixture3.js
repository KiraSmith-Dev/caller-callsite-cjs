import fixture2 from './fixture2.js';

function foo({depth = 0, recentFirst = false} = {}) {
	return fixture2({depth, recentFirst});
}

export default function fixture3({depth = 0, recentFirst = false} = {}) {
	return foo({depth, recentFirst});
}
