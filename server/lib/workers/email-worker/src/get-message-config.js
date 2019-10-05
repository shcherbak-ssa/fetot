'use strict';

const fs = require('fs'),
	path = require('path');

async function getMessageConfig({clientEmail, subject, type}) {
	return {
		from: 'shcherbakov.ssa@gmail.com',
		to: clientEmail,
		subject: subject,
		text: '',
		html: getMessageHTML(type)
	}
}
function getMessageHTML(type) {
	switch( type ) {
		case 'sing-in': return readFile(path.join(__dirname, 'html/singin-email.html'));
	}
}
function readFile(filename) {
	let filedata = fs.readFileSync(filename, {encoding: 'utf-8'});
	return filedata.replace(/\s/g, (val) => val === ' ' ? ' ' : '');
}

module.exports = getMessageConfig;