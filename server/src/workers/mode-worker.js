'use strict';

/*** exports [begin] ***/

class ModeWorker {
	constructor(modules) {
		this.modules = new Map( Object.entries(modules) );
		this.currentModule = {};
	}
	
	async runCurrentModuleWorker(options) {
		this.currentModule.run(options)
	}
	async changeCurrentModule(moduleName) {
		this.currentModule = this.modules.get(moduleName);
	}
}

/*** exports [end] ***/

module.exports = ModeWorker;