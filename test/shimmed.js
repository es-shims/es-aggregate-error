'use strict';

var index = require('../auto');

var test = require('tape');

var runTests = require('./builtin');

test('shimmed', function (t) {
	runTests(t);

	t.end();
});
