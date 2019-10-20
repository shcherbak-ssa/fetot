'use strict';

/*** exports [begin] ***/

const responseConfig = {
	common: {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	}
};

/*** exports [end] ***/

module.exports = new Proxy(responseConfig, {
	get(target, prop) {
		return async () => {
			if( prop === 'common' ) return target.common;
			return Object.assign({}, target.common, target[prop]);
		}
	}
});