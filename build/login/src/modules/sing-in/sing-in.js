'use strict';

/*** imports [begin] ***/

import fetchRequest from 'fetot-network-modules/fetch-request';

import store from './store';
import worker from './worker';

/*** imports [end] ***/
/*** exports [begin] ***/

async function init() {
	console.log('init sing-in module');
	
	let response = await fetchRequest.changeModule('sing-in');
	console.log(response);
}

/*** exports [end] ***/

export default { init, store, worker }