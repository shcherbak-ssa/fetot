'use strict';

/*** exports [begin] ***/

const emitters = new Map();

class Events {
	constructor(emitter) {
		this.emitter = emitter;
		this.handlers = new Map();
		
		let handlers = this.handlers;
		this.handleObject = {
			handleEvent(event) {
				handlers.get(event.type)(...event.detail);
			}
		};
	}
	
	// static emitters = new Map();
	static createEmitter(name) {
		let events = new Events(name);
		// Events.emitters.set(name, events);
		emitters.set(name, events);
		return events;
	}
	static getEmitter(name) {
		return emitters.get(name)
	}
	
	on(event, handler) {
		event = this._getEventName(event);
		
		this.handlers.set(event, handler);
		document.addEventListener(event, this.handleObject);
		
		return this;
	}
	remove(event) {
		event = this._getEventName(event);
		
		this.handlers.delete(event);
		document.removeEventListener(event, this.handleObject);
		
		return this;
	}
	emit(event, ...args) {
		event = this._getEventName(event);
		document.dispatchEvent(new CustomEvent(event, {detail: args}))
	}
	
	_getEventName(event) {
		return `${this.emitter}-${event}`;
	}
}

/*** exports [end] ***/

export default Events;