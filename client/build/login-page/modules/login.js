'use strict';

/*** imports [begin] ***/

import loginStore from '../store/login-store';
import {currentModuleWorker} from '../components/workers/current-module';

/*** imports [end] ***/
/*** exports [begin] ***/

async function loginModuleWorker({inputs: {email, password}, outputMessage}) {
	if( email.actions.isEmpty() ) return false;
	if( password.actions.isEmpty() ) return false;
	
	outputMessage.set('email', email.state.value);
	outputMessage.set('password', password.state.value);
	
	return await serverResponseHandler({email, password});
}

/*** exports [end] ***/
/*** src [begin] ***/

async function serverResponseHandler(inputs) {
	return async ({type, message}) => {
		switch( type ) {
			case 'error':
				if( 'input' in message ) {
					inputs[message.input].actions.updateError(message.error);
				} else {
					await currentModuleWorker.actions.updateText(
						`<span style="color:#FF2105;">${message.error}</span>`
					)
				}
				return false;
			case 'success':
				return true;
		}
	}
}

/*** src [end] ***/

export default {
	store: loginStore,
	worker: loginModuleWorker
};