'use strict';

/*** imports [begin] ***/

const parseMessage = require('./parse-message'),
	validateMessage = require('./validate-message');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseInputMessage(options) {
	let message = await parseMessage(options);
	return await validateMessage(message);
}

/*** exports [end] ***/

module.exports = parseInputMessage;