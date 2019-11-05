'use strict';

/*** imports [begin] ***/

import Vue from 'vue/dist/vue';

/*** imports [end] ***/
/*** exports [begin] ***/

async function imports(options) {
	switch( options.type ) {
		case 'module':
			return await import(options.path).default;
		case 'component':
			return Vue.component(options.name, () => import(options.path))
	}
}

/*** exports [end] ***/

export default imports;