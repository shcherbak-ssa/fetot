'use strict';

import storage from 'fetot-js-modules/local-storage';
import fetchRequest from 'fetot-js-modules/fetch-request';
import checkInputValue from 'fetot-js-modules/check-input-value';

const message = {
	url: 'create/user/message',
	body: {},
	type: 'json'
};

async function userWorker(inputs) {
	let formData = new FormData();
	
	let fullnameValue = checkInputValue(inputs.fullname, 'fullname');
	if( !fullnameValue ) return;
	
	let passwordValue = checkInputValue(inputs.password, 'password');
	if( !passwordValue ) return;
	
	formData.set('email', storage.getStorageItem('fetot-client-email'));
	formData.set('fullname', fullnameValue);
	formData.set('password', passwordValue);
	let response = await fetchRequest.post( Object.assign(message, {body: formData}) );
	
	await userResponseWorker(inputs, response);
}
async function userResponseWorker(inputs, {type, message}) {
	switch( type ) {
		case 'error':
			let {label, error} = message;
			
			if( label === 'email' ) return;
			inputs[label].error = error;
			break;
		case 'success':
			let email = storage.getStorageItem('fetot-client-email'),
				password = inputs.password.value,
				{userID} = message;
			
			storage.removeStorageItem('fetot-client-email');
			storage.setStorageItem(userID, { email, password });
			
			console.log(storage.getStorageItem(userID));
	}
}

export default {
	worker: userWorker
}