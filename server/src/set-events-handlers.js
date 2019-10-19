'use strict';

/*** imports [begin] ***/

const {requestEventEmitter, connectionEventEmitter, messageEventEmitter,
	clientEventEmitter, responseEventEmitter} = require('./server-events-emitters'),
	
	requestRootHttpHandler = require('./events-handlers/request/request-root-http-handler'),
	requestFileHttpHandler = require('./events-handlers/request/request-file-http-handler'),
	
	httpConnectionHandler = require('./connection-events-handlers/http-connection-handler'),
	mongodbConnectionHandler = require('./connection-events-handlers/mongodb-connection-handler'),
	
	httpMessageHandler = require('./message-events-handlers/http-message-handler'),
	webSocketMessageHandler = require('./message-events-handlers/web-socket-message-handler'),
	
	clientConnectionHandler = require('./client-events-handlers/client-connection-handler'),
	clientCheckTypeHandler = require('./client-events-handlers/client-check-type-handler'),
	clientMessageHandler = require('./client-events-handlers/client-message-handler'),
	clientChangeModuleHandler = require('./client-events-handlers/client-change-module-handler'),
	
	responseError404Handler = require('./events-handlers/response/response-error404-handler'),
	responseFileHandler = require('./events-handlers/response/response-file-handler'),
	responsePostRequestHandler = require('./events-handlers/response/response-post-request-handler'),
	responseWebSocketHandler = require('./events-handlers/response/response-web-socket-handler');

/*** imports [end] ***/
/*** exports [begin] ***/

async function setRequestEventsHandlers() {
	requestEventEmitter
		.on('request-root-http', requestRootHttpHandler)
		.on('request-file-http', requestFileHttpHandler)
}
async function setConnectionEventsHandlers() {
	connectionEventEmitter
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
	setRequestEventsHandlers,
	setConnectionEventsHandlers,
	setMessageEventsHandlers,
	setClientEventsHandlers,
	setResponseEventsHandlers
};