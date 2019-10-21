'use strict';

/*** imports [begin] ***/

const object2mapWorker = require('../../lib/object2map-worker');

/*** imports [end] ***/
/*** exports [begin] ***/

const appMode = {
	modules: object2mapWorker({})
};

/*** exports [end] ***/

module.exports = appMode;