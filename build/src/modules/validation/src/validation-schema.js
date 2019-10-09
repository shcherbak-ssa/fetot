'use strict';

/*** exports [begin] ***/

async function email(value) {
	return /[^\s@]+@(gmail|mail)\.(ru|com)/.test(value) ? false : 'Invalid e-mail address'
}
async function password(value) {
	return value.length < 8 ? 'A password cannot be under 8 symbols' : false;
}
async function fullname(value) {
	return  /[^a-z ]/i.test(value) ? 'Full name can contain the letters only' : false;
}

/*** exports [end] ***/

export { email, password, fullname }