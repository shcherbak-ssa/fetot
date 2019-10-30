'use strict';

/*** imports [begin] ***/

const connections = require('./connections');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

class Client {
	constructor(config) {}
	
	static async create({client, connection}) {
		return new Client();
	}
	
	connections = connections;
	
	async run(options) {
		console.log(options);
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = Client;