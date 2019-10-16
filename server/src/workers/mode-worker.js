'use strict';

/*** imports [begin] ***/

const fetotModes = require('../../fetot-modes'),
	ModuleWorker = require('./module-worker');

/*** imports [end] ***/
/*** exports [begin] ***/

class ModeWorker {
	constructor({modules}) {
		this.modules = modules;
		this.currentModule = {};
		this.store = {}
	}
	
	static async initMode(modeName, currentModuleName) {
		let modeWorker = new ModeWorker(fetotModes.get(modeName));
		await modeWorker.changeCurrentModule(currentModuleName);
		
		return modeWorker;
	}
	
	async runCurrentModuleWorker(options) {
		this.currentModule.run(options)
	}
	async changeCurrentModule(moduleName) {
		if( !(moduleName in this.store) ) this.store[moduleName] = new Map();
		
		this.currentModule = new ModuleWorker(this.modules.get(moduleName));
		await this.currentModule.init(this.store);
	}
}

/*** exports [end] ***/

module.exports = ModeWorker;