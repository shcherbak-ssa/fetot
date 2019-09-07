'use strict';

const http = require('http'),
	httpServer = http.createServer();

module.exports = ({request: getRequestUrl, send}) => {
	return async (port, hostname) => {
		httpServer.on('request', httpServerWorker);
		return httpServer.listen(port, hostname, () => {
			return Promise.resolve(httpServer)
		})
	};
	
	async function httpServerWorker(request, response) {
		if( request.method !== 'GET' ) return response.end('Oops');
		
		try {
			let filename = await getRequestUrl(request.url);
			await send.fileForGetRequest(filename, response);
		} catch( err ) {
			if( typeof err === 'object' ) return console.log(err);
			await send.error404(err, response);
		}
	}
};