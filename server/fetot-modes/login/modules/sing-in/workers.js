'use strict';

/*** imports [begin] ***/

const emailWorker = require('../../../../lib/email-worker'),
	{createIDWithLength} = require('../../../../lib/create-id');

/*** imports [end] ***/
/*** exports [begin] ***/

async function checkEmailWorker({message, mongodb, events, responseConfig, store, response}) {
	console.log('sing-in module: message => ', message);
	let emailExist = await mongodb.findDocument({email: message.email});
	if( emailExist ) return events.emit('response-post-request', responseConfig['client-exist'](response));
	
	let confirmEmailCode = createIDWithLength(6);
	store['sing-in'].set('confirm-email-code', confirmEmailCode);
	
	console.log(confirmEmailCode);
}

/*** exports [end] ***/

module.exports = {
	'check-email': checkEmailWorker
};