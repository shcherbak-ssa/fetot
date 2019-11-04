'use strict';

/*** imports [begin] ***/

import Vuex from 'vuex';

/*** imports [end] ***/
/*** exports [begin] ***/

let storeWorkers = {};

async function initStoreWorkers() {
	storeWorkers = new Vuex.Store({});
}

/*** exports [end] ***/

export const StoreWorkers = { store: storeWorkers, init: initStoreWorkers };