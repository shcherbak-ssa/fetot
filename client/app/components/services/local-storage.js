'use strict';

/*** exports [begin] ***/

function item(key) {
	let item = localStorage.getItem(key);
	if( item.startsWith('{') ) item = JSON.parse(item);
	
	return item;
}

item.create = createStorageItem;
item.remove = removeStorageItem;
item.has = hasStorageItem;

/*** exports [end] ***/
/*** src [begin] ***/

function createStorageItem(key, value) {
	if( typeof value === 'object' ) value = JSON.stringify(value);
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