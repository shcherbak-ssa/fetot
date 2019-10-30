'use strict';

/*** imports [begin] ***/

const parseConnectionMessage = require('../components/parse-connection-message');
const parseCloseMessage = require('../components/parse-close-message');
const parseMessageMessage = require('../components/parse-message-message');

/*** imports [end] ***/
/*** exports [begin] ***/

async function messageParser(options) {
	switch( options.message.type ) {
		case 'connection':
			await parseConnectionMessage(options);
			break;
		case 'close':
			await parseCloseMessage(options);
			break;
		case 'message':
			await parseMessageMessage(options);
	}
}

/*** exports [end] ***/

module.exports = messageParser;