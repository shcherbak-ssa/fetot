'use strict';

/*** exports [begin] ***/

function item(key) {
	return localStorage.getItem(key);
}

item.create = createStorageItem;
item.remove = removeStorageItem;
item.has = hasStorageItem;

/*** exports [end] ***/
/*** src [begin] ***/

function createStorageItem(key, value) {
	localStorage.setItem(key, value);
}
function removeStorageItem(key) {
	localStorage.removeItem(key);
}
function hasStorageItem(key) {
	return !!localStorage.getItem(key);
}

/*** src [end] ***/

export default { item };