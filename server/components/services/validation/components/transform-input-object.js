'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

async function transformInputObject(inputObject) {
	return await parse(inputObject);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parse(inputObject) {
	return await Promise.all(Object.entries(inputObject).map(parseItem));
}
async function parseItem([key, value]) {
	value = (typeof value === 'object' ) ? await parse(value) : await getValueData(value);
	return [key, value];
}
async function getValueData(value) {
	return {
		type: typeof value,
		required: value !== null && value !== '',
		value: value
	}
}

/*** src [end] ***/

module.exports = transformInputObject;