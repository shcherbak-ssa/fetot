'use strict';

const schema = {
	// email: {
	// 	type: String,
	// 	validation(value) {
	// 		return /[^\s@]+@(gmail)\.(com)/.test(value) || 'invalid-email'
	// 	}
	// },
	fullname: {
		type: String,
		validation(value) {
			return /[^a-z ]/i.test(value) || 'invalid-fullname'
		}
	}
};

module.exports = schema;