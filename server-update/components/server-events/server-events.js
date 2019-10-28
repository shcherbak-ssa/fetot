'use strict';

/*** imports [begin] ***/

const Events = require('events'),
	
	connectionHandler = require('./events-handlers/connections/connection-handler'),
	connectionMongodbHandler = require('./events-handlers/connections/connection-mongodb-handler'),
	connectionEventSourceHandler = require('./events-handlers/connections/connection-event-source-handler'),

	clientEventHandler = require('./events-handlers/client-event-handler');

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
	
	/* client events */
	serverEvents.on('client-event', clientEventHandler);
}

/*** exports [end] ***/

module.exports = {
	serverEvents,
	initServerEvents
};