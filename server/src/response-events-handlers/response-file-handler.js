'use strict';

const {sendFile, sendError404} = require('../../lib/send-file');

/*** exports [begin] ***/

async function responseFileHandler(options, response) {
	options ? await sendFile(options, response) : await sendError404(response);
}

/*** exports [begin] ***/

module.exports = responseFileHandler;