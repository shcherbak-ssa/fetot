'use strict';

const validate = module.exports = {},
	path = require('path'),
	loadingValidate = require('./src/loading-validate'),
	error404Filename = loadingValidate[404];

validate.httpGetRequest = (url) => {
	if( /\s/.test(url) ) return Promise.reject(error404Filename);
	
	let {name, ext} = path.parse(url);
	if( !ext ) return Promise.reject(error404Filename);
	
	let validateData = loadingValidate[ext.slice(1)];
	if( !validateData || !isValideName() ) return Promise.reject(error404Filename);
	
	return path.join(validateData.dirname, url);
	
	function isValideName() {
		return validateData.valid.includes(name);
	}
};