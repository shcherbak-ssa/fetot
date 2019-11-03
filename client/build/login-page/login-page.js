'use strict';

/*** imports [begin] ***/

import fetot from 'fetot';
import initLoginPage from './components/init-login-page';

/*** imports [end] ***/
/*** init [begin] ***/

Promise.resolve()
	.then(() => {
		return initLoginPage();
	})
	.then((options) => {
		return fetot.init(options);
	})
	.catch((err) => {
		console.log(err);
	});

/*** init [end] ***/