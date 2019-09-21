'use strict';

const parseValidationSchema = require('./src/parse-validation-schema');

class ModuleWorker {
	constructor({config, workers, errors, validationSchema}) {
		this.config = config;
		this.workers = workers;
		this.errors = errors;
		this.validationSchema = validationSchema;
		
		this.mongoCollection = {};
	}
	
	static init(options, mongoWorker) {
		let moduleWorker = new ModuleWorker(options);
		
		moduleWorker.initWorkers();
		moduleWorker.initValidation();
		moduleWorker.initMongoCollection(mongoWorker);
		
		return moduleWorker;
	}
	
	initWorkers() {
		this.workers = new Map( Object.entries(this.workers) )
	}
	initValidation() {
		this.validationSchema = parseValidationSchema(this.validationSchema)
	}
	initMongoCollection(mongoWorker) {
		let {db, collection} = this.config.mongo;
		this.mongoCollection = mongoWorker.createCollection(db, collection);
	}
	
	async run(worker, message) {
		let valid = await this.validation(message);
		message = (typeof valid === 'string') ? valid : await this.workers.get(worker)(message, this.mongoCollection);
		
		return this.returnMessage(message);
	}
	
	async returnMessage(label, data) {
		let {type, message} = this.config.messages[label];
		if( typeof message === 'function' ) message = message(data);
		
		return {type, message}
	}
	
	async validation(message) {
		message = new Map(Object.entries(message));
		
		if( message.size === this.validationSchema.size ) {
			for( let [key, value] of message.entries() ) {
				let valid = this.validationSchema[key](value);
				if( typeof valid === 'string' ) return valid
			}
			return true
		}
		
		throw new Error('Invalid message');
	}
}

module.exports = ModuleWorker;