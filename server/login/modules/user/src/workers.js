'use strict';

async function userCreateWorker({email, fullname, password}, currentModule) {
	let client = { email, password, config: { fullname } },
		result = await currentModule.mongoCollection.insertDocument(client);
	
	console.log(result);
	currentModule.sendMessage('success', result._id);
}

module.exports = {
	'create': userCreateWorker
};