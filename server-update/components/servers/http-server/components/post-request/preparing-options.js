'use strict';

/*** imports [begin] ***/

const sendResponse = require('../send-response');

/*** imports [end] ***/
/*** exports [begin] ***/

async function preparingOptions(message, response) {
	return {
		message: message,
		response: async (message) => {
			await sendResponse({message}, response);
		}
	}
}

/*** exports [end] ***/

module.exports = preparingOptions;