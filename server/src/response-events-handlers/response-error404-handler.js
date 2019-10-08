'use strict';

const {sendError404} = require('../../lib/send-file');

/*** exports [begin] ***/

async function responseError404Handler(response) {
	await sendError404(response);
}

/*** exports [begin] ***/

module.exports = responseError404Handler;