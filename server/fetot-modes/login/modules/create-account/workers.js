'use strict';

/*** exports [begin] ***/

async function confirmEmailWorker({message, events, config, store, response}) {
	let confirmEmailCode = store['sing-in'].get('confirm-email-code'),
		responseLabel = message.code === confirmEmailCode ? 'success' : 'invalid-code';
	
	events.emit('response-post-request', config.response[responseLabel](response));
}

/*** exports [end] ***/

module.exports = {
	'confirm-email': confirmEmailWorker
};