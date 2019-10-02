'use strict';

const fs = require('fs'),
	path = require('path');

/**
 *
 * @param options
 * @param response
 * @returns {Promise<void>}
 */
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
		filename: path.join(process.cwd(), 'client', 'view', '404.html'),
		statusCode: 404,
		headers: {
			'Content-Type': 'text/html'
		}
	}, response);
}

module.exports = { sendFile, sendError404 };