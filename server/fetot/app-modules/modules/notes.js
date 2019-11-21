'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

const schema = {
	id: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	content: {
		type: Array
	},
	info: {
		__props: {
			date: {
				type: Number,
				required: true
			}
		}
	}
};

const notesWorkers = {};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = { schema, workers: notesWorkers };