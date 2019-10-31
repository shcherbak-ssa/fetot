'use strict';

/*** imports [begin] ***/

const fetotModes = require('../../fetot-modes'),
	ModuleWorker = require('./module-worker');

/*** imports [end] ***/
/*** exports [begin] ***/

class ModeWorker {
	constructor({modules, config}) {
		this.modules = modules;
		this.config = config;
		
		this.currentModule = {};
		this.store = new Map();
	}
	
	static async initMode(mode, data) {
		let currentMode = fetotModes.get(mode);
		if( currentMode.init ) currentMode.config = await currentMode.init(data);
		
		return new ModeWorker(currentMode);
	}
	
	async runCurrentModule(options) {
		this.currentModule.run(options)
	}
	async changeCurrentModule(moduleName) {
		this.currentModule = new ModuleWorker(this.modules.get(moduleName));
		await this.currentModule.init(this.store);
	}
}

/*** exports [end] ***/

module.exports = ModeWorker;