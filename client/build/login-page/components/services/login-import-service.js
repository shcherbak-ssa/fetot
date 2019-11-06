'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';

/*** imports [end] ***/
/*** exports [begin] ***/

async function importModule({options, handler}) {
	let $import = await import(`../../modules/${options.name}.js`);
	return await handler($import.default);
}
async function importLoginPageComponent({handler}) {
	await Vue.component('login-page', () => import(`../../view/login-page.vue`))();
	return await handler();
}

/*** exports [end] ***/

export { importModule, importLoginPageComponent };