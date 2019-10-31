'use strict';

/*** imports [begin] ***/

const sendResponse = require('../send-response');

/*** imports [end] ***/
/*** exports [begin] ***/

async function preparingOptions(ip, message, socket) {
	return {
		ip, message,
		response: async (outputMessage) => {
			await sendResponse(outputMessage, socket);
		}
	}
}

/*** exports [end] ***/

module.exports = preparingOptions;