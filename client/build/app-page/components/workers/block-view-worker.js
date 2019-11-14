'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

const blockViewWorker = {
	preparingInfo(info) {
		const date = new Date(info.date);
		return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default {}; // module.exports = {};