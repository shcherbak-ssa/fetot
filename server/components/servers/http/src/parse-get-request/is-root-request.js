'use strict';

/*** imports [begin] ***/

// const rootResponseConfig = require('./root-response-config');
const getPublicFilename = require('../get-public-filename');

/*** imports [end] ***/
/*** init [begin] ***/

const headers = {
	'Content-Type': 'text/html'
};

/*** init [end] ***/
/*** exports [begin] ***/

async function isRootRequest(headers) {
	let {cookie} = headers;
	if( !cookie ) return await getResponseConfig('login');
	
	cookie = await parseCookie(cookie);
	if( !cookie || !cookie.client ) return {error: '404'};
	
	return await getResponseConfig('app');
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseCookie(cookie) {
	let [key, value] = cookie.split('=');
	return key === '$ftt' ? JSON.parse(value) : false;
}
async function getResponseConfig(filename) {
	filename = getPublicFilename(`${filename}.html`);
	return Object.assign({}, {filename, headers});
}

/*** src [end] ***/

module.exports = isRootRequest;