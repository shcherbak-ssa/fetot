'use strict';

const parseInputMessage = require('../../lib/parse-input-message');

/*** exports [begin] ***/

async function httpConnectionHandler(request, response) {
	let message = await parseInputMessage({type: 'post-message', request});
}

/*** exports [end] ***/

module.exports = httpConnectionHandler;