'use strict';

/*** init [begin] ***/

const	url = 'mongodb://localhost:27017',
	options = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	};

/*** init [end] ***/
/*** exports [begin] ***/

const	mongodbOptions = { url, options };

/*** exports [end] ***/

module.exports = mongodbOptions;