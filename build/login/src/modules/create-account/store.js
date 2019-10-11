'use strict';

/*** imports [begin] ***/

import storeWorker from 'fetot-worker-modules/store-worker';

/*** imports [end] ***/
/*** exports [begin] ***/

const store = storeWorker.init({
	title: 'New account',
	link: 'Back to start',
	content: {
		inputs: [ 'fullname', 'password' ],
		button: 'Create'
	}
});

/*** exports [end] ***/

export default store;