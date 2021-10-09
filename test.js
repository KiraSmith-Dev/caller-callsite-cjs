import path from 'node:path';
import test from 'ava';
import fixture from './fixture.js';
import fixture2 from './fixture2.js';
import fixture3 from './fixture3.js';

test('main', t => {
	t.is(path.basename(fixture().getFileName()), 'test.js');
	t.is(path.basename(fixture2().getFileName()), 'test.js');
	t.is(path.basename(fixture3().getFileName()), 'test.js');
	t.is(path.basename(fixture3({depth: 1}).getFileName()), 'test.js');
	t.is(path.basename(fixture3({depth: 2}).getFileName()), 'fixture3.js');
	t.is(path.basename(fixture3({depth: 3}).getFileName()), 'fixture2.js');
	t.is(path.basename(fixture3({depth: 4}).getFileName()), 'fixture.js');
	t.is(path.basename(fixture3({depth: 5}).getFileName()), 'index.js');
	t.is(path.basename(fixture({recentFirst: true}).getFileName()), 'fixture.js');
	t.is(path.basename(fixture2({recentFirst: true}).getFileName()), 'fixture.js');
	t.is(path.basename(fixture3({recentFirst: true}).getFileName()), 'fixture.js');
	t.is(path.basename(fixture3({recentFirst: true, depth: 1}).getFileName()), 'fixture.js');
	t.is(path.basename(fixture3({recentFirst: true, depth: 2}).getFileName()), 'fixture2.js');
	t.is(path.basename(fixture3({recentFirst: true, depth: 3}).getFileName()), 'fixture3.js');
	t.is(path.basename(fixture3({recentFirst: true, depth: 4}).getFileName()), 'fixture3.js');
	t.is(path.basename(fixture3({recentFirst: true, depth: 5}).getFileName()), 'test.js');
});
