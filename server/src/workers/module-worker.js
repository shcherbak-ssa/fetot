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
			response: this.config.response,
			events: responseEventEmitter,
			message: {},
			mongodb: {},
			store: new Map()
		};
	}
	
	async init() {
		this.options.mongodb = await MongodbWorker.createCollection(this.config.mongodb);
	}
	async run(message) {
		try {
			let {type, data} = message;
			message = await this.validate(data);
			
			this.options.message = message;
			this.workers.get(type)(this.options);
		} catch( err ) {
			console.log(err)
		}
	}
	async validate(message) {
		let messageMap = Object.entries(message);
		if( messageMap.length !== this.schema.__length ) return Promise.reject();
		
		return Promise.all(messageMap.map(([key, value]) => {
			if( key in this.schema ) {
				let schema = this.schema[key];
				if( typeof value !== typeof schema.type() ) return Promise.reject();
				
				let valid = schema.validate(value);
				if( !valid ) return Promise.reject();
				
				return message
			} else {
				return Promise.reject();
			}
		}))
	}
}

/*** exports [end] ***/

module.exports = ModuleWorker;