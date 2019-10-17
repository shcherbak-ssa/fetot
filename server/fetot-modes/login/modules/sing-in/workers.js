'use strict';

/*** imports [begin] ***/

const sendMailLetter = require('../../../../lib/email-worker'),
	{createIDWithLength} = require('../../../../lib/create-id');

/*** imports [end] ***/
/*** exports [begin] ***/

async function checkEmailWorker({message, mongodb, events, config, store, response}) {
	let emailExist = await mongodb.findDocument({email: message.email});
	if( emailExist ) return events.emit('response-post-request', config.response['client-exist'](response));
	
	let confirmEmailCode = await createIDWithLength(6);
	store['sing-in'].set('confirm-email-code', confirmEmailCode);
	
	events.emit('response-post-request', config.response['success'](response));
	await sendMailLetter(config.emailLetterConfig(message.email, confirmEmailCode));
}

/*** exports [end] ***/

module.exports = {
	'check-email': checkEmailWorker
};