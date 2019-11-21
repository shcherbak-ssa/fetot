'use strict';

/*** init [begin] ***/

const emitterCollection = new Map();

class EventsEmitter {
	handlers = new Map();
	on(event, handler) {
		if( this.handlers.has(event) ) {
			let oldHandlers = this.handlers.get(event);
			this.handlers.set(event, [...oldHandlers, handler])
		} else {
			this.handlers.set(event, [handler]);
		}
		
		return this;
	}
	remove(event, handler) {
		let handlers = this.handlers.get(event).filter((item) => item !== handler);
		this.handlers.set(event, handlers);
	}
	emit(event, ...args) {
		if( !this.handlers.has(event) )
			return Promise.reject(new Error(`event '${event}' didn't add`));
		
		return Promise.all(this.handlers.get(event).map((handler) => {
			return handler(...args)
		}))
	}
}

/*** init [end] ***/
/*** exports [begin] ***/

const eventsEmitterWorker = {
	createEmitter(name) {
		if( emitterCollection.has(name) ) return emitterCollection.get(name);
		
		let emitter = new EventsEmitter();
		emitterCollection.set(name, emitter);
		
		return emitter;
	},
	removeEmitter(name) {
		if( !emitterCollection.has(name) ) return;
		emitterCollection.delete(name);
	},
	
	getEmitter(name) {
		return emitterCollection.has(name) ? emitterCollection.get(name) : this.createEmitter(name)
	}
};

/*** exports [end] ***/

export default eventsEmitterWorker;