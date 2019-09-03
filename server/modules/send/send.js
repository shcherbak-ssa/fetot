'use strict';

const send = module.exports = {},
	fs = require('fs'),
	path = require('path');

send.fileForGetRequest = (filename, response) => {
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
};
send.error404 = (errorFilename, response) => {
	return send.fileForGetRequest(errorFilename, response)
};