'use strict';

/*** imports [begin] ***/

const fs = require('fs');

/*** imports [end] ***/
/*** exports [begin] ***/

async function sendFile({filename, statusCode = 200, headers}, response) {
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

/*** exports [end] ***/

module.exports = sendFile;