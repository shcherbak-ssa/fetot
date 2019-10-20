'use strict';

/*** imports [begin] ***/

const ClientWorker = require('../../workers/client-worker');

/*** imports [end] ***/
/*** exports [begin] ***/

async function clientExitHandler({response, clientWorker}) {
	await ClientWorker.removeClient(clientWorker.id);
	response.end();
}

/*** exports [end] ***/

module.exports = clientExitHandler;