'use strict';

function singinWorker(message, mongoCollection) {
	let {email} = message;
	console.log(email);
	
	return 'check-email';
}

module.exports = {
	'sing-in': singinWorker
};