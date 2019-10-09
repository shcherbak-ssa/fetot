'use strict';

/*** imports [begin] ***/

import eventsEmitter from './events-emitter';

/*** imports [end] ***/
/*** exports [begin] ***/

class Events {
	constructor(emitter) {
		this.emitter = emitter;
		this.handlers = new Map();
	}
	
	static createEmitter(emitter) {
		let events = new Events(emitter);
		
	}
	
	on(event, handler) {
		switch( typeof event ) {
			case 'string':
				this.handlers.set(event, handler);
				break;
			case 'object':
				Object.entries(event).map(([event, handler]) => {
					this.handlers.set(event, handler)
				})
		}
		return this;
	}
	remove(event) {
		switch( typeof event ) {
			case 'string':
				this.handlers.delete(event);
				break;
			case 'object':
				Object.keys(event).map((event) => {
					this.handlers.delete(event)
				})
		}
		return this;
	}
	emit(event, ...args) {
	
	}
}

/*** exports [end] ***/

export default {};