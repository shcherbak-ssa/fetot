'use strict';

import fetchRequest from 'fetot-js-modules/fetch-request';
import storage from 'fetot-js-modules/local-storage';
import eventsHandlers from 'fetot-js-modules/events-handlers';
import checkInputValue from 'fetot-js-modules/check-input-value';

const message = {
	url: 'sing-in/sing-in/message',
	body: {},
	type: 'json'
};

async function singInWorker(input) {
	let formData = new FormData();
	
	let emailValue = checkInputValue(input, 'mail');
	if( !emailValue ) return;
	
	formData.set('email', emailValue);
	let response = await fetchRequest.post( Object.assign(message, {body: formData}) );
	
	await singInResponseWorker(input, response)
}
async function singInResponseWorker(input, {type, message}) {
	switch( type ) {
		case 'error':
			input.error = message.error;
			break;
		case 'success':
			storage.setStorageItem('fetot-client-email', input.value);
			eventsHandlers.emit('check-email')
	}
}

export default {
	worker: singInWorker
}