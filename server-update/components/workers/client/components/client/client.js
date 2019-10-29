'use strict';

/*** imports [begin] ***/

const connections = require('./connections');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

class Client {
	constructor(ip, config) {
		this.ip = ip;
	}
	
	static async create({ip, message: {client, connection}}) {}
	
	connections = connections;
	async run(message) {
	
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

module.exports = Client;