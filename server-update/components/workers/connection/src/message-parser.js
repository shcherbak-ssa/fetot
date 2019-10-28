'use strict';

/*** imports [begin] ***/

const parseConnectionMessage = require('../components/parse-connection-message');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

async function messageParser(options) {
	switch( options.message.type ) {
		case 'connection':
			return await parseConnectionMessage(options);
		case 'close':
		default:
			options.response({error: 'Invalid message type'});
	}
}

/*** exports [end] ***/

module.exports = messageParser;