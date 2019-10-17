'use strict';

/*** imports [begin] ***/

const {connectionEventEmitter, messageEventEmitter,
	clientEventEmitter, responseEventEmitter} = require('./server-events-emitters'),
	
	httpRootRequestHandler = require('./connection-events-handlers/http-root-request-handler'),
	httpFileRequestHandler = require('./connection-events-handlers/http-file-request-handler'),
	httpConnectionHandler = require('./connection-events-handlers/http-connection-handler'),
	mongodbConnectionHandler = require('./connection-events-handlers/mongodb-connection-handler'),
	
	httpMessageHandler = require('./message-events-handlers/http-message-handler'),
	webSocketMessageHandler = require('./message-events-handlers/web-socket-message-handler'),
	
	clientConnectionHandler = require('./client-events-handlers/client-connection-handler'),
	clientCheckTypeHandler = require('./client-events-handlers/client-check-type-handler'),
	clientMessageHandler = require('./client-events-handlers/client-message-handler'),
	clientChangeModuleHandler = require('./client-events-handlers/client-change-module-handler'),
	
	responseError404Handler = require('./response-events-handlers/response-error404-handler'),
	responseFileHandler = require('./response-events-handlers/response-file-handler'),
	responsePostRequestHandler = require('./response-events-handlers/response-post-request-handler'),
	responseWebSocketHandler = require('./response-events-handlers/response-web-socket-handler');

/*** imports [end] ***/
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
		.on('http-message', httpMessageHandler)
		.on('web-socket-message', webSocketMessageHandler)
}
async function setClientEventsHandlers() {
	clientEventEmitter
		.on('client-connection', clientConnectionHandler)
		.on('client-check-type', clientCheckTypeHandler)
		.on('client-message', clientMessageHandler)
		.on('client-change-mode', () => {})
		.on('client-change-module', clientChangeModuleHandler)
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