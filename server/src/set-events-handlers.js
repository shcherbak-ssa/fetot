'use strict';

const httpRootRequestHandler = require('./events-handlers/http-root-request-handler'),
	httpFileRequestHandler = require('./events-handlers/http-file-request-handler'),
	
	{connectionEventEmitter, messageEventEmitter, clientEventEmitter} = require('./server-events-emitters');

async function setConnectionEventsHandlers() {
	connectionEventEmitter
		.on('http-root-request', httpRootRequestHandler)
		.on('http-file-request', httpFileRequestHandler)
		.on('http-connection', (request, response) => {
		
		})
		.on('mongodb-connection', (mongoClient) => {
		
		})
}
async function setMessageEventsHandlers() {
	messageEventEmitter
		.on('http-message', () => {
		
		})
		.on('message-ws-request', (message, socket) => {
		
		})
}
async function setClientEventsHandlers() {

}

module.exports = {
	setConnectionEventsHandlers,
	setMessageEventsHandlers,
	setClientEventsHandlers
};