'use strict';

/*** imports [begin] ***/

const sendMailLetter = require('../../../../lib/email-worker'),
	{createIDWithLength} = require('../../../../lib/create-id');

/*** imports [end] ***/
/*** exports [begin] ***/

async function checkEmailWorker({message, mongodb, events, config, store, response}) {
	console.log('sing-in module: message => ', message);
	let emailExist = await mongodb.findDocument({email: message.email});
	if( emailExist ) return events.emit('response-post-request', config.response['client-exist'](response));
	
	let confirmEmailCode = createIDWithLength(6);
	store['sing-in'].set('confirm-email-code', confirmEmailCode);
	
	events.emit('response-post-request', config.response['success'](response));
	await sendMailLetter(config.emailLetterConfig(message.email, confirmEmailCode));
	
	console.log(confirmEmailCode);
}

/*** exports [end] ***/

module.exports = {
	'check-email': checkEmailWorker
};