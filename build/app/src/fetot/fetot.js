'use strict';

/*** imports [begin] ***/

import storeWorker from 'fetot-worker-modules/store-worker';
import locStorage from 'fetot-js-modules/local-storage';
import fetchRequest from 'fetot-network-modules/fetch-request';

import events from './events';

import modesStore from '../store/modes.json';

/*** imports [end] ***/
/*** init [begin] ***/

const client = locStorage.getStorageItem('client');
const outputOptions = {
	events: {
		fetot: events.fetotEventEmitter
	},
	store: {
		'home-page-open': true,
		'current-module': null,
		modes: modesStore
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

async function initFetot() {
	let response = await fetchRequest.connection({currentMode: 'personal', data: client});
	storeWorker.appendGlobalStore('client', response);
	
	await events.setFetotEventsHandlers();
	
	return outputOptions;
}

/*** exports [end] ***/

export default {
	init: initFetot
}