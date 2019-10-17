'use strict';

/*** imports [begin] ***/

const fs = require('fs'),
	path = require('path'),
	
	initHandlebars = require('./handlebars-worker');

/*** imports [end] ***/
/*** init [begin] ***/

const Handlebars = initHandlebars();

/*** init [end] ***/
/*** exports [begin] ***/

async function getLetterConfig({clientEmail, subject, type, data}) {
	return {
		from: 'shcherbakov.ssa@gmail.com',
		to: clientEmail,
		subject: subject,
		text: '',
		html: getLetterHTML(type, data)
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

function getLetterHTML(type, data) {
	switch( type ) {
		case 'confirm-email': return readFile(path.join(__dirname, 'html/confirm-email.html'), data);
	}
}
function readFile(filename, data) {
	let filedata = fs.readFileSync(filename, {encoding: 'utf-8'}),
		template = Handlebars.compile(filedata);
	
	return template(data);
}

/*** src [end] ***/

module.exports = getLetterConfig;