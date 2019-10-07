'use strict';

const httpRootRequestHandler = require('./events-handlers/http-root-request-handler'),
	httpFileRequestHandler = require('./events-handlers/http-file-request-handler'),
	
	httpConnectionHandler = require('./events-handlers/http-connection-handler'),
	mongodbConnectionHandler = require('./events-handlers/mongodb-connection-handler'),
	
	{connectionEventEmitter, messageEventEmitter, clientEventEmitter} = require('./server-events-emitters');

/*** exports [begin] ***/

async function setConnectionEventsHandlers() {
	connectionEventEmitter
		.on('http-root-request', httpRootRequestHandler)
		.on('http-file-request', httpFileRequestHandler)
		
		.on('http-connection', httpConnectionHandler)
		.on('mongodb-connection', mongodbConnectionHandler)
}
async function setMessageEventsHandlers() {
	messageEventEmitter
		.on('http-message', (request, response) => {})
		.on('message-ws-request', (message, socket) => {})
}
async function setClientEventsHandlers() {

}

/*** exports [end] ***/

module.exports = {
	setConnectionEventsHandlers,
	setMessageEventsHandlers,
	setClientEventsHandlers
};