'use strict';

/*** imports [begin] ***/

import imports from '../services/imports';

/*** imports [end] ***/
/*** exports [begin] ***/

async function importEventHandler({options, handler}) {
	let importData = await imports(options);
	await handler(importData);
}

/*** exports [end] ***/

export default importEventHandler;