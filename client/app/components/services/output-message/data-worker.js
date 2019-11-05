'use strict';

/*** exports [begin] ***/

const dataWorker = {
	append(key, value) {
		let d = this.data;
		if( !this._withFile ) this._isFile(value);
		
		if( key in d ) {
			if( d[key] instanceof Array ) d[key].push(value);
			else {
				let firstValues = d[key];
				d[key] = [...firstValues, value];
			}
		} else d[key] = value;
		
		return this;
	},
	set(key, value) {
		if( !this._withFile ) this._isFile(value);
		this.data[key] = value;
		
		return this;
	},
	has(key) {
		return key in this.data;
	},
	delete(key) {
		if( key in this.data ) delete this.data[key];
		return this;
	}
};

/*** exports [end] ***/

export default dataWorker;