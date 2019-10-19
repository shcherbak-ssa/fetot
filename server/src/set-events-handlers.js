'use strict';

/*** imports [begin] ***/

const {requestEventEmitter, connectionEventEmitter, messageEventEmitter,
	clientEventEmitter, responseEventEmitter} = require('./server-events-emitters'),
	
	requestRootHttpHandler = require('./events-handlers/request/request-root-http-handler'),
	requestFileHttpHandler = require('./events-handlers/request/request-file-http-handler'),
	
	connectionHttpHandler = require('./events-handlers/connection/connection-http-handler'),
	connectionMongodbHandler = require('./events-handlers/connection/connection-mongodb-handler'),
	
	messageHttpHandler = require('./events-handlers/message/message-http-handler'),
	messageWebSocketHandler = require('./events-handlers/message/message-web-socket-handler'),
	
	clientConnectionHandler = require('./events-handlers/client/client-connection-handler'),
	clientCheckTypeHandler = require('./events-handlers/client/client-check-type-handler'),
	clientMessageHandler = require('./events-handlers/client/client-message-handler'),
	clientChangeModuleHandler = require('./events-handlers/client/client-change-module-handler'),
	
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
		.on('connection-http', connectionHttpHandler)
		.on('connection-mongodb', connectionMongodbHandler)
}
async function setMessageEventsHandlers() {
	messageEventEmitter
		.on('message-http', messageHttpHandler)
		.on('message-web-socket', messageWebSocketHandler)
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