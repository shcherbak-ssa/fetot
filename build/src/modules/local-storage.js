'use strict';

/*** exports [begin] ***/

function setStorageItem(key, value) {
	if( typeof value === 'object' ) value = JSON.stringify(value);
	localStorage.setItem(key, value)
}
function getStorageItem(key) {
	let value = localStorage.getItem(key);
	
	try {
		return JSON.parse(value);
	} catch( err ) {
		return value;
	}
}
function removeStorageItem(key) {
	localStorage.removeItem(key)
}
function hasStorageItem(key) {
	return !!getStorageItem(key);
}

/*** exports [end] ***/

export default {
	setStorageItem,
	getStorageItem,
	removeStorageItem,
	hasStorageItem
}