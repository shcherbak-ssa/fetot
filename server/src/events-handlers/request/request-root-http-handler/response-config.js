'use strict';

/*** imports [begin] ***/

const getClientFilename = require('../../../../lib/get-client-filename');

/*** imports [end] ***/
/*** exports [begin] ***/

const responseConfig = {
	root: {
		filename: '',
		statusCode: 200,
		headers: {
			'Content-Type': 'text/html'
		}
	}
};

/*** exports [end] ***/

module.exports = new Proxy(responseConfig, {
	get(target, prop) {
		return async () => {
			let root = target.root;
			root.filename = getClientFilename('html', prop);
			
			return root;
		}
	}
});