'use strict';

/*** imports [begin] ***/

import EventsEmitter from 'fetot-js-modules/events-emitter';
import storeWorker from 'fetot-worker-modules/store-worker';
import fetchRequest from 'fetot-network-modules/fetch-request';

/*** imports [end] ***/
/*** init [begin] ***/

const outputMessage = {
	content: {
		type: 'confirm-email',
		data: {}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

async function confirmEmailModuleWorker() {
	const input = storeWorker.getGlobalStore('inputs').get('confirm-email'),
		loginModeEventsEmitter = EventsEmitter.getEmitter('login-mode');
		
	let	{value} = input;
	if( value.length < 6 ) return;
	
	if( /[^\w]/i.test(value) ) {
		input.error = 'Invalid confirmation code';
		return;
	}
	
	outputMessage.content.data = {code: value};
	let response = await fetchRequest.post({
		message: outputMessage
	});
	
	await parseServerResponse(input, response, loginModeEventsEmitter);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse(input, {type, message}, loginModeEventsEmitter) {
	switch( type ) {
		case 'error':
			console.log('error', message);
			input.error = message.error;
			break;
		case 'success':
			console.log('success', message);
			loginModeEventsEmitter.emit('change-module');
	}
}

/*** src [end] ***/

export default confirmEmailModuleWorker;