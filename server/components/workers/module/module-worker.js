'use strict';

/*** imports [begin] ***/

const categoriesWorker = require('./components/categories-worker');
const blocksWorker = require('./components/blocks-worker');

/*** imports [end] ***/
/*** exports [begin] ***/

const moduleWorker = {
	...categoriesWorker,
	...blocksWorker
};

/*** exports [end] ***/

module.exports = moduleWorker;