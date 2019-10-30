'use strict';

/*** imports [begin] ***/

import fetchRequest from 'fetot-network-modules/fetch-request';

import store from './store';
import worker from './worker';

/*** imports [end] ***/
/*** exports [begin] ***/

async function init() {
	console.log('init login module');
	
	let response = await fetchRequest.changeModule('login');
	console.log(response);
}

/*** exports [end] ***/

export default { init, store, worker }