'use strict';

/*** imports [begin] ***/

import Events from 'fetot-js-modules/events';
const appEventsEmitter = Events.createEmitter('app');

/*** imports [end] ***/
/*** exports [begin] ***/

async function initAppEventsEmitter() {
	console.log('init app events emitter');
	appEventsEmitter
		.on('workspace-button-click', () => {
			console.log('workspace-button-click')
		})
		.on('workspace-link-click', () => {
			console.log('workspace-link-click')
		})
}

/*** exports [end] ***/

export default initAppEventsEmitter;