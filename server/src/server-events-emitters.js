'use strict';

/*** imports [begin] ***/

const Events = require('events');

/*** imports [end] ***/
/*** init [begin] ***/

class ServerEventEmitter extends Events {}

/*** init [end] ***/
/*** exports [begin] ***/

let eventsEmitters = Object.fromEntries(
	['request', 'connection', 'message', 'client', 'response'].map((item) => {
		return [item, new ServerEventEmitter()]
	})
);

/*** exports [end] ***/

module.exports = {
	requestEventEmitter: eventsEmitters.request,
	connectionEventEmitter: eventsEmitters.connection,
	messageEventEmitter: eventsEmitters.message,
	clientEventEmitter: eventsEmitters.client,
	responseEventEmitter: eventsEmitters.response
};