'use strict';

/*** exports [begin] ***/

async function clientMessageHandler(options) {
	await options.clientWorker.runCurrentModule(options);
}

/*** exports [end] ***/

module.exports = clientMessageHandler;