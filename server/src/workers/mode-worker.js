'use strict';

/*** imports [begin] ***/

const fetotModes = require('../../fetot-modes');

/*** imports [end] ***/
/*** exports [begin] ***/

class ModeWorker {
	constructor({modules}) {
		this.modules = modules;
		this.currentModule = {};
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
		this.currentModule = this.modules.get(moduleName).init();
	}
}

/*** exports [end] ***/

module.exports = ModeWorker;