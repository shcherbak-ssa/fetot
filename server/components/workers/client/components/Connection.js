'use strict';

/*** imports [begin] ***/

const ModuleWorker = require('../../module');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

class Connection {
	constructor() {
		this.currentModule = {};
	}
	
	async parseMessage(message) {
		console.log(message);
		return { message: { blocks: ['hello', 'world'] } }
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = Connection;