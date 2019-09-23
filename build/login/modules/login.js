'use strict';

import websocket from 'fetot-js-modules/websocket';
import storage from 'fetot-js-modules/local-storage';

import checkInputValue from './src/check-input-value';

function loginModuleWorker(inputs) {
	let mailValue = checkInputValue(inputs.mail, 'mail');
	if( !mailValue ) return;
	
	let passwordValue = checkInputValue(inputs.password, 'password');
	if( !passwordValue ) return;
	
	websocket.sendMessage({
		type: 'message',
		message: {
			type: 'login/log-in',
			data: {
				email: mailValue,
				password: passwordValue
			}
		}
	});
}
function loginMessageHandler(message) {
	console.log(message)
}

export default {
	worker: loginModuleWorker,
	messageHandler: loginMessageHandler
}