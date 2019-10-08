'use strict';

const httpRootRequestHandler = require('./connection-events-handlers/http-root-request-handler'),
	httpFileRequestHandler = require('./connection-events-handlers/http-file-request-handler'),
	httpConnectionHandler = require('./connection-events-handlers/http-connection-handler'),
	mongodbConnectionHandler = require('./connection-events-handlers/mongodb-connection-handler'),
	
	responseError404Handler = require('./response-events-handlers/response-error404-handler'),
	responseFileHandler = require('./response-events-handlers/response-file-handler'),
	responsePostRequestHandler = require('./response-events-handlers/response-post-request-handler'),
	responseWebSocketHandler = require('./response-events-handlers/response-web-socket-handler'),
	
	{connectionEventEmitter, messageEventEmitter,
		clientEventEmitter, responseEventEmitter } = require('./server-events-emitters');

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
		.on('web-socket-message', (message, socket) => {})
}
async function setClientEventsHandlers() {

}
async function setResponseEventsHandlers() {
	responseEventEmitter
		.on('response-error-404', responseError404Handler)
		.on('response-file', responseFileHandler)
		.on('response-post-request', responsePostRequestHandler)
		.on('response-web-socket', responseWebSocketHandler)
}

/*** exports [end] ***/

module.exports = {
	setConnectionEventsHandlers,
	setMessageEventsHandlers,
	setClientEventsHandlers,
	setResponseEventsHandlers
};