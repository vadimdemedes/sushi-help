'use strict';

/**
 * Dependencies
 */

const sushi = require('sushi');
const help = require('./');
const test = require('ava');


/**
 * Tests
 */

test.cb('display help', t => {
	t.plan(1);

	console.log = function (str) {
		t.is(str, 'my help message');
		t.end();
	};

	let app = sushi();
	app.use(help('my help message'));
	app.run(['-h']);
});
