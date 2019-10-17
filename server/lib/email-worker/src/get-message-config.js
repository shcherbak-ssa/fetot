'use strict';

/*** imports [begin] ***/

const fs = require('fs'),
	path = require('path');

/*** imports [end] ***/
/*** exports [begin] ***/

async function getMessageConfig({clientEmail, subject, type}) {
	return {
		from: 'shcherbakov.ssa@gmail.com',
		to: clientEmail,
		subject: subject,
		text: '',
		html: getMessageHTML(type)
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

function getMessageHTML(type) {
	switch( type ) {
		case 'sing-in': return readFile(path.join(__dirname, 'html/sing-in-email.html'));
		case 'test': return readFile(path.join(__dirname, 'html/test.html'))
	}
}
function readFile(filename) {
	let filedata = fs.readFileSync(filename, {encoding: 'utf-8'});
	return filedata.replace(/\s/g, (val) => val === ' ' ? ' ' : '');
}

/*** src [end] ***/

module.exports = getMessageConfig;