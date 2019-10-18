'use strict';

/*** imports [begin] ***/

import EventsEmitter from 'fetot-js-modules/events-emitter';
import OutputDataWorker from 'fetot-worker-modules/output-data-worker';
import storeWorker from 'fetot-worker-modules/store-worker';
import fetchRequest from 'fetot-network-modules/fetch-request';

/*** imports [end] ***/
/*** exports [begin] ***/

async function confirmEmailModuleWorker() {
	const input = storeWorker.getGlobalStore('inputs').get('confirm-email'),
		loginModeEventsEmitter = EventsEmitter.getEmitter('login-mode');
		
	let	{value} = input;
	if( value.length < 6 ) return;
	
	if( /[^\w]/i.test(value) ) return input.error = 'Invalid confirmation code';
	
	let response = await fetchRequest.post({
		message: OutputDataWorker.getData('confirm-email', {code: value})
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