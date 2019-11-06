'use strict';

/*** imports [begin] ***/

import eventsEmitterWorker from './events-emitter';

import sendOutputMessageEventHandler from './events-handlers/send-output-message-event-handler';

/*** imports [end] ***/
/*** init [begin] ***/

const fetotEventEmitter = eventsEmitterWorker.createEmitter('fetot');

/*** init [end] ***/
/*** exports [begin] ***/

async function initFetotEvents() {
	fetotEventEmitter.on('send-output-message', sendOutputMessageEventHandler)
}

/*** exports [end] ***/

export default initFetotEvents;