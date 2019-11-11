'use strict';

/*** exports [begin] ***/

async function importModuleService(name) {
	let $import = await import(`../../modules/${name}.js`);
	return $import.default;
}

/*** exports [end] ***/

export default importModuleService;