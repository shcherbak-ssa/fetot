'use strict';

const http = require('http'),
	httpServer = http.createServer();

module.exports = ({validate, send}) => {
	return async (port, hostname) => {
		httpServer.on('request', httpServerWorker);
		return httpServer.listen(port, hostname, () => {
			return Promise.resolve(httpServer)
		})
	};
	
	async function httpServerWorker(request, response) {
		let {method, url} = request;
		if( method !== 'GET' ) {
			response.end('Oops');
			return;
		}
		
		try {
			let filename = await validate.httpGetRequest(url);
			await send.fileForGetRequest(filename, response);
		} catch( err ) {
			if( typeof err !== 'string' ) return console.log(err);
			
			await send.error404(err, response);
		}
	}
};