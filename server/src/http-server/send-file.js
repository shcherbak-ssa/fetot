'use strict';

const fs = require('fs');

function sendFile(filename, response) {
	let readStream = new fs.ReadStream(filename);
	response.statusCode = 200;
	
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

module.exports = sendFile;