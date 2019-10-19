'use strict';

/*** imports [begin] ***/

const {sendError404} = require('../../../lib/send-file');

/*** imports [end] ***/
/*** exports [begin] ***/

async function responseError404Handler(response) {
	await sendError404(response);
}

/*** exports [begin] ***/

module.exports = responseError404Handler;