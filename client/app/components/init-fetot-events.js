'use strict';

/*** imports [begin] ***/

import OutputMessage from './services/output-message';
import eventsEmitterWorker from './events-emitter';

import sendOutputMessageEventHandler from './events-handlers/send-output-message-event-handler';

/*** imports [end] ***/
/*** init [begin] ***/

window.addEventListener("unload", function() {
	let message = new OutputMessage({messageType: 'close'}).getMessage();
	navigator.sendBeacon('/', JSON.stringify(message));
}, false);

const fetotEventEmitter = eventsEmitterWorker.createEmitter('fetot');

/*** init [end] ***/
/*** exports [begin] ***/

function initFetotEvents() {
	fetotEventEmitter.on('send-output-message', sendOutputMessageEventHandler)
}

/*** exports [end] ***/

export default initFetotEvents;