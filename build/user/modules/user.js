'use strict';

import websocket from 'fetot-js-modules/websocket';
import storage from 'fetot-js-modules/local-storage';
import checkInputValue from 'fetot-js-modules/check-input-value';

function userWorker(inputs) {
	let fullnameValue = checkInputValue(inputs.fullname, 'fullname');
	if( !fullnameValue ) return;
	
	let passwordValue = checkInputValue(inputs.password, 'password');
	if( !passwordValue ) return;
	
	websocket.sendMessage({
		type: 'message',
		message: {
			type: 'user/user-data',
			data: {
				email: storage.getStorageItem('fetot-client-email'),
				fullname: fullnameValue,
				password: passwordValue
			}
		}
	})
}
function userMessageHandlers(inputs) {
	return {
		error({label, error}) {
			if( label === 'email' ) return;
			inputs[label].error = error;
		},
		success({userID}) {
			let email = storage.getStorageItem('fetot-client-email'),
				password = inputs.password.value;
			
			storage.removeStorageItem('fetot-client-email');
			storage.setStorageItem(userID, { email, password });
			
			console.log(storage.getStorageItem(userID));
		}
	}
}

export default {
	worker: userWorker,
	messageHandlers: userMessageHandlers
}