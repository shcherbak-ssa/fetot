'use strict';

/*** imports [begin] ***/

const parseConnectionMessage = require('../components/parse-connection-message'),
	parseCloseMessage = require('../components/parse-close-message'),
	parseOthersMessage = require('../components/parse-others-message');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

async function messageParser(options) {
	switch( options.message.type ) {
		case 'connection':
			return await parseConnectionMessage(options);
		case 'close':
			return await parseCloseMessage(options);
		case 'others': // need to fix
			return await parseOthersMessage(options);
		default:
			options.response({error: 'Invalid message type'});
	}
}

/*** exports [end] ***/

module.exports = messageParser;