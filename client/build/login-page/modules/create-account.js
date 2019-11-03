'use strict';

/*** imports [begin] ***/

import createAccountStore from '../store/create-account-store';

/*** imports [end] ***/
/*** exports [begin] ***/

async function createAccountModuleWorker({inputs: {fullname, password}, outputMessage}) {
	if( fullname.isEmpty() ) return false;
	outputMessage.set('fullname', fullname.value);
	
	if( password.isEmpty() ) return false;
	outputMessage.set('password', password.value);
	
	let response = await outputMessage.send();
	return await parseServerResponse({fullname, password}, response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse(inputs, {type, message}) {
	switch( type ) {
		case 'error':
			inputs[message.input].error = message.error;
			return false;
		case 'success':
			console.log('Created success', message);
			return true;
	}
}

/*** src [end] ***/

export default {
	store: createAccountStore,
	worker: createAccountModuleWorker
};