'use strict';

const path = require('path'),
	validateMap = require('./validate'),
	reject = Promise.reject;

module.exports = (requestUrl) => {
	if( checkRequestUrl(requestUrl) ) return Promise.resolve('404');
	
	let {base, name, ext: extname} = path.parse(requestUrl);
	for( let [key, {valid, filename}] of validateMap ) if( key.test(extname) )
		return valid.has(name) ? filename(base) : reject();
	
	return reject();
};
function checkRequestUrl(url) {
	switch( true ) {
		case /\s/g.test(url): return true;
		case /[^a-z.1-9\/]/i.test(url): return true;
		default: return false
	}
}