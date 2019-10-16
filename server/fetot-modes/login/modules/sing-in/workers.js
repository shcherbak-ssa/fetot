'use strict';

/*** imports [begin] ***/

const emailWorker = require('../../../../lib/email-worker'),
	{createIDWithLength} = require('../../../../lib/create-id');

/*** imports [end] ***/
/*** exports [begin] ***/

async function checkEmailWorker({message, mongodb, events, responseConfig, store, responseModule}) {
	let emailExist = await mongodb.findDocument({email: message.email});
	if( emailExist ) return events.emit('response-post-request', responseConfig['client-exist'](responseModule));
	
	let confirmEmailCode = createIDWithLength(6);
	store['sing-in'].set('confirm-email-code', confirmEmailCode);
	
	console.log(confirmEmailCode);
}

/*** exports [end] ***/

module.exports = {
	'check-email': checkEmailWorker
};