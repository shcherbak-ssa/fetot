'use strict';

async function userDataWorker(message, currentModule) {
	console.log(message);
}

module.exports = {
	'user-data': userDataWorker
};