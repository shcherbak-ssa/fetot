'use strict';

/*** exports [begin] ***/

const schema = {
	code: {
		type: String,
		validate(value) {
			return value.length === 6
		}
	},
	__length: 1
};

/*** exports [end] ***/

module.exports = schema;