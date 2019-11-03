'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

const defaultOptions = {path: '/'};
const $fetotCookiet = {};

/*** init [end] ***/
/*** exports [begin] ***/

async function cookie() {
	let [key, cookie] = document.cookie.split('=');
	return key === '$ftt' ? JSON.parse(cookie) : null;
}


/*** exports [end] ***/
/*** src [begin] ***/

function appendCookie(value, options = {}) {
	options = Object.assign({}, defaultOptions, {...options});
	
	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}
	
	document.cookie = updatedCookie;
}


function deleteCookie(name) {
	setCookie(name, "", {
		'max-age': -1
	})
}

/*** src [end] ***/

export default {};