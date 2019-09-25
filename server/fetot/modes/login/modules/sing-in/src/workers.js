'use strict';

const emailWorker = require('../../../../../../lib/email-worker');

async function singinWorker({email}, currentModule) {
	// await currentModule.mongoCollection.deleteDocument({email});
	// return await currentModule.sendMessage('check-email');
	
	try {
		let exist = await currentModule.mongoCollection.findDocument({email});
		if( exist.length !== 0 ) return await currentModule.sendMessage('exist');
		
		await currentModule.sendMessage('success');
		
		let message = {clientEmail: email, subject: 'Confirm e-mail', type: 'sing-in'};
		await emailWorker.createMessage(message);
		
		let info = await emailWorker.sendMail();
		console.log(info);
	} catch( err ) {
		throw err;
	}
}

module.exports = {
	'sing-in': singinWorker
};