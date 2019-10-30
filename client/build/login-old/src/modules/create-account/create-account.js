'use strict';

/*** imports [begin] ***/

import fetchRequest from 'fetot-network-modules/fetch-request';

import store from './store';
import worker from './worker';

/*** imports [end] ***/
/*** exports [begin] ***/

async function init() {
	console.log('init create-account module');
	
	let response = await fetchRequest.changeModule('create-account');
	console.log(response);
}

/*** exports [end] ***/

export default { init, store, worker }