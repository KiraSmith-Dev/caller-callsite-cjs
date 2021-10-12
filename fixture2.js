const fixture = require('./fixture.js');

module.exports = function ({depth = 0, recentFirst = false} = {}) {
	return fixture({depth, recentFirst});
};
