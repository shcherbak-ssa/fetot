'use strict';

/*** imports [begin] ***/

import eventsEmitterWorker from './events-emitter';

import importEventHandler from './events-handlers/import-event-handler';
import sendOutputMessageEventHandler from './events-handlers/send-output-message-event-handler';

/*** imports [end] ***/
/*** init [begin] ***/

const fetotEventEmitter = eventsEmitterWorker.createEmitter('fetot');

/*** init [end] ***/
/*** exports [begin] ***/

async function initFetotEvents() {
	fetotEventEmitter
		.on('send-output-message', sendOutputMessageEventHandler)
		.on('import', importEventHandler)
}

/*** exports [end] ***/

export default initFetotEvents;