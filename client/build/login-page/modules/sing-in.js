'use strict';

/*** imports [begin] ***/

import singInStore from '../store/sing-in-store';

/*** imports [end] ***/
/*** exports [begin] ***/

async function singInModuleWorker({inputs: {email}, outputMessage}) {
	if( email.isEmpty() ) return false;
	outputMessage.set('email', email.value);
	
	let response = await outputMessage.send();
	return await parseServerResponse(email, response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse(input, {type, message}) {
	switch( type ) {
		case 'error':
			input.error = message.error;
			return false;
		case 'success':
			console.log('success', message);
			return true;
	}
}

/*** src [end] ***/

export default {
	store: singInStore,
	worker: singInModuleWorker
};