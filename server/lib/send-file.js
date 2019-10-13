'use strict';

/*** imports [begin] ***/

const fs = require('fs'),
	getClientFilename = require('./get-client-filename');

/*** imports [end] ***/
/*** exports [begin] ***/

async function sendFile({filename, statusCode, headers}, response) {
	let readStream = new fs.ReadStream(filename);
	response.writeHead(statusCode, headers);
	
	readStream
		.on('readable', () => {
			let data = readStream.read();
			if( data !== null ) response.write(data);
		})
		.on('end', () => {
			response.end();
		})
		.on('error', (err) => {
			return Promise.reject(err)
		})
}
async function sendError404(response) {
	await sendFile({
		filename: getClientFilename('html', '404'),
		statusCode: 404,
		headers: {
			'Content-Type': 'text/html'
		}
	}, response);
}

/*** exports [end] ***/

module.exports = { sendFile, sendError404 };