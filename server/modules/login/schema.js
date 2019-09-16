'use strict';

module.exports = {
	expectedKeysData: [ 'type', 'mail', 'password' ],
	validation: {
		type(value) {
			return !/(sing-in|login)/.test(value)
		},
		mail(value) {
			return /[^@]+@(gmail|mail)\.(ru|com)/.test(value) ? false : 'Invalid e-mail address'
		},
		password(value) {
			return value > 8 ? false : 'Password cannot be under 8 symbols'
		}
	}
};