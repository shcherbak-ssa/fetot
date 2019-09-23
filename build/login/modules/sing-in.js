'use strict';

import websocket from 'fetot-js-modules/websocket';
import storage from 'fetot-js-modules/local-storage';

import checkInputValue from './src/check-input-value';

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
function singinMessageHandler(input, component) {
	return ({status, error}) => {
		if( status === 'error' ) return input.error = error;
		
		storage.setStorageItem('fetot-client-email', input.value);
		component.$emit('check-email')
	}
}

export default {
	worker: singinModuleWorker,
	messageHandler: singinMessageHandler
};