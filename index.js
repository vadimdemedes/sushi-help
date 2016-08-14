'use strict';

function help(text) {
	return function * (next) {
		const hasHelpFlag = this.argv.indexOf('-h') >= 0 || this.argv.indexOf('--help') >= 0;

		if (hasHelpFlag) {
			console.log(text);
			return;
		}

		yield * next;
	};
}

module.exports = help;
