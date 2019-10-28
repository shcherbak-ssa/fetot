'use strict';

/*** imports [begin] ***/

const sendResponse = require('../send-response');

/*** imports [end] ***/
/*** exports [begin] ***/

async function preparingOptions(ip, message, response) {
	return {
		ip, message,
		response: async (outputMessage) => {
			await sendResponse({message: outputMessage}, response);
		}
	}
}

/*** exports [end] ***/

module.exports = preparingOptions;