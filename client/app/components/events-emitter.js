'use strict';

/*** init [begin] ***/

const emitterCollection = new Map();

const EventsEmitter = {
	handlers: new Map(),
	on(event, handler) {
		if( this.handlers.has(event) ) {
			let oldHandlers = this.handlers.get(event);
			this.handlers.set(event, [...oldHandlers, handler])
		} else {
			this.handlers.set(event, [handler]);
		}
		
		return this;
	},
	remove(event, handler) {
		let handlers = this.handlers.get(event).filter((item) => item !== handler);
		this.handlers.set(event, handlers);
	},
	emit(event, ...args) {
		if( !this.handlers.has(event) )
			return console.log(new Error(`event '${event}' didn't add`));
		
		this.handlers.get(event).map((handler) => {
			handler(...args)
		})
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

const EventsEmitterWorker = {
	createEmitter(name) {
		let events = Object.assign({}, EventsEmitter);
		emitterCollection.set(name, events);
		
		return events;
	},
	getEmitter(name) {
		return emitterCollection.has(name) ? emitterCollection.get(name) : this.createEmitter(name)
	}
};

/*** exports [end] ***/

export default EventsEmitterWorker;