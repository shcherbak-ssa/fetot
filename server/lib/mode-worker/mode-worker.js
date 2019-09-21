'use strict';

const ModuleWorker = require('../module-worker');

class ModeWorker {
	constructor({config, modules,}) {
		this.config = config;
		this.modules = modules;
		
		this.mongodb = {};
	}
	
	static async init(options, mongoWorker) {
		let modeWorker = new ModeWorker(options);
		
		await modeWorker.initMongodb(mongoWorker);
		await modeWorker.initModules(mongoWorker);
		
		return modeWorker;
	}
	
	async initMongodb(mongoWorker) {
		this.mongodb = mongoWorker.createDB(this.config.db);
	}
	async initModules(mongoWorker) {
		let returnModules = new Map();
		for( let [name, options] of Object.entries(this.modules) ) {
			returnModules.set(name, ModuleWorker.init(options, mongoWorker));
		}
		
		this.modules = returnModules;
	}
	
	async run({type, data}) {
		let [moduleName, workerName] = type.split('/');
		// console.log(type);
		// console.log(message);
		// console.log(this.modules);
		return await this.modules.get(moduleName).run(workerName, data);
	}
}

module.exports = ModeWorker;