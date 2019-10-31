'use strict';

/*** imports [begin] ***/

const Events = require('events');

const connectionHandler = require('./events-handlers/connection-handler');
const connectionMongodbHandler = require('./events-handlers/connection-mongodb-handler');
const connectionEventSourceHandler = require('./events-handlers/connection-event-source-handler');

/*** imports [end] ***/
/*** init [begin] ***/

class ServerEvents extends Events {}
const serverEvents = new ServerEvents();

/*** init [end] ***/
/*** exports [begin] ***/

async function initServerEvents() {
	/* connection events */
	serverEvents
		.on('connection-event-source', connectionEventSourceHandler)
		.on('connection-mongodb', connectionMongodbHandler)
		.on('connection', connectionHandler);
}

/*** exports [end] ***/

module.exports = {
	serverEvents,
	initServerEvents
};