'use strict';

/*** imports [begin] ***/

const Events = require('events'),
	
	connectionHandler = require('./events-handlers/connection-handler'),
	mongodbConnectionHandler = require('./events-handlers/mongodb-connection-handler');

/*** imports [end] ***/
/*** init [begin] ***/

class ServerEvents extends Events {}
const serverEvents = new ServerEvents();

/*** init [end] ***/
/*** exports [begin] ***/

async function initServerEvents() {
	serverEvents
		.on('mongodb-connection', mongodbConnectionHandler)
		.on('connection', connectionHandler)
}

/*** exports [end] ***/

module.exports = {
	serverEvents,
	initServerEvents
};