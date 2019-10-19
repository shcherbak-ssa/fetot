'use strict';

/*** exports [begin] ***/

const responseConfig = {
	async success() {
		return {
			statusCode: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	},
	async error() {
		return {
			statusCode: 404,
			headers: {}
		}
	}
};

/*** exports [end] ***/

module.exports = new Proxy(responseConfig, {
	get(target, prop) {
		return async () => {
			return await target[prop]()
		}
	}
});