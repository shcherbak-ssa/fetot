'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

const schema = {
	title: {
		type: String,
		required: true
	},
	content: {
		type: Array
	},
	info: {
		__props: {
			date: Number,
			required: true
		}
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default { schema }; // module.exports = {};