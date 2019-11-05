'use strict';

/*** exports [begin] ***/

function dataTransformToFormData(message) {
	let parsedObject = new Map(), nesting = [];
	
	parseMessageObject();
	
	let formData = new FormData();
	for( let [key, value] of parsedObject.entries() )
		formData.set(key, value);
	
	return formData;
	
	function parseMessageObject() {
		for( let [key, value] of Object.entries(message) ) {
			if( value instanceof Object ) {
				nesting.push(key);
				parseMessageObject();
			} else {
				let cKey = [...nesting, key].join('.'); // current key
				parsedObject.set(cKey, value);
			}
		}
		if( nesting[0] ) nesting.pop();
	}
}

function dataTransformToJSON(message) {
	return new Blob([ JSON.stringify(message) ], {type: 'application/json'})
}

/*** exports [end] ***/

export default {
	toFormData: dataTransformToFormData,
	toJSON: dataTransformToJSON
};