'use strict';

/*** imports [begin] ***/

import $fetch from '../network/fetch';

/*** imports [end] ***/
/*** exports [begin] ***/

class OutputMessage {
	static clientID = '';
	
	constructor({messageType = 'message', type}) {
		this.messageType = messageType; // 'connection', 'close', 'message'
		
		this.type = type;
		this.data = {};
	}
	
	/* public properties and methods */
	append(key, value) {
		let d = this.data;
		if( !this._withFile ) this._isFile(value);
		
		if( key in d ) {
			if( d[key] instanceof Array ) d[key].push(value);
			else {
				let firstValue = d[key];
				d[key] = [firstValue, value];
			}
		} else d[key] = value;
		
		return this;
	}
	set(key, value) {
		if( !this._withFile ) this._isFile(value);
		this.data[key] = value;
		
		return this;
	}
	has(key) {
		return key in this.data;
	}
	delete(key) {
		if( key in this.data ) delete this.data[key];
		return this;
	}
	
	async send() {
		let message = this.getMessage();
		let dataTransformer = this._withFile ? transformToFormData : transformToJSON;
	
		return await $fetch({body: dataTransformer(message)})
	}
	getMessage() {
		return {
			id: OutputMessage.clientID,
			type: this.messageType,
			content: {
				type: this.type,
				data: this.data
			}
		}
	}
	
	/* privet properties and methods */
	_withFile = false;
	_isFile(value) {
		this._withFile = value instanceof Blob;
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

// to formData
function transformToFormData() {
	let parsedObject = new Map(), nesting = [];
	
	parseMessageObject();
	
	let formData = new FormData();
	for( let [key, value] of parsedObject.entries() )
		formData.set(key, value);
	
	return formData;
	
	function parseMessageObject() {
		for( let [key, value] of Object.entries(this.message) ) {
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

// to json
function transformToJSON(message) {
	return new Blob(
		[ JSON.stringify(message) ],
		{type: 'application/json'}
		)
}

/*** src [end] ***/

export default OutputMessage;