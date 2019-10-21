'use strict';

/*** exports [begin] ***/

function object2mapWorker(object) {
	return new Map(Object.entries(object))
}

/*** exports [end] ***/

module.exports = object2mapWorker;