
function setStorageItem(key, value) {
	if( typeof value === 'object' ) value = JSON.stringify(value);
	localStorage.setItem(key, value)
}
function getStorageItem(key) {
	return JSON.parse(localStorage.getItem(key));
}

export default {
	setStorageItem,
	getStorageItem
}