'use strict';

const {rootResponseConfig, fileResponseConfig} = require('./response-config');

async function parseRootRequest(cookie) {
	if( !cookie ) return ;
}
async function parseFileRequest(url, cookie) {

}

async function error404() {
	return Promise.reject('404');
}
async function parseCookie(cookie) {
	console.log(cookie);
	// let [key, value] = cookie.split('=')
}

module.exports = { parseRootRequest, parseFileRequest };