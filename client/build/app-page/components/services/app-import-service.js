'use strict';

/*** exports [begin] ***/

async function importModule({options, handler}) {
	let $import = await import(`../../modules/${options.name}.js`);
	return await handler($import.default);
}

/*** exports [end] ***/

export { importModule, importLoginPageComponent };