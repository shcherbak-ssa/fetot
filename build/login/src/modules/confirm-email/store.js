'use strict';

/*** imports [begin] ***/

import storeWorker from 'fetot-worker-modules/store-worker';

/*** imports [end] ***/
/*** exports [begin] ***/

const store = storeWorker.createLocalStore({
	title: 'Confirm email',
	link: 'Change email address',
	content: {
		text: 'Please, check your email and enter the received code',
		inputs: [ 'confirm-email' ]
	}
});

/*** exports [end] ***/

export default store;