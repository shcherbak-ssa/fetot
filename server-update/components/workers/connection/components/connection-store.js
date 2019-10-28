'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

const connectionStore = {
	create(name) {
		this[name] = new Map();
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = connectionStore;