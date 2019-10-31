'use strict';

/*** imports [begin] ***/

const connectionWorker = require('../../workers/connection');

/*** imports [end] ***/
/*** exports [begin] ***/

async function connectionHandler(options) {
	await connectionWorker.connectionHandler(options)
}

/*** exports [end] ***/

module.exports = connectionHandler;