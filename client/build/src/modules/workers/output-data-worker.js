'use strict';

/*** exports [begin] ***/

class OutputDataWorker {
	constructor(type) {
		this.data = new Map();
		this.output = {content: {type, data: {}}};
	}
	
	static getData(type, data) {
		return {content: { type, data }}
	}
	
	set(key, value) {
		this.data.set(key, value)
	}
	getData() {
		this.output.content.data = Object.fromEntries(this.data.entries());
		return this.output;
	}
}

/*** exports [end] ***/

export default OutputDataWorker;