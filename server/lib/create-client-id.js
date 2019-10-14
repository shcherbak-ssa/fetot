'use strict';

/*** imports [begin] ***/

const asyncNanoid = require('nanoid/async');

/*** imports [end] ***/
/*** init [begin] ***/



/*** init [end] ***/
/*** exports [begin] ***/

async function creatClientID() {
	return await asyncNanoid();
}

/*** exports [end] ***/

module.exports = creatClientID;