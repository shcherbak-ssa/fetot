'use strict';

async function getRequestParse({url, headers}, response) {
	if( /[]/.test(url) ) return false;
}