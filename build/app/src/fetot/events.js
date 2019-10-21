'use strict';

/*** imports [begin] ***/

import EventsEmitter from 'fetot-js-modules/events-emitter';

import selectModuleHandler from './events-handlers/fetot/select-module-handler';

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

const fetotEventEmitter = EventsEmitter.createEmitter('fetot');

async function setFetotEventsHandlers(options) {
	fetotEventEmitter
		.on('fetot-select-module', selectModuleHandler)
		.on('fetot-open-home-page', (label) => {
			options.store['home-page-open'] = label;
		})
}

/*** exports [end] ***/

export default {
	fetotEventEmitter,
	setFetotEventsHandlers
}