'use strict';

/*** imports [begin] ***/

const parseMessage = require('./parse-message');

/*** imports [end] ***/
/*** exports [begin] ***/

async function parseInputMessage(options) {
	return await parseMessage(options);
}

/*** exports [end] ***/

module.exports = parseInputMessage;