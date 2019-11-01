'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

const objectToString = Object.prototype.toString;

/*** init [end] ***/
/*** exports [begin] ***/

function getTrueValueTypeof(value) {
	let [, type] = objectToString.call(value).split(' ');
	return type.slice(0, type.length - 1);
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = getTrueValueTypeof;