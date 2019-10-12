'use strict';

/*** imports [begin] ***/

import store from './store';
import worker from './worker';

/*** imports [end] ***/
/*** exports [begin] ***/

async function init() {
	console.log('init create-account module');
}

/*** exports [end] ***/

export default { init, store, worker }