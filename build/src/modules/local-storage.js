'use strict';

/*** exports [begin] ***/

function setStorageItem(key, value) {
	if( typeof value === 'object' ) value = JSON.stringify(value);
	localStorage.setItem(key, value)
}
function getStorageItem(key) {
	return localStorage.getItem(key)
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