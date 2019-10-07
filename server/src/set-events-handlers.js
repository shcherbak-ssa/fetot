'use strict';

const rootHttpRequestHandler = require('./events-handlers/root-http-request-handler'),
	
	{ connectionEventEmitter,
		messageEventEmitter,
		clientEventEmitter } = require('./server-events-emitters');

async function setConnectionEventsHandlers() {
	connectionEventEmitter
		.on('root-http-request', rootHttpRequestHandler)
		.on('file-http-request', (url, response) => {
		
		})
		.on('connection-http-request', (request, response) => {
		
		})
		.on('connection-mongodb', (mongoClient) => {
		
		})
}
async function setMessageEventsHandlers() {
	messageEventEmitter
		.on('message-http-request', () => {
		
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