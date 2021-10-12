const fixture2 = require('./fixture2.js');

function foo({depth = 0, recentFirst = false} = {}) {
	return fixture2({depth, recentFirst});
}

module.exports = function ({depth = 0, recentFirst = false} = {}) {
	return foo({depth, recentFirst});
};
