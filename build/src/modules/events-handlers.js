'use strict';

function addEventsHandlers(eventsHandlers) {
	for( let [event, handler] of Object.entries(eventsHandlers) )
		document.addEventListener(event, (event) => handler(...event.detail));
}
function emitEventListener(event, ...args) {
	document.dispatchEvent(new CustomEvent(event, {
		detail: args
	}))
}

export default {
	add: addEventsHandlers,
	emit: emitEventListener
}