'use strict';

/*** imports [begin] ***/

const {sendFile, sendError404} = require('../../lib/send-file');

/*** imports [end] ***/
/*** exports [begin] ***/

async function responseFileHandler(options, response) {
	options ? await sendFile(options, response) : await sendError404(response);
}

/*** exports [begin] ***/

module.exports = responseFileHandler;