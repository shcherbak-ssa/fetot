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
		this.store = new Map();
	}
	
	static async initMode(modeName) {
		return new ModeWorker(fetotModes.get(modeName));
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