'use strict';

/*** imports [begin] ***/

const MongodbWorker = require('../mongodb-worker'),
	validateWorker = require('./validate-worker'),
	
	{responseEventEmitter} = require('../../server-events-emitters');

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
		} catch( errorMessage ) {
			responseEventEmitter.emit(
				'response-post-request',
				{
					label: 'success',
					response: options.response,
					message: {type: 'error', message: errorMessage}
				}
			)
		}
	}
	async validate(message) {
		return await validateWorker(this.schema, message)
	}
}

/*** exports [end] ***/

module.exports = ModuleWorker;