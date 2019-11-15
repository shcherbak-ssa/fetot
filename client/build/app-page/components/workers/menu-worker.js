'use strict';

/*** imports [begin] ***/

import eventsEmitterWorker from '$fetot-events-emitter';

/*** imports [end] ***/
/*** init [begin] ***/

const appEventsEmitter = eventsEmitterWorker.getEmitter('app');

/*** init [end] ***/
/*** exports [begin] ***/

const menuWorker = {
	async addSubmenuEventListener(type, handler) {
		return new Promise((success) => {
			const submenuEvent = `submenu-${type}-event`;
			return appEventsEmitter.on(submenuEvent, submenuHandler);
			
			async function submenuHandler(label) {
				await handler(label);
				appEventsEmitter.remove(submenuEvent, submenuHandler);
				
				return success();
			}
		})
	},
	triggerSubmenuEvent(type, options) {
		appEventsEmitter.emit(`submenu-${type}-event`, options);
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default menuWorker;