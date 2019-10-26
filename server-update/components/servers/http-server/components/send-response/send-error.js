'use strict';

/*** imports [begin] ***/

const sendFile = require('./send-file'),
	getPublicFilename = require('../../src/get-public-filename');

/*** imports [end] ***/
/*** exports [begin] ***/

async function sendError404(response) {
	await sendFile({
		filename: getPublicFilename('404.html'),
		statusCode: 404,
		headers: {
			'Content-Type': 'text/html'
		}
	}, response);
}

/*** exports [end] ***/

module.exports = {
	'404': sendError404
};