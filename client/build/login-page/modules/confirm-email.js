'use strict';

/*** imports [begin] ***/

import confirmEmailStore from '../store/confirm-email-store';

/*** imports [end] ***/
/*** exports [begin] ***/

async function confirmEmailModuleWorker({inputs: {code}, outputMessage}) {
	let {value} = code.state;
	if( value.length < 6 ) return false;
	
	if( !/\d{1,6}/.test(value) ) {
		code.actions.updateError('Invalid confirmation code');
		return false;
	}
	
	outputMessage.set('code', value);
	return await serverResponseHandler(code);
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
	store: confirmEmailStore,
	worker: confirmEmailModuleWorker
};