'use strict';

/*** imports [begin] ***/

import {clientStore, createClientStore} from './client-store';
import clientHandlers from './client-handlers';

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

const clientWorker = {
	createClientStore
};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export { clientStore, clientWorker, clientHandlers };