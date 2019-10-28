'use strict';

/*** imports [begin] ***/

const getPublicFilename = require('../../get-public-filename');

/*** imports [end] ***/
/*** init [begin] ***/

const headers = {
	'Content-Type': 'text/html'
};

/*** init [end] ***/
/*** exports [begin] ***/

const rootResponseConfig = new Proxy({}, {
	get(target, prop) {
		let filename = getPublicFilename(`${prop}.html`);
		return Object.assign({}, {filename, headers});
	}
});

/*** exports [end] ***/

module.exports = rootResponseConfig;