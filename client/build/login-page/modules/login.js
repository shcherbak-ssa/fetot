'use strict';

/*** imports [begin] ***/

import Store from 'fetot-services/store';
import OutputMessage from 'fetot-workers/output-message';

import loginStore from '../store/login-store';

/*** imports [end] ***/
/*** exports [begin] ***/

async function loginModuleWorker({inputs: {email, password}, outputMessage}) {
	if( email.isEmpty() ) return false;
	outputMessage.set('email', email.value);
	
	if( password.isEmpty() ) return false;
	outputMessage.set('password', password.value);
	
	let response = await outputMessage.send();
	return await parseServerResponse({email, password}, response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse(inputs, {type, message}) {
	switch( type ) {
		case 'error':
			if( 'input' in message ) {
				inputs[message.input].error = message.error;
			} else {
				Store.collection('current-module').content.text
					= `<span style="color:#FF2105;">${message.error}</span>`;
			}
			return false;
		case 'success':
			console.log('Login success', message);
			return true;
	}
}

/*** src [end] ***/

export default {
	store: loginStore,
	worker: loginModuleWorker
};