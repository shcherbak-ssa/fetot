'use strict';

const ModuleWorker = require('../module-worker');

class ModeWorker {
	constructor({config, modules, fetotClientEventEmitter}) {
		this.config = config;
		this.modules = modules;
		
		this.fetotClientEventEmitter = fetotClientEventEmitter;
		this.mongodb = {};
	}
	
	static async init(options, mongoWorker) {
		let modeWorker = new ModeWorker(options);
		
		await modeWorker.initModules(mongoWorker);
		
		return modeWorker;
	}
	
	async initModules(mongoWorker) {
		let returnModules = new Map();
		
		for( let [name, options] of Object.entries(this.modules) ) {
			Object.assign(options, {fetotClientEventEmitter: this.fetotClientEventEmitter});
			returnModules.set(name, ModuleWorker.init(options, mongoWorker));
		}
		
		this.modules = returnModules;
	}
	
	async run({type, data}) {
		let [moduleName, workerName] = type.split('/');
		await this.modules.get(moduleName).run(workerName, data);
	}
}

module.exports = ModeWorker;