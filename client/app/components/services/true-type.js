'use strict';

/*** exports [begin] ***/

function getTrueType(what) {
	return Object.prototype.toString.call(what).slice(8, -1)
}

/*** exports [end] ***/

export default { get: getTrueType };