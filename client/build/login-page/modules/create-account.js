'use strict';

/*** imports [begin] ***/

import createAccountStore from '../store/create-account-store';

/*** imports [end] ***/
/*** exports [begin] ***/

async function createAccountModuleWorker({inputs: {fullname, password}, outputMessage}) {
	if( await fullname.actions.isEmpty() ) return false;
	if( await password.actions.isEmpty() ) return false;
	
	outputMessage.set('fullname', fullname.state.value);
	outputMessage.set('password', password.state.value);
	
	return await serverResponseHandler({fullname, password});
}

/*** exports [end] ***/
/*** src [begin] ***/

async function serverResponseHandler(inputs) {
	return async ({type, message}) => {
		switch( type ) {
			case 'error':
				inputs[message.input].actions.updateError(message.error);
				return false;
			case 'success':
				return true;
		}
	}
}

/*** src [end] ***/

export default {
	store: createAccountStore,
	worker: createAccountModuleWorker
};