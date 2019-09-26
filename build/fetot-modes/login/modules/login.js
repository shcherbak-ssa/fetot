'use strict';

import websocket from 'fetot-js-modules/websocket';
import storage from 'fetot-js-modules/local-storage';
import checkInputValue from 'fetot-js-modules/check-input-value';

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
function loginMessageHandlers(message) {
	console.log(message)
}

export default {
	worker: loginModuleWorker,
	messageHandlers: loginMessageHandlers
}