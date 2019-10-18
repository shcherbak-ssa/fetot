'use strict';

/*** imports [begin] ***/

const MongodbWorker = require('./mongodb-worker'),
	{responseEventEmitter} = require('../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

class ModuleWorker {
	constructor({config, schema, workers}) {
		this.config = config;
		this.schema = schema;
		this.workers = workers;
		
		this.options = {
			response: {},
			config: this.config,
			events: responseEventEmitter,
			message: {},
			mongodb: {},
			store: {}
		};
	}
	
	async init(modeStore) {
		if( 'mongodb' in this.config )
			this.options.mongodb = await MongodbWorker.createCollection(this.config.mongodb);
		
		this.options.store = modeStore
	}
	async run(options) {
		try {
			let {type, data} = options.message;
			await this.validate(data);
			
			this.options.message = data;
			this.options.response = options.response || options.socket;
			
			await this.workers[type](this.options);
		} catch( message ) {
			let responseOptions = {label: 'success', message, response: options.response};
			responseEventEmitter.emit('response-post-request', responseOptions)
		}
	}
	async validate(message) {
		let messageMap = Object.entries(message);
		if( messageMap.length !== this.schema.__length ) return Promise.reject();
		
		return Promise.all(messageMap.map(([key, value]) => {
			if( key in this.schema ) {
				let schema = this.schema[key];
				if( typeof value !== typeof schema.type() || !schema.validate(value) )
					return Promise.reject(schema.error);
			} else {
				let error = new Error('invalid key');
				return Promise.reject(error);
			}
		}))
	}
}

/*** exports [end] ***/

module.exports = ModuleWorker;