'use strict';

/*** imports [begin] ***/

const messageValidation = require('./src/message-validation'),
	messageParser = require('./src/message-parser'),
	{serverEvents} = require('../../server-events');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

async function connectionHandler(options) {
	let errors = await messageValidation(options.message);
	if( errors ) return options.response(errors);
	
	let clientOptions = await messageParser(options);
	serverEvents.emit('client-event', clientOptions);
}

/*** exports [end] ***/

module.exports = {
	connectionHandler
};