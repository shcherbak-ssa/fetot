'use strict';

/*** imports [begin] ***/

import src from './src';

/*** imports [end] ***/
/*** exports [begin] ***/

function initSection() {
	function section(name) {
		return this.map.get(name);
	}
	
	section.map = new Map();
	section.create = src.create.bind(section, new Map());
	section.delete = src.delete.bind(section);
	
	return section
}

/*** exports [begin] ***/

export default initSection;