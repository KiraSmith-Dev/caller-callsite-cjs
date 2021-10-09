import fixture from './fixture.js';

export default function fixture2({depth = 0, recentFirst = false} = {}) {
	return fixture({depth, recentFirst});
}
