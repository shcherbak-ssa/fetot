'use strict';

const Events = require('events');

class ServerEventEmitter extends Events {}

let eventsEmitters = Object.fromEntries(
	['connection', 'message', 'client', 'response'].map((item) => {
		return [item, new ServerEventEmitter()]
	})
);

module.exports = {
	connectionEventEmitter: eventsEmitters.connection,
	messageEventEmitter: eventsEmitters.message,
	clientEventEmitter: eventsEmitters.client,
	responseEventEmitter: eventsEmitters.response
};