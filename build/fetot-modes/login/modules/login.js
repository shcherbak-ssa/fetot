'use strict';

import websocket from 'fetot-js-modules/websocket';
import storage from 'fetot-js-modules/local-storage';

import checkInputValue from 'fetot-js-modules/check-input-value';

function loginModuleWorker(inputs) {
	let mailValue = checkInputValue(inputs.email, 'mail');
	if( !mailValue ) return;
	
	let passwordValue = checkInputValue(inputs.password, 'password');
	if( !passwordValue ) return;
	
	websocket.sendMessage({
		type: 'message',
		message: {
			type: 'login/login',
			data: {
				email: mailValue,
				password: passwordValue
			}
		}
	});
}
function loginMessageHandlers(inputs) {
	return {
		'login': {
			success() {
				alert('Login success')
			},
			error({error}) {
				setErrorMessage(inputs.email, error);
				setErrorMessage(inputs.password, error);
			}
		}
	}
}
function setErrorMessage(input, message) {
	input.error = message;
}

export default {
	worker: loginModuleWorker,
	messageHandlers: loginMessageHandlers
}