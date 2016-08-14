'use strict';

const sushi = require('sushi');
const test = require('ava');
const help = require('./');

test('display help', async t => {
	let loggedStr;

	const originalLog = console.log;
	console.log = function (str) {
		loggedStr = str;
	};

	const app = sushi();
	app.use(help('my help message'));

	await app.run(['--help']);

	t.is(loggedStr, 'my help message');

	console.log = originalLog;
});
