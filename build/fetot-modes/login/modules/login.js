'use strict';

import storage from 'fetot-js-modules/local-storage';
import fetchRequest from 'fetot-js-modules/fetch-request';
import checkInputValue from 'fetot-js-modules/check-input-value';

const message = {
	url: 'login/login/message',
	body: {},
	type: 'json'
};

async function loginWorker(inputs) {
	let formData = new FormData();
	
	let emailValue = checkInputValue(inputs.email, 'mail');
	if( !emailValue ) return;
	
	let passwordValue = checkInputValue(inputs.password, 'password');
	if( !passwordValue ) return;
	
	formData.set('email', emailValue);
	formData.set('password', emailValue);
	let response = await fetchRequest.post( Object.assign(message, {body: formData}) );
	
	await loginResponseWorker(inputs, response)
}
function loginResponseWorker(inputs, {type, message}) {
	switch( type ) {
		case 'error':
			setErrorMessage(inputs.email, message.error);
			setErrorMessage(inputs.password, message.error);
			break;
		case 'success':
			alert('Login success')
	}
}
function setErrorMessage(input, message) {
	input.error = message;
}

export default {
	worker: loginWorker
}