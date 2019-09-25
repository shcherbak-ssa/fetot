'use strict';

import websocket from 'fetot-js-modules/websocket';
import storage from 'fetot-js-modules/local-storage';
import eventsHandlers from 'fetot-js-modules/events-handlers';
import checkInputValue from 'fetot-js-modules/check-input-value';

function singinModuleWorker(input) {
	let mailValue = checkInputValue(input, 'mail');
	if( !mailValue ) return;
	
	websocket.sendMessage({
		type: 'message',
		message: {
			type: 'sing-in/sing-in',
			data: {
				email: mailValue
			}
		}
	})
}
function singinMessageHandlers(input) {
	return {
		'sing-in': {
			error({error}) {
				input.error = error;
			},
			success() {
				storage.setStorageItem('fetot-client-email', input.value);
				eventsHandlers.emit('check-email')
			}
		}
	}
}

export default {
	worker: singinModuleWorker,
	messageHandlers: singinMessageHandlers
};