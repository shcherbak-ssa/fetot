'use strict';

/*** exports [begin] ***/

class Events {
	constructor(emitter) {
		this.emitter = emitter;
		this.handlers = new Map();
		
		this.handleObject = {
			handleEvent(event) {
				this.handlers.get(event.type)(...event.detail);
			}
		};
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