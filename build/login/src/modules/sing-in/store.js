'use strict';

/*** imports [begin] ***/

import storeWorker from 'fetot-worker-modules/store-worker';

/*** imports [end] ***/
/*** exports [begin] ***/

const store = storeWorker.init({
	title: 'Sing in',
	link: 'Already have an account',
	content: {
		inputs: [ 'email' ],
		button: 'Continue'
	}
});

/*** exports [end] ***/

export default store;