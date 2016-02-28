'use strict';

/**
 * Help message middleware for Sushi
 */

function help (message) {
	return function (req, next) {
		var isHelp = req.args.help || req.args.h;

		if (isHelp) {
			console.log(message);
			return;
		}

		next();
	};
}


/**
 * Expose middleware
 */

module.exports = help;
