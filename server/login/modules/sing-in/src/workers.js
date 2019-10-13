'use strict';

const emailWorker = require('../../../../../../lib/email-worker');

async function singinWorker({email}, currentModule) {
	try {
		let exist = await currentModule.mongoCollection.findDocument({email});
		if( exist.length !== 0 ) return await currentModule.sendMessage('exist');
		
		await currentModule.sendMessage('success');
		
		let message = {clientEmail: email, subject: 'Confirm e-mail', type: 'sing-in'};
		await emailWorker.createMessage(message);
		
		await emailWorker.sendMail();
	} catch( err ) {
		throw err;
	}
}

module.exports = {
	'sing-in': singinWorker
};