'use strict';

/*** imports [begin] ***/

const connectionWorker = require('../components/connection-worker');
const closeWorker = require('../components/close-worker');
const messageWorker = require('../components/message-worker');

/*** imports [end] ***/
/*** exports [begin] ***/

async function messageParser(options) {
	switch( options.message.type ) {
		case 'connection':
			await connectionWorker(options);
			break;
		case 'close':
			await closeWorker(options);
			break;
		case 'message':
			await messageWorker(options);
	}
}

/*** exports [end] ***/

module.exports = messageParser;