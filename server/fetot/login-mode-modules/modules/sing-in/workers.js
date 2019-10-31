'use strict';

/*** imports [begin] ***/

const sendMailLetter = require('../../../../lib/email-worker'),
	{generateClientId} = require('../../../../lib/generate-client-id');

/*** imports [end] ***/
/*** exports [begin] ***/

async function checkEmailWorker({message, mongodb, events, config, store, response}) {
	let emailExist = await mongodb.findDocument({email: message.email});
	if( emailExist ) return events.emit('response-post-request', config.response['client-exist'](response));
	
	let confirmEmailCode = await generateClientId('1234567890', 6);
	store.set('confirm-email-code', confirmEmailCode)
	     .set('current-client-email', message.email);
	
	events.emit('response-post-request', config.response.success(response));
	await sendMailLetter(config.emailLetterConfig(message.email, confirmEmailCode));
}

/*** exports [end] ***/

module.exports = {
	'check-email': checkEmailWorker
};