'use strict';

const path = require('path'),
	validation = require('./validation'),
	
	error404Filename = validation.get(404),
	error404 = () => Promise.reject(error404Filename);

async function httpRequest(url) {
	if( /[^a-z.1-9\/]/ig.test(url) ) return error404();
	
	let {base, name, ext: extname} = path.parse(url);
	for( let [key, {valid, filename}] of validation ) if( key !== 404 && key.test(extname) )
		return valid.has(name) ? filename(base) : error404();
	
	return error404();
}

module.exports = httpRequest;