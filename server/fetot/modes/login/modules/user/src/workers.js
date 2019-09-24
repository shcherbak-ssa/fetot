'use strict';

async function userDataWorker(message, currentModule) {
	let result = await currentModule.mongoCollection.insertDocument(message);
	console.log(result);
	currentModule.sendMessage('success', result._id);
}

module.exports = {
	'user-data': userDataWorker
};