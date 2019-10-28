'use strict';

/*** exports [begin] ***/

async function parseCookie(cookie) {
	let [key, value] = cookie.split('=');
	return key === '$fetot' ? JSON.parse(value) : false;
}

/*** exports [end] ***/

module.exports = parseCookie;