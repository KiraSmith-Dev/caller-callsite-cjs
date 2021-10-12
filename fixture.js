const callerCallsite = require('./index.js');

function foo({depth = 0, recentFirst = false} = {}) {
	return callerCallsite({depth, recentFirst});
}

module.exports = function ({depth = 0, recentFirst = false} = {}) {
	return foo({depth, recentFirst});
};
