'use strict';

const eventsMap = new Map();

/*** exports [begin] ***/

async function addEventEmitter(emitter) {
	let handleEvent = {
		handleEvent(event) {
			eventsHandlers.get(event.detail.worker)(...event.detail);
		}
	};
	
	document.addEventListener(moduleName, handleEvent);
	eventsMap.set(moduleName, handleEvent);
}
async function emitEventHandler(moduleName, ...args) {
	document.dispatchEvent( new CustomEvent(moduleName, {detail: args}) )
}
async function removeEventHandler(moduleName) {
	let handleEvent = eventsMap.get(moduleName);
	document.removeEventListener(moduleName, handleEvent);
}

/*** exports [end] ***/

export default {
	add: addEventHandler,
	emit: emitEventHandler,
	remove: removeEventHandler
}