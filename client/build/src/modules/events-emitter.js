'use strict';

/*** exports [begin] ***/

class EventsEmitter {
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
	
	/*** static properties and methods ***/
	static Emitters = new Map();
	static createEmitter(name) {
		let emitter = new EventsEmitter(name);
		EventsEmitter.Emitters.set(name, emitter);
		
		return emitter;
	}
	static getEmitter(name) {
		return EventsEmitter.Emitters.get(name)
	}
	
	/*** work methods ***/
	on(event, handler) {
		event = this.__getEventName(event);
		
		this.handlers.set(event, handler);
		document.addEventListener(event, this.handleObject);
		
		return this;
	}
	remove(event) {
		event = this.__getEventName(event);
		
		this.handlers.delete(event);
		document.removeEventListener(event, this.handleObject);
		
		return this;
	}
	emit(event, ...args) {
		event = this.__getEventName(event);
		document.dispatchEvent(new CustomEvent(event, {detail: args}))
	}
	
	/*** privet methods ***/
	__getEventName(event) {
		return `${this.emitter}-${event}`;
	}
}

/*** exports [end] ***/

export default EventsEmitter;