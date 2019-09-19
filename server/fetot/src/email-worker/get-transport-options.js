'use strict';

function getTransportOptions(testAccount) {
	return {
		host: 'smtp.ethereal.email',
		port: 587,
		secure: false,
		auth: {
			user: testAccount.user,
			pass: testAccount.pass
		}
	}
}

module.exports = getTransportOptions;