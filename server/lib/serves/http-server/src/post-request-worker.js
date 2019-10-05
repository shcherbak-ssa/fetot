'use strict';

class PostRequestWorker {
	constructor({type, body}, response) {
		this.type = type;
		this.body = body;
		
		this.response = response;
	}
	
	static async parseRequest(request, response) {
		return new Promise((success, error) => {
			let postData = '';
			request
				.on('data', (chuck) => {
					postData += chuck;
				})
				.on('end', () => {
					let options = { type: request.url, body: JSON.parse(postData) };
					return success( new PostRequestWorker(options, response) )
				})
				.on('error', (err) => {
					console.log(err);
					return error();
				})
		})
	}
}

module.exports = PostRequestWorker;