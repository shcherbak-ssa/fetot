'use strict';

/*** exports [begin] ***/

async function item(key) {
	return localStorage.getItem(key);
}

item.append = append;
item.remove = remove;

/*** exports [end] ***/
/*** src [begin] ***/

async function append(key, value) {
	localStorage.setItem(key, value);
}
async function remove(key) {
	localStorage.removeItem(key);
}

/*** src [end] ***/

export default { item };