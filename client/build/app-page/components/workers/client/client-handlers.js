'use strict';

/*** imports [begin] ***/

import {clientStore} from './client-store';

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

const clientHandlers = {
	clientOpenMenuHandler
};

/*** exports [end] ***/
/*** src [begin] ***/

async function clientOpenMenuHandler(options) {
	alert(clientStore.state.config)
}

/*** src [end] ***/

export default clientHandlers;