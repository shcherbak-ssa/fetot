'use strict';

/*** imports [begin] ***/

import singInStore from '../store/sing-in-store';

/*** imports [end] ***/
/*** exports [begin] ***/

async function singInModuleWorker({inputs: {email}, outputMessage}) {
	if( await email.actions.isEmpty() ) return false;
	
	outputMessage.set('email', email.state.value);
	return await serverResponseHandler(email);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function serverResponseHandler(input) {
	return async ({type, message}) => {
		switch( type ) {
			case 'error':
				input.actions.updateError(message.error);
				return false;
			case 'success':
				return true;
		}
	}
}

/*** src [end] ***/

export default {
	store: singInStore,
	worker: singInModuleWorker
};