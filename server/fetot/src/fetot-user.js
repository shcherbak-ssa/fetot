'use strict';

const FetotEventEmitter = require('./fetot-event-emitter');

class FetotUser {
	constructor(props) {
		this.eventEmitter = new FetotEventEmitter();
		
		this.userId = '';
		
		this.socketWorker = '';
		this.mongoWorker = '';
		
		this.currentMode = '';
		this.fetotModules = '';
	}
	
	static fetotUsers = new Map();
	
	static createNewUser() {
	
	}
}

module.exports = FetotUser;